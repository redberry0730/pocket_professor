import React, { useState } from 'react';

const UploadImg: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = React.createRef<HTMLInputElement>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <label>Please upload an image (png/jpeg): </label>
      <input
        type="file"
        ref={fileInputRef}
        id="getFile"
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
        style={{ display: 'none' }}
      />
      <button onClick={handleButtonClick} style={{marginBottom:'15px'}}>
        Choose Image
      </button>
    </div>
  );
};

export default UploadImg;