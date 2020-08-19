import React from 'react';
import './SpaceBetweenRow.scss';

const SpaceBetweenRow = ({ left, right }) => {
  return (
    <div className='space-between-row__container'>
      <div className='space-between-row__left'>{left}</div>
      <div className='space-between-row__right'>{right}</div>
    </div>
  );
}

export default SpaceBetweenRow;
