import React from 'react'
import classNames from 'classnames'
import AppRoot from '../global/AppRoot'
import AppContent from '../global/AppContent'
import { Helmet, HelmetProvider } from "react-helmet-async";

function Default({title,content, ...props}) {
  const contentClass = classNames({
    [`${content}`]: content,
  });

  return (
    <HelmetProvider>
      <Helmet>
          <title>{`${title ? title + " | " : '' }ConnectMe | Chat Application React Template`}</title>
      </Helmet>
      <AppRoot>
        <AppContent className={contentClass}>
            {props.children}
        </AppContent>
      </AppRoot>
    </HelmetProvider>
  )
}

export default Default