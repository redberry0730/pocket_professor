import React, { useState } from 'react';

const UploadImg: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
      <div>
      <label htmlFor="getFile">Please upload an image(png/jpeg): </label>
      <input type="file" id="getFile" onChange={handleFileChange} accept="image/png, image/jpeg" style={{ marginBottom: '15px' }} />
    </div>
  );
};

export default UploadImg;