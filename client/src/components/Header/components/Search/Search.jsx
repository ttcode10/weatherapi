import React from 'react';

import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="Search any world city..." />
      <span className="fa fa-search no-results"></span>
    </div>
  );
}

export default Search;
