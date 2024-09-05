import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar';
import HourlyWeather from './Components/HourlyWeather';
import CurrentWeather from './Components/CurrentWeather';
import LoadingPage from './Components/LoadingIndicator';
import ErrorPage from './Components/Error';

const App = () => {
  const [city, setCity] = useState('Bangalore');
  const [weather, setWeather] = useState(null);
  const [selectedTab, setSelectedTab] = useState('Hourly');
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = process.env.REACT_APP_API_KEY;

  // Memoize fetchWeather function
  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError('');
    try {
      setCity(city);
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeather(weatherResponse.data);

      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
      setForecast(forecastResponse.data.list);
    } catch (err) {
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [apiKey]); // Only change if apiKey changes

  useEffect(() => {
    fetchWeather(city);
  }, [city, fetchWeather]); // Add city and fetchWeather as dependencies

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <NavBar onSearch={fetchWeather} onTabChange={handleTabChange} />

      {loading && <LoadingPage />}

      {error && !loading && <ErrorPage errorMessage={error} />}

      {!loading && !error && city && (
        <>
          {selectedTab === 'Current' && <CurrentWeather weatherData={weather} />}
          {selectedTab === 'Hourly' && <HourlyWeather forecast={forecast} city={city} />}
        </>
      )}
    </div>
  );
};

export default App;
