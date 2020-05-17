import React from "react";
import classNames from "classnames";
import { object, bool } from "prop-types";

import Link from "../Links/Link";
import "./SideBar.scss";

const SideBar = ({ links, open }) => {
  const styles = classNames({
    sidebar: true,
    'sidebar--open': open
  })
  return (
    <section className={styles}>
      {links.map(({ label, url }) => (
        <Link key={url} href={url} url={url} label={label} />
      ))}
    </section>
  );
};

SideBar.propTypes = {
  links: object.isRequired,
  open: bool.isRequired,
};

export default SideBar;
