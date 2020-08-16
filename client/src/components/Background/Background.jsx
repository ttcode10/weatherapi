import React from 'react';
import './Background.scss';

const Background = ({night, children}) => (
  <div className={`background ${night ? 'background__color--night' : 'background__color--day'}`} >
    <div className="background__container">
      {children}
    </div>
  </div>
);

export default Background;