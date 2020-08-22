import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './../../routes';

import styles from './HomePage.module.scss';

import Background from './../../components/Background';
import Header from './../../components/Header';


const HomePage = () => {
  return (
    <>
      <Background>
        <Header />
        <div className={styles.container}>
          <Router>
            <Routes />
          </Router>
        </div>
      </Background>
    </>
  );
}

export default HomePage;






