import React from 'react';
import classNames from 'classnames/bind';

import styles from './Background.module.scss';

const cx = classNames.bind(styles);

const Background = ({night, children}) => {
  return (
    <div className={cx({
      background: true,
      day: true,
      night: night,
    })}>
      {children}
    </div>
  );
};

export default Background;
