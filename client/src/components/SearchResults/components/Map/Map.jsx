import React from 'react';
import { ReactComponent as MapIcon } from './assets/map.svg'
import './Map.scss';

const Map = () => {
  return (
    <div className='map__container'>
      <MapIcon />
      <h3>Look up world weather...</h3>
    </div>
  );
}

export default Map;
