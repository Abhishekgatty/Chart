import React from 'react'
import classNames from "classnames"

function Section({className, gap, ...props}) {

  const compClass = classNames({
    "tyn-section": true,
    [`tyn-section-${gap}`] : gap,
    [`${className}`]: className,
  });
  
  return (
    <div className={compClass}>
        {props.children}
    </div>
  )
}

export default Section

function Head({className, center, ...props}) {

    const compClass = classNames({
      "tyn-section-head tyn-text-block": true,
      "text-center" : center,
      [`${className}`]: className,
    });
    
    return (
      <div className={compClass}>
          {props.children}
      </div>
    )
}

Section.Head = Head;

function Content({className, center, ...props}) {

    const compClass = classNames({
      "tyn-section-content": true,
      [`${className}`]: className,
    });
    
    return (
      <div className={compClass}>
          {props.children}
      </div>
    )
}

Section.Content = Content;