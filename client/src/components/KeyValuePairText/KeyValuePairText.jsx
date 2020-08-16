import React from 'react';

const KeyValuePairText = ({ title, children, unit }) => {
  return (
    <>
      <p>{title}: {children} {unit}</p>
    </>
  );
}

export default KeyValuePairText;
