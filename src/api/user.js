import axios from 'axios';

const BASE_URL = 'https://a4dd-106-51-211-140.ngrok-free.app';

// Fetch User Details
export const fetchUserData = async (sessionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/users/user`, {
            headers: { sessionId }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to load user data.');
    }
};

// Update User Details
export const updateUserData = async (sessionId, userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/users/user`, userData, {
            headers: { sessionId }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to update user data.');
    }
};

// Register User
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/users/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Registration failed.');
    }
};

// Forgot Password
export const forgotPassword = async (email) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/users/forgotPassword`, {
            params: { email }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Password reset request failed.');
    }
};