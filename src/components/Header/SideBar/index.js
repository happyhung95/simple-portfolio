import React from "react";
import classNames from "classnames";
import { object, bool, func } from "prop-types";

import Link from "../Links/Link";
import "./SideBar.scss";

const SideBar = ({ links, open, setOpen }) => {
  const styles = classNames({
    sidebar: true,
    "sidebar--open": open,
  });
  return (
    <section className={styles}>
      {links.map(({ label, url }) => (
        <Link key={url} href={url} url={url} label={label} open={open} setOpen={setOpen} />
      ))}
    </section>
  );
};

SideBar.propTypes = {
  links: object.isRequired,
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default SideBar;
