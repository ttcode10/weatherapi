import React from 'react';
import './WeatherIcon.scss';

const WeatherIcon = ({ iconName }) => {
  return (
    <div className='weather-icon'>
      <img src={`https://www.metaweather.com/static/img/weather/${iconName}.svg`} alt="weather icon"/>
    </div>
  );
}

export default WeatherIcon;
