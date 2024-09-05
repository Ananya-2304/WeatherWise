import React from 'react';
import './WeatherCard.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faWater } from '@fortawesome/free-solid-svg-icons';

const WeatherCard = ({ time, icon, temperature, condition, humidity, windSpeed }) => {
  return (
    <div className="weather-card">
        <div className="weather-info">
            <p className="time">{time}</p>
        </div>
      <div className="weather-icon">
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={condition} />
      </div>
      <div className="weather-info">
        <p className="temperature">{temperature}°C</p>
        <p className="condition">{condition}</p>
        <div className="additional-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faWater} />
            <span>{humidity}%</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faWind} />
            <span>{windSpeed} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
