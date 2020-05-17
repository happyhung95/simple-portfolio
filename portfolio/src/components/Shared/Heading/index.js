import React from 'react';
import PropTypes from 'prop-types';

import './Heading.scss';

// eslint-disable-next-line jsx-a11y/heading-has-content
const Heading = ({ title }) => <h1 className="section-title">{title}</h1>;

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
