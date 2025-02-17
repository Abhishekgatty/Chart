import React from 'react';
import classNames from 'classnames';
import { LogoLink } from '../../../components';

function Appbar({className}) {
    const compClass = classNames({
        "tyn-appbar": true,
        [className]: className,
    });
  return (
    <nav className={compClass}>
        <div className="container px-3">
            <div className="tyn-appbar-wrap">
                <div className="tyn-appbar-logo ps-0 pe-3">
                    <div className="d-none d-lg-flex">
                        <LogoLink to="/landing" full />
                    </div>
                    <div className="d-lg-none">
                        <LogoLink to="/landing" />
                    </div>
                </div>
                <div className="tyn-appbar-content">
                    <ul className="tyn-appbar-nav tyn-appbar-nav-start">
                        <li className="tyn-appbar-item">
                            <a className="fw-semibold link-secondary" href="#demo-pages">Demo Pages</a>
                        </li>
                    </ul>
                    <a href="https://themeforest.net/item/connectme-chat-application-react-template/51520402" target="_blank" className="btn btn-primary"><span className="d-sm-none">Purchase</span><span className="d-none d-sm-inline">Purchase Now</span></a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Appbar