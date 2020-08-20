import React from 'react';

import './Text.scss';

const Text = ({size, title, children, unit, ...otherProps}) => {
  switch(size) {
    case 'lg':
      return (<h1>{title && `${title}: ` }{ children } {unit}</h1>);
      break;
    case 'md':
      return (<h2>{title && `${title}: ` }{ children } {unit}</h2>);
      break;
    case 'sm':
      return (<p>{title && `${title}: ` }{ children } {unit}</p>);
      break;
    default:
      return '';
  }
}

export default Text;
