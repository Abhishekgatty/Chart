// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [sessionId, setSessionId] = useState(localStorage.getItem('sessionId')); // Synchronous initial value
//   const [loading, setLoading] = useState(true); // Loading state

//   const storeSessionId = (id) => {
//     localStorage.setItem('sessionId', id);
//     setSessionId(id);
//   };

//   const clearSessionId = () => {
//     localStorage.removeItem('sessionId');
//     setSessionId(null);
//   };

//   const getSessionId = () => {
//     const id = localStorage.getItem('sessionId');
//     if (id) setSessionId(id);
//     return id;
//   };

//   useEffect(() => {
//     const initializeSession = async () => {
//       const storedSessionId = localStorage.getItem('sessionId');
//       if (storedSessionId && !sessionId) {
//         setSessionId(storedSessionId);
//       }
//       setLoading(false); // Mark loading complete after initialization
//     };
//     initializeSession();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         sessionId,
//         login: storeSessionId,
//         logout: clearSessionId,
//         getSessionId,
//         loading, // Expose loading state
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };




// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [sessionId, setSessionId] = useState(localStorage.getItem('sessionId'));
//   const [loading, setLoading] = useState(true);

//   const login = (id) => {
//     localStorage.setItem('sessionId', id);
//     setSessionId(id);
//   };

//   const logout = () => {
//     localStorage.removeItem('sessionId');
//     setSessionId(null);
//   };

//   useEffect(() => {
//     setLoading(false); // Done initializing
//   }, []);

//   const isAuthenticated = !!sessionId;

//   return (
//     <AuthContext.Provider value={{ sessionId, isAuthenticated, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };





// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [sessionId, setSessionId] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Load sessionId from localStorage on app start
//   useEffect(() => {
//     const storedSessionId = localStorage.getItem('sessionId');
//     if (storedSessionId) {
//       setSessionId(storedSessionId);
//     }
//     setLoading(false);
//   }, []);

//   // Login method
//   const login = (newSessionId) => {
//     localStorage.setItem('sessionId', newSessionId);
//     setSessionId(newSessionId);
//   };

//   // Logout method
//   const logout = () => {
//     localStorage.removeItem('sessionId');
//     setSessionId(null);
//   };

//   return (
//     <AuthContext.Provider value={{ sessionId, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };





// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [sessionId, setSessionId] = useState(localStorage.getItem('sessionId'));
//   const [loading, setLoading] = useState(true);

//   const login = (id) => {
//     localStorage.setItem('sessionId', id);
//     setSessionId(id);
//   };

//   const logout = () => {
//     localStorage.removeItem('sessionId');
//     setSessionId(null);
//   };

//   useEffect(() => {
//     setLoading(false); // Done initializing
//   }, []);

//   const isAuthenticated = !!sessionId;

//   return (
//     <AuthContext.Provider value={{ sessionId, isAuthenticated, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



// src/store/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load session from localStorage on mount
  useEffect(() => {
    const storedSession = localStorage.getItem('sessionId');
    setSessionId(storedSession);
    setLoading(false); // Initialization complete
  }, []);

  // Login function
  const login = (id) => {
    localStorage.setItem('sessionId', id);
    setSessionId(id);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('sessionId');
    setSessionId(null);
  };

  // Derived state
  const isAuthenticated = !!sessionId;

  // Context value
  const authContextValue = {
    sessionId,
    isAuthenticated,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
