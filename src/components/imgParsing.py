from flask import Flask, request, jsonify
import easyocr
import os
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/upload": {"origins": "http://localhost:3001"}})
#CORS(app)
# Initialize the reader
reader = easyocr.Reader(['en']) 

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify(error='No file part'), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify(error='No selected file'), 400
    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join('./src/components', filename)
        file.save(filepath)
        result = reader.readtext(filepath, detail=0)
        os.remove(filepath)  # Remove the file after processing
        return jsonify(result=result)

if __name__ == '__main__':
    app.run(debug=True)
