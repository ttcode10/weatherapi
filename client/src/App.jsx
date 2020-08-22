import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.module.scss';

import Routes from './routes';
import Background from './components/Background';
import Header from './components/Header';

const App = () => (
  <div>
    <Background>
      <Header />
      <div className={styles.container}>
        <Router>
          <Routes />
        </Router>
      </div>
    </Background>
  </div>
);

export default App;