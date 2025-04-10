import axios from 'axios';

const BASE_URL = 'http://204.12.227.152:9092/chatbotservices';

export const fetchUserData = async (sessionId) => {
    try {
        console.log("Fetching user data with sessionId:", sessionId);
        const response = await axios.get(`${BASE_URL}/api/users/user`, {
            headers: {
                'sessionId': sessionId,
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
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
                'ngrok-skip-browser-warning': 'true',
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
                'ngrok-skip-browser-warning': 'true',
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
            headers: {
                'accept': '*/*',
                'ngrok-skip-browser-warning': 'true',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to send password reset request.');
    }
};

export const changePassword = async (sessionId, passwordData) => {
    try {
        console.log("Changing password with sessionId:", sessionId);
        const response = await axios.post(`${BASE_URL}/api/users/change-password`, passwordData, {
            headers: {
                'sessionId': sessionId,
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
        });
        console.log("Change password response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error changing password:", error.message);
        throw new Error(error.response?.data?.message || 'Failed to change password.');
    }
};

export const uploadProfilePic = async (sessionId, file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await axios.post(`${BASE_URL}/api/users/uploadProfilePic`, formData, {
            headers: {
                'accept': '*/*',
                'sessionId': sessionId,
                'Content-Type': 'multipart/form-data',
                'ngrok-skip-browser-warning': 'true',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to upload profile picture.');
    }
};

export const getProfilePic = async (sessionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/users/getProfilePic`, {
            headers: {
                'accept': '*/*',
                'sessionId': sessionId,
                'ngrok-skip-browser-warning': 'true',
            },
            responseType: 'blob',
        });
        return URL.createObjectURL(response.data);
    } catch (error) {
        throw new Error(error.response?.data?.message || 'No profile picture.');
    }
};

export const deleteProfilePic = async (sessionId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/api/users/deleteProfilePic`, {
            headers: {
                'accept': '*/*',
                'sessionId': sessionId,
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
        });
        console.log("Delete profile pic response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error deleting profile picture:", error.message);
        throw new Error(error.response?.data?.message || 'Failed to delete profile picture.');
    }
};

export const resetPassword = async (token, passwordData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/users/reset?token=${token}`, passwordData, {
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to reset password.');
    }
};