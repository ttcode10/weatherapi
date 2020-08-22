import React from 'react';

const Text = ({size, title, children, unit, ...otherProps}) => {
  switch(size) {
    case 'lg':
      return (<h1>{title && `${title}: ` }{children} {unit}</h1>);
    case 'md':
      return (<h2>{title && `${title}: ` }{children} {unit}</h2>);
    case 'sm':
      return (<p>{title && `${title}: ` }{children} {unit}</p>);
    default:
      return '';
  }
}

export default Text;
