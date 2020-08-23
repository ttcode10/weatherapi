import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { debounce } from 'lodash';

import styles from './HomePage.module.scss';

// import Routes from './../../routes';
import Background from './../../components/Background';
import Header from './../../components/Header';
import SearchPage from './../SearchPage';

const HomePage = () => {
  const [keyword, setKeyword] = useState({
    isTyping: false,
    keyword: '',
  });

  const [searchResults, setSearchResults] = useState({
    isActived: false,
    searchResults: {},
  });

  const [weatherDetail, setWeatherDetail] = useState({
    isLoaded: false,
    weatherDetail: {},
  });

  const search = debounce((value) => {
    setKeyword({
      isTyping: true,
      keyword: value,
    });
  }, 300)

  const onSearchChange = (e) => {
    const input = e.target.value;
    if (input === '') {
      setKeyword({
        isTyping: false,
        keyword: input,
      })
    }
    search(e.target.value);
  }

  useEffect(() => {
    console.log(keyword);
  }, [keyword])



  return (
    <>
      <Background>
        <Header onSearchChange={e => onSearchChange(e)} />
        <div className={styles.container}>
          <SearchPage />
          {/* <Router>
            <Routes />
          </Router> */}

        </div>
      </Background>
    </>
  );
}

export default HomePage;






