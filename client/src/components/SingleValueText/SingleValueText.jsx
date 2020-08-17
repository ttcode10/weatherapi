import React from 'react';
import './SingleValueText.scss';

const SingleValueText = ({ largeFontSize, children, bold, unit }) => {
  return (
    <div className={ bold ? 'bold-text' : '' }>
      { largeFontSize ? <h1>{ children } {unit}</h1> : <p>{ children } {unit}</p> }
    </div>
  );
}

export default SingleValueText;
