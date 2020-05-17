import React from "react"
import { bool, func } from "prop-types"

import "./BurgerMenu.scss"

const BurgerMenu = ({ open, setOpen }) => (
  <section className="burger">
    <div />
    <div />
    <div />
  </section>
)
BurgerMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}
export default BurgerMenu
