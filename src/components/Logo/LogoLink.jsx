import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import Logo from './Logo';
import { LogoFull } from './LogoFull';

function LogoLink({to, full, size}) {
  const wrapperClass = classNames({
    "tyn-logo" : true,
    [`tyn-logo-${size}`] : size
  })
  return (
    <Link to={to} className={wrapperClass}>{full ? <LogoFull /> : <Logo/>}</Link>
  )
}

export default LogoLink