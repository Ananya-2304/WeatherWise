# Weather Application

This is a weather application built with React.js that provides current and hourly weather forecasts. It uses the OpenWeatherMap API to fetch weather data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)

## Features

- Displays current weather information for a given city.
- Provides hourly weather forecasts.
- Shows loading and error messages.
- Default city is set to Bangalore.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **OpenWeatherMap API**: Provides weather data.
- **FontAwesome**: Icons for weather details.
- **CSS**: For styling the application.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/weather-application.git
   cd weather-application
   ```

2. **Install Dependencies**

   Make sure you have `Node.js` and `npm` (or `yarn`) installed. Run the following command to install the required dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root of the project directory and add your OpenWeatherMap API key:

   ```
   REACT_APP_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual API key from OpenWeatherMap.

4. **Start the Development Server**

   Run the following command to start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

   Open your browser and go to `http://localhost:3000` to view the application.

