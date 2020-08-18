import React from 'react'

export const Link = ({ label, url, open, setOpen }) => (
  <li>
    <a
      href={url}
      onClick={() => {
        setOpen(!open)
      }}
    >
      {label}
    </a>
  </li>
)
