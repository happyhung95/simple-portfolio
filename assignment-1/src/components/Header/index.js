import React, { useState } from "react";

import Logo from "./Logo";
import Links from "./Links";
import BurgerMenu from "./BurgerMenu";
import SideBar from "./SideBar";
import logo from "../../assets/images/hung-logo.png";
import "./Header.scss";

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
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" title="Navigation bar with links and logo">
      <Logo image={logo} />
      <Links links={links} />
      <BurgerMenu setOpen={setOpen} open={open} />
      <SideBar open={open} links={links} />
    </nav>
  );
};

export default Header;
