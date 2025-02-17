import React from 'react'
import classNames from 'classnames';

function Footer({className}) {
    const compClass = classNames({
        "tyn-footer": true,
        [className]: className,
    });
  return (
    <div className={compClass}>
        <div className="bg-white text-center py-3">
            <p className="mb-0 small">2024 &copy; ConnectMe. Crafted By <a href="https://themeforest.net/user/themeyn" target="_blank"  className="fw-semibold">Themeyn</a> </p>
        </div>
    </div>
  )
}

export default Footer