import React from 'react';
import classNames from 'classnames';

//Media
function Media({className, size, shape, bordered, children}) {
    const compClass = classNames({
        "tyn-media": true,
        [`tyn-size-${size}`] : size,
        [`tyn-${shape}`] : shape,
        [`tyn-media-bordered`] : bordered,
        [`${className}`]: className,
    });
    return (
        <div className={compClass}>{children}</div>
    )
}

//Multiple
function MediaMultiple({className, children}) {
    const compClass = classNames({
        "tyn-media-multiple": true,
        [`${className}`]: className,
    });
    return (
        <div className={compClass}>{children}</div>
    )
}
//Group
function MediaGroup({className, orientation, align, children}) {
    const compClass = classNames({
        "tyn-media-group": true,
        [`tyn-media-${orientation}`]:orientation,
        [`tyn-media-${align}`]:align,
        [`${className}`]: className,
    });
    return (
        <div className={compClass}>{children}</div>
    )
}
//Col
function MediaCol({className, children}) {
    const compClass = classNames({
        "tyn-media-col": true,
        [`${className}`]: className,
    });
    return (
        <div className={compClass}>{children}</div>
    )
}
//Row
function MediaRow({className, children}) {
    const compClass = classNames({
        "tyn-media-row": true,
        [`${className}`]: className,
    });
    return (
        <div className={compClass}>{children}</div>
    )
}
//List
function MediaList({className, children}) {
    const compClass = classNames({
        "tyn-media-list": true,
        [`${className}`]: className,
    });
    return (
        <ul className={compClass}>{children}</ul>
    )
}
function MediaListItem({className, children}){
    const compClass = classNames({
        [`${className}`]: className,
    });
    return (
        <li className={compClass}>{children}</li>
    )
}

//Option
function MediaOption({className, children}) {
    const compClass = classNames({
        "tyn-media-option": true,
        [`${className}`]: className,
    });
    return (
        <div className={compClass}>{children}</div>
    )
}

Media.Multiple = MediaMultiple
Media.Group = MediaGroup
Media.Col = MediaCol
Media.Row = MediaRow
Media.List = MediaList
Media.List.Item = MediaListItem;
Media.Option = MediaOption;

export default Media