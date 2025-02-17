import React, { useState, createContext, useContext, useLayoutEffect } from 'react';

const LayoutContext = createContext();
const LayoutUpdateContext = createContext();


export function useLayout(){
  return useContext(LayoutContext);
}

export function useLayoutUpdate(){
  return useContext(LayoutUpdateContext);
}

const todaysDate = new Date()

function ThemeProvider( {children}) {
  const layoutConfig = {
    theme:'light',
  }
  const [layout, setLayout] = useState(layoutConfig);

  const updateLayout = {
    theme: function(mode){
      setLayout({...layout, theme: mode});
    },
  }

  let date = todaysDate.getDate();
  function setLocalStorage() {
    localStorage.setItem("connectMeThemeReactV100", JSON.stringify({ style: layout, date: date }));
  };

  useLayoutEffect(() => {
    if(localStorage.getItem("connectMeThemeReactV100")){
      let retrivedObject = JSON.parse(localStorage.getItem("connectMeThemeReactV100"));
      if (retrivedObject.date !== date) {
        setLayout(layoutConfig);
      } else {
        setLayout(retrivedObject.style);
      }
    }else{
      setLocalStorage();
    }
  }, [])

  useLayoutEffect(() => {
    setLocalStorage();
    document.documentElement.setAttribute('data-bs-theme', layout.theme)
  }, [layout]);

  return (
    <LayoutContext.Provider value={layout}>
      <LayoutUpdateContext.Provider value={updateLayout}>
          {children}
      </LayoutUpdateContext.Provider>
    </LayoutContext.Provider>
  )
}

export default ThemeProvider;