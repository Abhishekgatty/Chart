import React from 'react'
import classNames from "classnames"

function AppContent({className, ...props}) {
    const compClass = classNames({
        "tyn-content": true,
        [`${className}`]: className,
    });
  return (
    <div className={compClass}>
        {props.children}
    </div>
  )
}

export default AppContent