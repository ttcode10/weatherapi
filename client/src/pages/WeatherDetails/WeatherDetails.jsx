import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleValueText from './../../components/SingleValueText';
import KeyValuePairText from './../../components/KeyValuePairText';
import WeatherIcon from './../../components/WeatherIcon';
import SpaceBetweenRow from './../../components/SpaceBetweenRow/';
// import data from './data';

const WeatherDetails = props => {
  const [weatherData, setWeatherData] = useState({
    isLoaded: false,
    data: {}
  });

  async function getWeatherData() {
    // const woeid = props.match.params.woeid;
    try {
      const response = await axios.get(
        // `/api/weather/${woeid}`
        './data'
      );
      console.log(111, response);
      if (!response) {
        console.log('Get data failed');
      }
      return response;
      setWeatherData((response) => ({
        isLoaded: true,
        data: response.data
      }));
    } catch (error) {
      console.log(222, error);
    }
  };

  // useEffect(() => {
  //   getWeatherData(woeid)
  // }, [woeid]);

  return (
    <div>
      <SpaceBetweenRow
        left={<SingleValueText largeFontSize>London</SingleValueText>}
        right={<SingleValueText largeFontSize>23</SingleValueText>}
      />
      
      <SingleValueText largeFontSize >23</SingleValueText>
      <SingleValueText>London</SingleValueText>
      <SingleValueText>London</SingleValueText>
    </div>
  );
}

export default WeatherDetails;
