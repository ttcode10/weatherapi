import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Background from './components/Background';
import Header from './components/Header';
// import SingleValueText from './components/SingleValueText';
// import KeyValuePairText from './components/KeyValuePairText';
// import WeatherIcon from './components/WeatherIcon';
// import WeatherDetail from './pages/WeatherDetails/';
import Routes from './routes';

const App = () => (
  <div>

  <Background >
    <Header />
    <div className='container'>
      <Router>
        <Routes />
      </Router>
    </div>
  </Background>
  </div>
);

export default App;