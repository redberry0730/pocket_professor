import React, { useState, useRef } from 'react';
import axios from 'axios';

const UploadImg: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [extractedText, setExtractedText] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newFile = event.target.files[0];
      setSelectedFile(newFile);
      setFileName(newFile.name); // Display the file name
      setExtractedText(''); // Clear the previous extracted text
      await handleUpload(newFile); // Trigger upload after file selection
    }
  };

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    setIsUploading(true);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setExtractedText(response.data.result); // Ensure that response.data has a 'result' property
    } catch (error) {
      console.error('Error uploading file:', error);
      setExtractedText('Error: Could not extract text. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <label>Please upload an image (png/jpeg): </label>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload and Parse Image'}
      </button>
      {fileName && <div>Selected file: {fileName}</div>}
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

export default UploadImg;
