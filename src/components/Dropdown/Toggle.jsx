import React from 'react';

const DropdownToggle = React.forwardRef(({ children, className, onClick }, ref) => (
    <a
      href="#down"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className={`d-inline-flex ${className ? className : ''}`}
    >
      {children}
    </a>
));

export default DropdownToggle
