import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(null);

  // Store session ID in local storage
  const storeSessionId = (id) => {
    localStorage.setItem('sessionId', id);
    setSessionId(id);
  };

  // Retrieve session ID from local storage
  const getSessionId = () => {
    const id = localStorage.getItem('sessionId');
    if (id) setSessionId(id);
    return id;
  };

  // Clear session ID on logout
  const clearSessionId = () => {
    localStorage.removeItem('sessionId');
    setSessionId(null);
  };

  // Initialize session ID on app load
  useEffect(() => {
    getSessionId();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        sessionId,
        login: storeSessionId,
        logout: clearSessionId,
        getSessionId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};