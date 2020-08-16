import React from 'react';
import Map from './components/Map';
import NoResults from './components/NoResults';

const SearchResults = ({ beforeSearch, noResults }) => {
  return (
    <div className='search-results__container'>
      { beforeSearch ? <Map /> : '' }
      { noResults ? <NoResults /> : '' }
    </div>
  );
}

export default SearchResults;
