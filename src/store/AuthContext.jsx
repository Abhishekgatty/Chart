import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(localStorage.getItem('sessionId')); // Synchronous initial value
  const [loading, setLoading] = useState(true); // Loading state

  const storeSessionId = (id) => {
    localStorage.setItem('sessionId', id);
    setSessionId(id);
  };

  const clearSessionId = () => {
    localStorage.removeItem('sessionId');
    setSessionId(null);
  };

  const getSessionId = () => {
    const id = localStorage.getItem('sessionId');
    if (id) setSessionId(id);
    return id;
  };

  useEffect(() => {
    const initializeSession = async () => {
      const storedSessionId = localStorage.getItem('sessionId');
      if (storedSessionId && !sessionId) {
        setSessionId(storedSessionId);
      }
      setLoading(false); // Mark loading complete after initialization
    };
    initializeSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        sessionId,
        login: storeSessionId,
        logout: clearSessionId,
        getSessionId,
        loading, // Expose loading state
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};