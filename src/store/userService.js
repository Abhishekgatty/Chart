import axios from 'axios';

// Base URL for the API
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Fetch user data by ID
export const fetchUserData = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${userId}`);
        return response.data; // Return the user data
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error(error.response?.data?.message || 'Failed to load user data.');
    }
};

// Update user data
export const updateUserData = async (userId, updatedData) => {
    try {
        const response = await axios.put(`${BASE_URL}/${userId}`, updatedData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return response.data; // Return the updated user data
    } catch (error) {
        console.error('Error updating user data:', error);
        throw new Error(error.response?.data?.message || 'Failed to update user data.');
    }
};