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
            <p className="mb-0 small">2024 &copy; TheFutureMed. Crafted By <a href="https://pmhstechsolutions.com/" target="_blank"  className="fw-semibold">PMHS Techsolutions</a> </p>
        </div>
    </div>
  )
}

export default Footer