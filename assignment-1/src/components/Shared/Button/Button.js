import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ label, variant, id, ariaLabelledby, onClick }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={`btn btn--${variant}`}
    id={id}
    aria-labelledby={ariaLabelledby}
    onClick={onClick}
  >
    {label}
  </button>
);
Button.displayName = 'Button';
Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.string,
  ariaLabelledby: PropTypes.string,
};

export default Button;
