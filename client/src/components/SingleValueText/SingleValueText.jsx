import React from 'react';
import './SingleValueText.scss';

const SingleValueText = ({ largeFontSize, children, bold }) => {
  return (
    <div className={ bold ? 'bold-text' : '' }>
      { largeFontSize ? <h1>{ children }</h1> : <p>{ children }</p> }
    </div>
  );
}

export default SingleValueText;
