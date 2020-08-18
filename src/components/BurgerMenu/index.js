import React from 'react'
import classNames from 'classnames'

import './BurgerMenu.scss'

export const BurgerMenu = ({ open, setOpen }) => {
  const styles = classNames({
    burger: true,
    'burger--open': open,
  })

  return (
    <div className={styles} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </div>
  )
}
