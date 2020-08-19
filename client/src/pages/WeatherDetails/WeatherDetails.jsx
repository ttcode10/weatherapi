import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleValueText from './../../components/SingleValueText';
import KeyValuePairText from './../../components/KeyValuePairText';
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

  const getField = () => {
    return requestedData.weather && requestedData.weather[0].main;
  };

  const parseIntTemp = temp => {
    return parseInt(temp);
  }

  const requestedData = fetchData.weatherData;

  const weatherInfo = [
    { title: 'Wind Speed', unit: 'mph', children: '3' },
    { title: 'Humidity', unit: '%', children: '3' },
    { title: 'Visibility', unit: 'km', children: '5' },

    // { title="Humidity", unit="%", children="3"  },
    // { title="Visibility", unit="km", children="3"  },
    // { title="Sunrise" },
    // { title="Sunset" }
  ];

  if (fetchData.loaded === false) {
    return (<Spinner />);
  } else if ((fetchData.loaded === true) && (requestedData === {})) {
    return (<NotFound />);
  } else {
    return (
      <>
        <SpaceBetweenRow
          left={
            <>
              <SingleValueText largeFontSize>{requestedData.name}</SingleValueText>
              <KeyValuePairText title="Last update">{requestedData.dt}</KeyValuePairText>
            </>
          }
          right={
            <>
              <SingleValueText largeFontSize unit="°C">{parseIntTemp(requestedData.main.temp)}</SingleValueText>
              <SingleValueText>{getField()}</SingleValueText>
            </>
          }
        />
        <SpaceBetweenRow
          left={
            weatherInfo.map(item => <KeyValuePairText title={item.title} unit={item.unit}>{item.children}</KeyValuePairText>)
            // <>
            //   <KeyValuePairText title="Wind Speed" unit="mph">3</KeyValuePairText>
            //   <KeyValuePairText title="Humidity" unit="%">3</KeyValuePairText>
            //   <KeyValuePairText title="Visibility" unit="km">3</KeyValuePairText>
            //   <span><KeyValuePairText title="Sunrise">05:48</KeyValuePairText> <KeyValuePairText title="Sunset">20:20</KeyValuePairText></span>
            // </>
          }
          right={
            <>
              <WeatherIcon iconName="sn" />
            </>
          }
        />
        <Card date="2020-08-16" minTemp="17" maxTemp="24" iconName="sn" unit="°C" />
      </>
    );
  }
}

export default WeatherDetails;
