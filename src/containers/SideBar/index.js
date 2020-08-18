import React from 'react'
import classNames from 'classnames'

import { Link } from '../../components/Link'
import './SideBar.scss'

export const SideBar = ({ links, open, setOpen }) => {
  const styles = classNames({
    sidebar: true,
    'sidebar--open': open,
  })
  return (
    <section className={styles}>
      {links.map(({ label, url }) => (
        <Link key={url} href={url} url={url} label={label} open={open} setOpen={setOpen} />
      ))}
    </section>
  )
}
