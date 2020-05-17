import React from 'react';

import './TechWithoutIcon.scss';

const TechWithoutIcon = ({ title }) => {
  return <div className='tech__text'>{title}</div>;
};

TechWithoutIcon.displayName = 'Tech Icon';

export default TechWithoutIcon;
