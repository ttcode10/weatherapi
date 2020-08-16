const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
// const { getWeather } = require('./../controllers/weather');

router.get('/:woeid', async (req, res) => {
  try {
    const woeid = req.params.woeid;
    console.log(woeid);
    const response = await axios.get(
      `https://www.metaweather.com/api/location/${woeid}`

      // `https://api.openweathermap.org/data/2.5/weather?q=hongkong&units=metric&appid=160e39e774ee87b9f210bbf1edb32f44`
    );
    if (!response) {
      return res.status(404).json('Results not found');
    }
    return res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json('Server error');
    console.error(error);
  }
});

module.exports = router;
