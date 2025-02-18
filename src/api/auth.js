import axios from 'axios';

const BASE_URL = 'https://a4dd-106-51-211-140.ngrok-free.app'; // Replace with your actual backend URL

// Login
export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/login`, { username, password }); // Use POST instead of GET for security
        return response.data; // Contains sessionId
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed.');
    }
};

// Validate Session
export const validateSession = async (sessionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/auth/validate`, {
            headers: { Authorization: `Bearer ${sessionId}` } // Use Authorization header for session validation
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Session validation failed.');
    }
};

// Logout
export const logoutUser = async (sessionId) => {
    try {
        await axios.post(`${BASE_URL}/api/auth/logout`, {}, {
            headers: { Authorization: `Bearer ${sessionId}` } // Use Authorization header for logout
        });
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Logout failed.');
    }
};