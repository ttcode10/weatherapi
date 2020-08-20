import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import convertWeatherIconNaming from './convertWeatherIconNaming';

import Text from './../../components/Text';
import WeatherIcon from './../../components/WeatherIcon';
import SpaceBetweenRow from './../../components/SpaceBetweenRow';
import Card from './../../components/Card';
import Spinner from './../../components/Spinner';
import NotFound from './../NotFound';

const WeatherDetails = props => {
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
    console.log(iconCode);
    return convertWeatherIconNaming.iconCode;
  };

  const currentWeatherInfo = [
    { size:'lg', title: '', unit: '', children: `${requestedData.name && requestedData.name}` },
    { size:'sm', title: 'Updated on', unit: '', children: `${requestedData.dt && calculateTimeFromNow(requestedData.dt)}` },
    { size:'lg', title: '', unit: '°C', children: `${requestedData.main && requestedData.main.temp.toFixed(0)}` },
    { size:'sm', title: '', unit: '', children: `${requestedData.weather && requestedData.weather[0].main}` },
    { size:'sm', title: 'Wind Speed', unit: 'mph', children: `${requestedData.wind && requestedData.wind.speed}` },
    { size:'sm', title: 'Humidity', unit: '%', children: `${requestedData.main && requestedData.main.humidity}` },
    { size:'sm', title: 'Visibility', unit: 'km', children: `${(requestedData.visibility/1000).toFixed(1)}` },
  ];

  if (fetchData.loaded === false) {
    return (<Spinner />);
  } else if ((fetchData.loaded === true) && (fetchData.weatherData === {} || fetchData.weatherData === 'Server error')) {
    return (<NotFound />);
  } else {
    return (
      <>
        <SpaceBetweenRow
          left={
            currentWeatherInfo.slice(0, 2).map(item =>
              <Text
                key={item.title}
                title={item.title}
                unit={item.unit}
                size={item.size}
              >
                {item.children}
              </Text>
            )
          }
          right={
            currentWeatherInfo.slice(2, 4).map(item =>
              <Text
                key={item.title}
                title={item.title}
                unit={item.unit}
                size={item.size}
              >
                {item.children}
              </Text>
            )
          }
        />
        <SpaceBetweenRow
          left={
            currentWeatherInfo.slice(4, 8).map(item =>
              <Text
                key={item.title}
                title={item.title}
                unit={item.unit}
                size={item.size}
              >
                {item.children}
              </Text>
            )
          }
          right={
            <>
              <WeatherIcon iconName='hr' />
            </>
          }
        />
        <Card date="2020-08-16" minTemp="17" maxTemp="24" iconName={getWeatherIconCode} unit="°C" />
      </>
    );
  }
}

export default WeatherDetails;
