import React from 'react';

import styles from './WeatherIcon.module.scss';

const WeatherIcon = ({ iconName }) => {
  return (
    <img src={`https://www.metaweather.com/static/img/weather/${iconName}.svg`} alt="weather icon"/>
  );
}

export default WeatherIcon;
