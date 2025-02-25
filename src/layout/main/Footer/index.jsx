import React from 'react'
import classNames from 'classnames';

function Footer({className}) {
    const compClass = classNames({
        "tyn-footer": true,
        [className]: className,
    });
    const year = new Date().getFullYear();
    
  return (
    <div className={compClass}>
        <div className="bg-white text-center py-3">
            <p className="mb-0 small">{year} &copy; TheFutureMed. Crafted By <a href="https://pmhstechsolutions.com/" target="_blank"  className="fw-semibold">PMHS TechSolutions</a> </p>
        </div>
    </div>
  )
}

export default Footer