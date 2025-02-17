import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { ChatTextFill, PersonLinesFill, PersonBoundingBox, Robot, Subtract } from 'react-bootstrap-icons';
import { Badge } from 'react-bootstrap';
import { LogoLink } from '../../../components';

import MenuDropdown from './Dropdowns/Menu';
import NotificationDropdown from './Dropdowns/Notification';
import ProfileDropdown from './Dropdowns/Profile';

function Appbar({className}) {
    const compClass = classNames({
        "tyn-appbar": true,
        [className]: className,
    });
  return (
    <nav className={compClass}>
        <div className="tyn-appbar-wrap">
            <div className="tyn-appbar-logo">
                <LogoLink to="/" />
            </div>
            <div className="tyn-appbar-content">
                <AppbarNav align="start">
                    <AppbarItem show='sm'>
                        <AppbarLink icon={<Robot />} text="ChatBot" link="/chatbot" />
                    </AppbarItem>
                </AppbarNav>
                <AppbarNav align="end">
                    <AppbarItem>
                        <ProfileDropdown />
                    </AppbarItem>
                </AppbarNav>
            </div>
        </div>
    </nav>
  )
}

function AppbarNav({className,children,align}){
    const compClass = classNames({
        "tyn-appbar-nav": true,
        [`tyn-appbar-nav-${align}`]: align,
        [className]: className,
    });
    return(
        <ul className={compClass}>
            {children}
        </ul>
    )
}

function AppbarItem({className,children,show}){
    const compClass = classNames({
        "tyn-appbar-item": true,
        [`d-none d-${show}-inline-flex`] : show,
        [className]: className,
    });
    return(
        <li className={compClass}>
            {children}
        </li>
    )
}

function AppbarLink({className,icon,text,link,badge}){
    const compClass = classNames({
        "tyn-appbar-link position-relative": true,
        [className]: className,
    });
    return(
        <NavLink className={compClass} to={link}>
            {icon}
            {badge && <Badge pill bg="primary" className="position-absolute top-0 end-0 mt-n1 me-n1">{badge}</Badge>}
            {text && <span className="d-none">{text}</span>}
        </NavLink>
    )
}

export default Appbar