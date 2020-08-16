import React from 'react';
import './NoResults.scss';

const NoResults = () => {
  return (
    <div className='background__noresults'>
      <i class="fa fa-search no-results"></i>
      <h3>No results</h3>
    </div>
  );
}

export default NoResults;
