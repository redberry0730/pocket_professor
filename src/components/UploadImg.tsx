import React, { useState } from 'react';

const UploadImg: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div id="uploadImage">
      <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg" />
    </div>
  );
};

export default UploadImg;