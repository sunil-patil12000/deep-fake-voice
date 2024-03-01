// UploadPage.js
import  { useState } from 'react';
import './UploadPage.css';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    setUploading(true);

    // Simulating file upload with a timeout
    const totalSize = file.size;
    let uploadedSize = 0;

    const uploadInterval = setInterval(() => {
      if (uploadedSize < totalSize) {
        const chunkSize = Math.min(50000, totalSize - uploadedSize);
        uploadedSize += chunkSize;
        const newProgress = (uploadedSize / totalSize) * 100;
        setProgress(newProgress);
      } else {
        clearInterval(uploadInterval);
        setUploadSuccess(true);
        setUploading(false);
      }
    }, 1000);
  };

  return (
    <div className="upload-container">
      <div className={`progress-overlay ${uploading ? 'visible' : ''}`}>
        Uploading...
      </div>

      <h1>File Upload</h1>

      <label className="file-input-label" htmlFor="file-input">
        Choose File
      </label>

      <input
        type="file"
        id="file-input"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {file && (
        <div className="file-input-display">
          <span className="file-name">{file.name}</span>
        </div>
      )}

      <div className="button-container">
        <button onClick={handleUpload}>Upload</button>
      </div>

      {file && (
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {uploadSuccess && (
        <div>
          <p className="success-message">Successfully Uploaded!</p>
        </div>
      )}

      {progress < 100 && (
        <div className="percentage">
          {progress.toFixed(2)}% Complete
        </div>
      )}
    </div>
  );
};

export default UploadPage;
