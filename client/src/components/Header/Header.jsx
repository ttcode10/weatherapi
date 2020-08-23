import React from 'react';

import styles from './Header.module.scss';

const Header = ({onSearchChange}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Search any world city..."
          onChange={onSearchChange}
        />
        <span className="fa fa-search no-results"></span>
      </div>
    </div>
  );
}

export default Header;