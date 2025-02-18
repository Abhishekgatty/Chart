import React, { createContext, useState, useEffect } from 'react';
import { validateSession } from '../api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [sessionId, setSessionId] = useState(localStorage.getItem('sessionId') || null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const validateAndSetUser = async () => {
            if (sessionId) {
                try {
                    const userData = await validateSession(sessionId); // Validate session with the backend
                    setUser(userData); // Store user data in state
                } catch (error) {
                    console.error('Session invalid:', error);
                    setSessionId(null); // Clear session if invalid
                    localStorage.removeItem('sessionId');
                }
            }
        };
        validateAndSetUser();
    }, [sessionId]);

    const login = (newSessionId) => {
        setSessionId(newSessionId); // Update session ID in state
        localStorage.setItem('sessionId', newSessionId); // Persist session ID in localStorage
    };

    const logout = async () => {
        try {
            if (sessionId) {
                await logoutUser(sessionId); // Call backend to invalidate session
            }
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setSessionId(null); // Clear session ID in state
            setUser(null); // Clear user data
            localStorage.removeItem('sessionId'); // Remove session ID from localStorage
        }
    };

    return (
        <AuthContext.Provider value={{ sessionId, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};