import React from 'react';
import './ErrorPage.css'; 

const ErrorPage = ({ errorMessage }) => {
  return (
    <div className="error-page">
      <h2>Oops! Something went wrong.</h2>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
