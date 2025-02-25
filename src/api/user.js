import axios from 'axios';

const BASE_URL = 'http://204.12.227.152:9092/chatbotservices';

export const fetchUserData = async (sessionId) => {
    try {
        console.log("Fetching user data with sessionId:", sessionId);
        const response = await axios.get(`${BASE_URL}/api/users/user`, {
            headers: {
                'sessionId': sessionId,
                'Content-Type': 'application/json',
            },
        });
        console.log("User data response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error.message);
        throw new Error(error.response?.data?.message || 'Failed to load user data.');
    }
};

export const updateUserData = async (sessionId, userData) => {
    try {
        console.log("Updating user data with sessionId:", sessionId);
        const response = await axios.post(`${BASE_URL}/api/users/user`, userData, {
            headers: {
                'sessionId': sessionId,
                'Content-Type': 'application/json',
            },
        });
        console.log("Update user data response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating user data:", error.message);
        throw new Error(error.response?.data?.message || 'Failed to update user data.');
    }
};

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

export const changePassword = async (sessionId, passwordData) => {
    try {
        console.log("Changing password with sessionId:", sessionId);
        const response = await axios.post(`${BASE_URL}/api/users/change-password`, passwordData, {
            headers: {
                'sessionId': sessionId,
                'Content-Type': 'application/json',
            },
        });
        console.log("Change password response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error changing password:", error.message);
        throw new Error(error.response?.data?.message || 'Failed to change password.');
    }
};