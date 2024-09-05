import React from 'react';
import './DetailedInfoCard.css'; 

const DetailedInfoCard = ({ time, icon, temperature, condition, feelsLike, dewPoint, humidity, windSpeed, cloudiness, visibility, pressure }) => {
  return (
    <div className="detailed-info">
      <div className="header">
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather icon" className="weather-icon" />
        <div className="time-temp">
          <p className="temp">{temperature}°C</p>
        </div>
      </div>
      <table className="info-table">
        <tbody>
          <tr>
            <td><strong>Temperature:</strong> {temperature}°C</td>
            <td><strong>Feels Like:</strong> {feelsLike}°C</td>
          </tr>
          <tr>
            <td><strong>Condition:</strong> {condition}</td>
            <td><strong>Dew Point:</strong> {dewPoint}°C</td>
          </tr>
          <tr>
            <td><strong>Humidity:</strong> {humidity}%</td>
            <td><strong>Wind Speed:</strong> {windSpeed} m/s</td>
          </tr>
          <tr>
            <td><strong>Cloudiness:</strong> {cloudiness}%</td>
            <td><strong>Visibility:</strong> {visibility} km</td>
          </tr>
          <tr>
            <td colSpan="2"><strong>Pressure:</strong> {pressure} hPa</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailedInfoCard;
