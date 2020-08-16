import React from 'react';
import './Search.scss';

const Search = () => {
  return (
    <div className='search__box'>
      <input type="text" placeholder="Search any world cities..." />
      <span className="fa fa-search no-results"></span>
    </div>
  );
}

export default Search;
