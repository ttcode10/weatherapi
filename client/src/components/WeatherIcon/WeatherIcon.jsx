import React from 'react';
import './WeatherIcon.scss';

const WeatherIcon = ({ children }) => {
  return (
    <div className='weather-icon'>
      <img src="https://www.metaweather.com/static/img/weather/lc.svg" alt="weather icon"/>
    </div>
  );
}

export default WeatherIcon;
