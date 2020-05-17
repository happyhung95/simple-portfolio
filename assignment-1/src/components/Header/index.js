import React, { useState } from "react"

import Link from "./Link"
import BurgerMenu from "./BurgerMenu"
import "./Header.scss"

const links = [
  {
    label: "Blogs",
    url: "#blog",
  },
  {
    label: "Projects",
    url: "#project",
  },
  {
    label: "Skills",
    url: "#techStack",
  },
  {
    label: "Contact",
    url: "#contact",
  },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar" title="Navigation bar with links and logo">
      {/* eslint-disable global-require */}
      <img
        className="navbar__logo"
        src={require("../../assets/images/hung-logo.png")}
        alt="logo"
      />
      <ul className="navbar__links">
        {links.map(({ label, url }) => (
          <Link key={url} url={url} label={label} />
        ))}
      </ul>
      <BurgerMenu setOpen={setOpen} open={open} />
    </nav>
  )
}

export default Header
