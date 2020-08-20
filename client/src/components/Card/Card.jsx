import React from 'react';
import SingleValueText from './../SingleValueText/';
import WeatherIcon from './../WeatherIcon/';
import './Card.scss';

const Card = ({ date, minTemp, maxTemp, iconName, unit }) => {
  return (
    <div className='card__container'>
      <SingleValueText>{date}</SingleValueText>
      <WeatherIcon iconName={iconName} />
      <div className='card__inline-text'>
        <SingleValueText unit={unit} >{minTemp}</SingleValueText><p>  ~  </p><SingleValueText unit={unit} >{maxTemp}</SingleValueText>
      </div>
    </div>
  );
}

export default Card;
