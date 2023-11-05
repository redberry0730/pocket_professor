import React, { useState, useRef } from 'react';
import axios from 'axios';

const UploadImage: React.FC = () => {
  // Using the state variable names from HEAD
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // Using the file input ref from your friend's changes
  const fileInputRef = useRef<HTMLInputElement>(null);

  // This handles file selection and clears the extracted text
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setExtractedText(''); // Clear the previous extracted text
    }
  };

  // This handles the file upload process
  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      setIsUploading(true);

      try {
        const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setExtractedText(response.data.result);
      } catch (error) {
        console.error('Error uploading file:', error);
        setExtractedText('Error: Could not extract text. Please try again.');
      } finally {
        setIsUploading(false);
      }
    }
  };

  // This function triggers the file input when the button is clicked
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      {/* Adding the label from your friend's changes */}
      <label htmlFor="getFile" style={{ marginBottom: '10px' }}>Please upload an image (png/jpeg): </label>
      {/* The file input is hidden, but can be triggered by the button click */}
      <input
        type="file"
        ref={fileInputRef}
        id="getFile"
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
        style={{ display: 'none' }}
      />
      {/* The button from your friend's changes, with the text change while uploading */}
      <button onClick={handleButtonClick} disabled={isUploading} style={{marginBottom:'15px'}}>
        {isUploading ? 'Uploading...' : 'Choose Image'}
      </button>
      {/* Display the extracted text in a textarea */}
      {extractedText && (
        <textarea
          value={extractedText}
          readOnly
          style={{ width: '100%', height: '150px', marginTop: '10px' }}
        />
      )}
    </div>
  );
};

export default UploadImage;
