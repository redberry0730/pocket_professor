import React, { useState } from 'react';
import axios from 'axios';

const UploadImage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setExtractedText(''); // Clear the previous extracted text
    }
  };

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

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg" />
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload and Parse Image'}
      </button>
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
