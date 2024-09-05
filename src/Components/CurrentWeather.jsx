import React from 'react';
import './DetailedInfoCard.css'; 

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading current weather data...</div>;
  }

  const { main, weather, wind, clouds, visibility, sys } = weatherData;
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const temperature = main.temp;
  const feelsLike = main.feels_like;
  const humidity = main.humidity;
  const windSpeed = wind.speed;
  const weatherCondition = weather[0].description;
  const icon = weather[0].icon;
  const cloudiness = clouds.all;
  const pressure = main.pressure;
  const visibilityKm = visibility / 1000;

  return (
    <div className="current-weather-container">
      <h1>Current Weather in {weatherData.name}</h1>
      <div className="current-weather">
        <p style={{fontSize:'18px',textAlign:'right',fontFamily:'cursive'}}>{date} - {time}</p>
        
        <div className="header">
            <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather icon" className="weather-icon" />
            <div className="time-temp">
            <p className="temp">{temperature}°C</p>
            <p className="condition"><strong>{weatherCondition}</strong></p>
            </div>
        </div>

        <table className="info-table">
            <tbody>
            <tr>
                <td><strong>Feels Like:</strong> {feelsLike}°C</td>
                <td><strong>Clouds:</strong> {cloudiness}%</td>
            </tr>
            <tr>
                <td><strong>Humidity:</strong> {humidity}%</td>
                <td><strong>Pressure:</strong> {pressure} hPa</td>
            </tr>
            <tr>
                <td><strong>Wind Speed:</strong> {windSpeed} m/s</td>
                <td><strong>Visibility:</strong> {visibilityKm} km</td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentWeather;
