import React from 'react';
import {bool, func, string} from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Link = ({ label, url, open, setOpen }) => (
  <li>
    <a href={url} onClick={()=> {setOpen(!open)}}>{label}</a>
  </li>
);

Link.propTypes = {
  label: string.isRequired,
  url: string.isRequired,
  open: bool,
  setOpen: func
};
Link.defaultProps = {
  open : null,
  setOpen : null
}

export default Link;
