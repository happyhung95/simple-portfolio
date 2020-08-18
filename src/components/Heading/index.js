import React from 'react'

import './Heading.scss'

export const Heading = ({ id, title }) => (
  <h1 id={id} className="section-title">
    {title}
  </h1>
)
