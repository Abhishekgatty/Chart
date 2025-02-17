import { useState, useEffect } from 'react';
import axios from 'axios';

// Default fallback user data (used if API fails)
const data = {
    id: "uid999",
    name: "Marie George",
    handle: 'marie_george',
    mail: 'marie@gmail.com',
    gender: 'female',
    dob: 'December 15',
    phone: "0098 4654 554",
    avatar: "/images/avatar/3.jpg",
    cover: "/images/cover/2.jpg",
    bio: "Liked that disco music",
};

// Base URL for the API
const BASE_URL = 'https://4b9d-106-51-211-140.ngrok-free.app/api/users';

// Fetch user data by ID
export const fetchUserData = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${userId}`);
        return response.data; // Return the user data from the API
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error(error.response?.data?.message || 'Failed to load user data.');
    }
};

// Custom hook to manage user data
export const useUserData = (userId) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await fetchUserData(userId);
                setUserData(data); // Set fetched user data
            } catch (err) {
                setError(err.message); // Handle errors
                setUserData(data); // Fallback to default data
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchUser();
    }, [userId]);

    return { userData, loading, error };
};

// Default export for compatibility with existing components
export default data;