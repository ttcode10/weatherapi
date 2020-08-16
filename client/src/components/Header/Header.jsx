import React from 'react';
import './Header.scss';
import Search from './components/Search';

const Header = () => {
  return (
    <div className='header__container'>
      <Search />
    </div>
  );
}

export default Header;