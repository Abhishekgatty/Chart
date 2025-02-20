import axios from 'axios';

const BASE_URL = 'http://192.168.68.100:8080/chatbotservices';

// Fetch User Details
export const fetchUserData = async (sessionId) => {
    try {
        console.log("Fetching user data with sessionId:", sessionId); // Debug log
        const response = await axios.get(`${BASE_URL}/api/users/user`, {
            headers: {
                'sessionId': sessionId, // Include sessionId in headers
                'Content-Type': 'application/json',
            },
        });
        console.log("User data response:", response.data); // Debug log
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error.message); // Debug log
        throw new Error(error.response?.data?.message || 'Failed to load user data.');
    }
};

// Update User Details
export const updateUserData = async (sessionId, userData) => {
    try {
        console.log("Updating user data with sessionId:", sessionId); // Debug log
        const response = await axios.post(`${BASE_URL}/api/users/user`, userData, {
            headers: {
                'sessionId': sessionId, // Include sessionId in headers
                'Content-Type': 'application/json',
            },
        });
        console.log("Update user data response:", response.data); // Debug log
        return response.data;
    } catch (error) {
        console.error("Error updating user data:", error.message); // Debug log
        throw new Error(error.response?.data?.message || 'Failed to update user data.');
    }
};

// Register User
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/users/register`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Registration failed.');
    }
};

// Forgot Password
export const forgotPassword = async (email) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/users/forgotPassword`, {
            params: { email },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Password reset request failed.');
    }
};