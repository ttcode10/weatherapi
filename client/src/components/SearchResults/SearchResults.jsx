import React from 'react';

import Map from './components/Map';
import NoResults from './components/NoResults';

const SearchResults = ({ beforeSearch, noResults }) => {
  return (
    <>
      { beforeSearch ? <Map /> : '' }
      { noResults ? <NoResults /> : '' }
    </>
  );
}

export default SearchResults;
