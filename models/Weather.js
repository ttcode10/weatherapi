class Weather {
  constructor(data) {
    this.lat = data.coord.lat;
    this.lon = data.coord.lon;
    this.currentDayTime = data.dt;
    this.currentTemp = data.main.temp;
    this.windSpeed = data.wind.speed;
    this.humidity = data.main.humidity;
    this.visibility = data.visibility;
    this.sunrise = data.sys.sunrise;
    this.sunset = data.sys.sunset;
    this.weatherIcon = data.weather[0].icon;
    this.weatherDescription = data.weather[0].main;
  };
}

// const currentWeather = new Weather()

async function getWeather(location) {
  const currentWeather = new Weather(response.data.current);
  const forecastWeather = new Weather(response.data.daily);
  const result = { currentWeather, forecastWeather };
  return result;
}