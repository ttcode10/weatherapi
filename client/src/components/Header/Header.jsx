import React from 'react';

import styles from './Header.module.scss';

import Search from './components/Search';

const Header = () => {
  return (
    <div className={styles.container}>
      <Search />
    </div>
  );
}

export default Header;