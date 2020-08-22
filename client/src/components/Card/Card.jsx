import React from 'react';

import styles from './Card.module.scss';

import Text from './../Text';
import WeatherIcon from './../WeatherIcon/';

const Card = ({ date, minTemp, maxTemp, iconName, unit }) => {
  return (
    <container className={styles.container}>
      <date className={styles.text}>
        <Text size='md'>{date}</Text>
      </date>
      <icon className={styles.icon}>
        <WeatherIcon iconName={iconName} />
      </icon>
      <temp className={styles.text}>
        <Text size='sm' unit={unit}>{minTemp}</Text><p>  ~  </p><Text size='sm' unit={unit}>{maxTemp}</Text>
      </temp>
    </container>
  );
}

export default Card;
