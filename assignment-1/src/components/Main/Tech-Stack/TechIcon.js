import React from 'react';
import PropTypes from 'prop-types';

import './TechIcon.scss';

const TechIcon = ({ id, icon, title }) => {
  const iconId = `tech-icon-${id}`;
  return (
    <div className="tech__item">
      <i id={iconId} className={icon} aria-hidden="true" title={title} />
      <p>{title}</p>
    </div>
  );
};

TechIcon.displayName = 'Tech Icon';
TechIcon.propTypes = {
  id: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TechIcon;
