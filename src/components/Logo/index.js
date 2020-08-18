import React from 'react'

import './Logo.scss'

export const Logo = ({ image }) => {
  return (
    <div className="navbar__logo">
      <img src={image} alt="logo" />{' '}
    </div>
  )
}
