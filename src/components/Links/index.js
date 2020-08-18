import React from 'react'
import { Link as SmoothLink } from 'react-scroll'

import './Links.scss'

export const Links = ({ links }) => {
  return (
    <ul className="navbar__links">
      {links.map(({ label, url }) => (
        <SmoothLink to={url} spy smooth duration={500}>
          {label}
        </SmoothLink>
      ))}
    </ul>
  )
}
