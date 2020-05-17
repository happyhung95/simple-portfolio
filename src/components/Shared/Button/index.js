import React from 'react';

import './Button.scss';

const Button = ({ label, variant, id, ariaLabelledby, href }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={`btn btn--${variant}`}
    id={id}
    aria-labelledby={ariaLabelledby}
  >
    <a href={href}>
      {label}
    </a>
  </button>
);
Button.displayName = 'Button';

export default Button;
