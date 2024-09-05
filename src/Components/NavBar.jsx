import React from 'react';
import SearchBar from './SearchBar'; 
import './NavBar.css';

const Navbar = ({ onSearch, onTabChange }) => {
  return (
    <div className="navbar">
      <div className="navbar-main">
        <img src="/Logo.jpg" alt="Logo" className="navbar-logo" />
        <h1 className="app-title">WeatherWise</h1>
        
        <div className="center-search-bar">
          <SearchBar onSearch={onSearch} />
        </div>
        
        <div className="right-tabs">
          <ul className="forecast-tabs">
            <li className="tab" onClick={() => onTabChange('Current')}>Current</li>
            <li className="tab" onClick={() => onTabChange('Hourly')}>Forecast</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
