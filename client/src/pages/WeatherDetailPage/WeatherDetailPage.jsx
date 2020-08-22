import React, { useState, useEffect } from 'react';
import moment from 'moment';

import styles from './WeatherDetailPage.module.scss';

import convertWeatherIconNaming from './convertWeatherIconNaming';

import Text from '../../components/Text';
import WeatherIcon from '../../components/WeatherIcon';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
import NotFound from '../../components/NotFound';

const WeatherDetailPage = props => {
  const [fetchData, setFetchData] = useState({
    loaded: false,
    weatherData: {}
  });

  useEffect(() => {
    async function getWeatherData(woeid) {
      try {
        console.log('1');
        const response = await fetch(`/api/weather/${woeid}`);
        const data = await response.json();
        setFetchData({
          loaded: true,
          weatherData: data
        })
      } catch (error) {
        console.log(error.message);
      }
    };
    getWeatherData();
  }, []);

  const requestedData = fetchData.weatherData;

  const calculateTimeFromNow = (time) => {
    return moment.unix(time).fromNow();
  }

  const getWeatherIconCode = () => {
    const iconCode = requestedData.weather[0].icon;
    return convertWeatherIconNaming[iconCode];
  };

  const currentWeatherInfo = [
    { size:'lg', title: '', unit: '', children: `${requestedData.name && requestedData.name}` },
    { size:'sm', title: 'Updated', unit: '', children: `${requestedData.dt && calculateTimeFromNow(requestedData.dt)}` },
    { size:'lg', title: '', unit: '°C', children: `${requestedData.main && requestedData.main.temp.toFixed(0)}` },
    { size:'sm', title: '', unit: '', children: `${requestedData.weather && requestedData.weather[0].main}` },
    { size:'sm', title: 'Max Temperature', unit: '°C', children: `${requestedData.main && requestedData.main.temp_max.toFixed(0)}` },
    { size:'sm', title: 'Min Temperature', unit: '°C', children: `${requestedData.main && requestedData.main.temp_min.toFixed(0)}` },
    { size:'sm', title: 'Wind Speed', unit: 'mph', children: `${requestedData.wind && requestedData.wind.speed}` },
    { size:'sm', title: 'Humidity', unit: '%', children: `${requestedData.main && requestedData.main.humidity}` },
    { size:'sm', title: 'Visibility', unit: 'km', children: `${(requestedData.visibility/1000).toFixed(1)}` },
  ];

  const sliceData = (start, end) => {
    return (
      currentWeatherInfo.slice(start,end).map(item =>
        <Text
          key={item.children}
          title={item.title}
          unit={item.unit}
          size={item.size}
        >
          {item.children}
        </Text>
      )
    );
  };

  if (fetchData.loaded === false) {
    return (<Spinner />);
  } else if ((fetchData.loaded === true) && (fetchData.weatherData === {} || fetchData.weatherData === 'Server error')) {
    return (<NotFound />);
  } else {
    return (
      <>
        <row1 className={styles.row}>
          <location className={styles.item_left}>{sliceData(0,2)}</location>
          <temp className={styles.item_right}>{sliceData(2,4)}</temp>
        </row1>
        <row2 className={styles.row}>
          <weatherdetails className={styles.item_left}>{sliceData(4,9)}</weatherdetails>
          <icon className={styles.item_right}><WeatherIcon iconName={getWeatherIconCode()} /></icon>
        </row2>
        <row3 className={styles.grid}>
          <card className={styles.card}>
            <Card date="2020-08-16" minTemp="17" maxTemp="24" iconName={getWeatherIconCode()} unit="°C" />
          </card>
          <card className={styles.card}>
            <Card date="2020-08-17" minTemp="17" maxTemp="24" iconName={getWeatherIconCode()} unit="°C" />
          </card>
          <card className={styles.card}>
            <Card date="2020-08-18" minTemp="17" maxTemp="24" iconName={getWeatherIconCode()} unit="°C" />
          </card>
          <card className={styles.card}>
            <Card date="2020-08-19" minTemp="17" maxTemp="24" iconName={getWeatherIconCode()} unit="°C" />
          </card>
          <card className={styles.card}>
            <Card date="2020-08-20" minTemp="17" maxTemp="24" iconName={getWeatherIconCode()} unit="°C" />
          </card>
        </row3>
      </>
    );
  };
};

export default WeatherDetailPage;
