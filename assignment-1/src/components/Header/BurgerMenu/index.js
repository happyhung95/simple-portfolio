import React from "react";
import classNames from 'classnames';
import { bool, func } from "prop-types";

import "./BurgerMenu.scss";

const BurgerMenu = ({ open, setOpen }) => {
  const styles = classNames({
    burger: true,
    'burger--open': open
  })

  return (
    <div className={styles} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </div>
  );
};

BurgerMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default BurgerMenu;
