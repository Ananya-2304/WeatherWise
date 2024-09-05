import React from 'react';
import './LoadingPage.css'; // Add appropriate styling

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <h2>Loading Weather Data...</h2>
      <div className="loading-spinner"></div> 
    </div>
  );
};

export default LoadingPage;
