import React from 'react';
import './Header.scss';

const Header = () => (
  <nav className="navbar" title="Navigation bar with links and logo">
    <img
      className="navbar__logo"
      src="../../assets/images/hung-logo.png"
      alt="logo"
    />
    <ul className="navbar__links">
      <li>
        <a href="#">Blogs</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Skills</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Header;
