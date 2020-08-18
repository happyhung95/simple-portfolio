/* eslint-disable react/button-has-type */
import React from 'react'

import './Button.scss'

export const Button = ({ label, variant, id, ariaLabelledby, href }) => (
  <button className={`btn btn--${variant}`} id={id} aria-labelledby={ariaLabelledby}>
    <a href={href}>{label}</a>
  </button>
)
Button.displayName = 'Button'
