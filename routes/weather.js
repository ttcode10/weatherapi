const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');

router.get('/:cityName', async (req, res) => {
  try {
    const cityName = req.params.cityName;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${config.get('weatherApiKey')}`);
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