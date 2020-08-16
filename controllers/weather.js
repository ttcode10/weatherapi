const weatherModel = require('./../models/Weather');
const axios = require('axios');
const failedResponse = require('./utils/failedResponse');




// async function getWeather(coordinator) {
//   try {
//     failedResponse(coordinator, 404, 'Location not found');
//     // if (!coordinator) {
//     //   return res.status(404).json('Location not found');
//     // }
//     const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${config.get('weatherApiKey')}`);
//     // if (!response) {
//     //   return res.status(404).json('Results not found');
//     // }
//     failedResponse(response, 404, 'Results not found');
//     const weatherData = weatherModel.getWeather(response);
//     return res.status(200).json(weatherData);
//   } catch (error) {
//     res.status(500).json('Server error');
//     console.error(error);
//   }
// }

// module.exports = getWeather;




// router.get('/:cityName', async (req, res) => {
//   try {

//     const cityName = req.params.cityName;

//     // Model
//     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${config.get('weatherApiKey')}`);
//     if (!response) {

//       // controller
//       return res.status(404).json('Results not found');
//     }
//     return res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json('Server error');
//     console.error(error);
//   }
// });
