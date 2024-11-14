import React from 'react';
import './component.css';

const LoadingOverlay = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingOverlay;
