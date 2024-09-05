import React, { useState } from 'react';
import DetailedInfoCard from './DetailedInfoCard';
import WeatherCard from './WeatherCard';
import './HourlyWeather.css'; 

const HourlyWeather = ({ forecast, city }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < forecast.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const weatherData = forecast[currentIndex];
  if (!weatherData) {
    return <div>Loading hourly weather data...</div>;
  }

  const time = new Date(weatherData.dt * 1000).toLocaleTimeString();
  const icon = weatherData.weather[0].icon;
  const temperature = weatherData.main.temp;
  const condition = weatherData.weather[0].description;
  const feelsLike = weatherData.main.feels_like;
  const dewPoint = weatherData.main.temp - ((weatherData.main.humidity / 100) * (temperature - 14.4));
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;
  const cloudiness = weatherData.clouds.all;
  const visibility = weatherData.visibility / 1000; // Convert meters to kilometers
  const pressure = weatherData.main.pressure;

  return (
    <div className="hourly">
        <h1>Hourly Weather Forecast of {city}</h1>
        <div className="hourly-weather-container">
        <button className="arrow-button left-arrow" onClick={handlePrevious}>‹</button>
        <div className="hourly-weather">
            <WeatherCard
                time={time}
                icon={icon}
                temperature={temperature}
                condition={condition}
                humidity={humidity}
                windSpeed={windSpeed}
            />
            <DetailedInfoCard
            time={time}
            icon={icon}
            temperature={temperature}
            condition={condition}
            feelsLike={feelsLike}
            dewPoint={dewPoint}
            humidity={humidity}
            windSpeed={windSpeed}
            cloudiness={cloudiness}
            visibility={visibility}
            pressure={pressure}
            />
        </div>
        <button className="arrow-button right-arrow" onClick={handleNext}>›</button>
        </div>
    </div>
  );
};

export default HourlyWeather;
