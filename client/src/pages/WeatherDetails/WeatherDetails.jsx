import React, { useState, useEffect } from 'react';
import SingleValueText from './../../components/SingleValueText';
import KeyValuePairText from './../../components/KeyValuePairText';
import WeatherIcon from './../../components/WeatherIcon';
import SpaceBetweenRow from './../../components/SpaceBetweenRow';
import Card from './../../components/Card';
import axios from 'axios';

const WeatherDetails = props => {
  const [weatherData, setWeatherData] = useState({
    isLoaded: false,
    data: null
  });

  useEffect(() => {
    async function getWeatherData() {
      const woeid = props.match.params.woeid;
      // fetch(`/api/weather/${woeid}`)
      //   .then(response => response.json())
      //   .then(data => setWeatherData({
      //     isLoaded: true,
      //     data: data
      //   }))


      const response = await fetch(`/api/weather/${woeid}`);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        isLoaded: true,
        data: data
      });
    };
    getWeatherData();
  }, [props.match.params.woeid]);

  return (
    <div>
      <SpaceBetweenRow
        left={
          <>
            <SingleValueText largeFontSize>london</SingleValueText>
            <SingleValueText>2020-08-15 03:30</SingleValueText>
          </>
        }
        right={
          <>
            <SingleValueText largeFontSize unit="°C">23</SingleValueText>
            <SingleValueText>Light Rain</SingleValueText>
          </>
        }
      />
      <SpaceBetweenRow
        left={
          <>
            <KeyValuePairText title="Wind Speed" unit="mph">3</KeyValuePairText>
            <KeyValuePairText title="Humidity" unit="%">3</KeyValuePairText>
            <KeyValuePairText title="Visibility" unit="km">3</KeyValuePairText>
            <span><KeyValuePairText title="Sunrise">05:48</KeyValuePairText> <KeyValuePairText title="Sunset">20:20</KeyValuePairText></span>

          </>
        }
        right={
          <>
            {/* <WeatherIcon iconName="sn" /> */}
          </>
        }
      />
      <Card date="2020-08-16" minTemp="17" maxTemp="24" iconName="sn" unit="°C" />
    </div>
  );
}

export default WeatherDetails;
