import React from 'react'
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

function ListLinks({className,children}) {
    const compClass = classNames({
        "tyn-list-links": true,
        [className]: className
    });
  return (
      <ul className={compClass}>
          {children}
      </ul>
  )
}

export default ListLinks

function Heading({className,children}) {
  const compClass = classNames({
    "tyn-list-links-heading": true,
    [className]: className
  });
  return <li><h6 className={compClass}>{children}</h6></li>;
}

function RouterLink({className,children, to}) {
  const compClass = classNames({
    [className]: className
  });
  return <li><NavLink className={compClass} to={to}>{children}</NavLink></li>;
}

function Divider({className,children, to}) {
  const compClass = classNames({
    "dropdown-divider": true,
    [className]: className
  });
  return <li className={compClass}></li>;
}

ListLinks.Heading = Heading;
ListLinks.RouterLink = RouterLink;
ListLinks.Divider = Divider;