import React, { useState } from 'react'

import { BurgerMenu, Links, Logo } from '../../components'
import { SideBar } from '../SideBar'
import logo from '../../assets/images/hung-logo.png'
import { links, hashLinks } from '../../data'
import './NavBar.scss'

export const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar" title="Navigation bar with links and logo">
      <Logo image={logo} />
      <Links links={links} />
      <BurgerMenu open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} links={hashLinks} />
    </nav>
  )
}
