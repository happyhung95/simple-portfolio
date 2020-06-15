import React from "react";
import { object } from "prop-types";

import Link from "./Link";
import "./Links.scss";

const Links = ({ links }) => {
  return (
    <ul className="navbar__links">
      {links.map(({ label, url }) => (
        <Link key={url} href={url} url={url} label={label} />
      ))}
    </ul>
  );
};

Links.propTypes = {
  links: object.isRequired,
};

export default Links;
