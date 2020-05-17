import React from 'react';
import './Header.scss';

const Header = () => (
  <nav className="navbar" title="Navigation bar with links and logo">
    {/* eslint-disable global-require */}
    <img
      className="navbar__logo"
      src={require('../../assets/images/hung-logo.png')}
      alt="logo"
    />
    {/* eslint-disable global-require */}
    <ul className="navbar__links">
      <li>
        <a href="#blog">Blogs</a>
      </li>
      <li>
        <a href="#project">Projects</a>
      </li>
      <li>
        <a href="#techStack">Skills</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Header;
