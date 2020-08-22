import React, { useState } from 'react';

import styles from './Search.module.scss';

const Search = () => {
  const [input, setInput] = useState('');
  

  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="Search any world city..." />
      <span className="fa fa-search no-results"></span>
    </div>
  );
}

export default Search;
