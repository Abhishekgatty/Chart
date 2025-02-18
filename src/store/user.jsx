import { useState, useEffect } from 'react';
import axios from 'axios';

// Default fallback user data (used if API fails)
const defaultUserData = {
    id: 0, // Default value for integer ID
    userName: "guest", // Default username
    name: "Guest User", // Default name
    email: "", // Default email
    country: "Not provided", // Default country
    city: "Not provided", // Default city
    course: "Not provided", // Default course
    year: 0, // Default year
    college: "Not provided", // Default college
    subscriptions: [], // Empty array for subscriptions
    conversations: [] // Empty array for conversations
};

// Base URL for the API
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Fetch user data using sessionId
export const fetchUserData = async (sessionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/users/user`, {
            headers: {
                'sessionId': sessionId // Pass sessionId in the header
            }
        });
        return response.data; // Return the user data from the API
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error(error.response?.data?.message || 'Failed to load user data.');
    }
};

// Custom hook to manage user data
export const useUserData = () => {
    const [userData, setUserData] = useState(defaultUserData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const sessionId = localStorage.getItem('sessionId'); // Retrieve sessionId from localStorage
                if (!sessionId) {
                    throw new Error('Session ID not found.');
                }

                const data = await fetchUserData(sessionId);
                setUserData(data); // Set fetched user data
            } catch (err) {
                setError(err.message); // Handle errors
                setUserData(defaultUserData); // Fallback to default data
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchUser();
    }, []);

    return { userData, loading, error };
};

export default defaultUserData;