const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');
// const { getWeather } = require('./../controllers/weather');

router.get('/:city', async (req, res) => {
  try {
    const woeid = req.params.woeid;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=sydney&units=metric&appid=${config.get('weatherApiKey')}`
    const response = await axios.get(url);
    if (response.status == 200) {
      return res.status(200).json(response.data);
    }
  } catch (error) {
    console.error(error);
    res.status(error.status).json(error);
  }
});

module.exports = router;
