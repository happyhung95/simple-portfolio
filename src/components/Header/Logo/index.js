import React from "react";
import { object } from "prop-types";

import './Logo.scss';

const Logo = ({ image }) => {
  return <img className="navbar__logo" src={image} alt="logo" />;
};
Logo.propTypes = {
  image: object.isRequired,
};

export default Logo;
