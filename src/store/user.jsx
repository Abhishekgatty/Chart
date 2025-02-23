import { useState, useEffect } from 'react';
import axios from 'axios';

const defaultUserData = {
    userId: 0,
    userName: "guest",
    name: "Guest User",
    email: "",
    country: "Not provided",
    city: "Not provided",
    course: "Not provided",
    year: 0,
    college: "Not provided",
    subscriptions: [],
    conversations: []
};

const BASE_URL = 'http://204.12.227.152:9090/chatbotservices';

export const fetchUserData = async (sessionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/users/user`, {
            headers: {
                'sessionId': sessionId
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error(error.response?.data?.message || 'Failed to load user data.');
    }
};

export const useUserData = () => {
    const [userData, setUserData] = useState(defaultUserData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const sessionId = localStorage.getItem('sessionId');
                console.log('useUserData - sessionId:', sessionId); // Debug log
                if (!sessionId) {
                    throw new Error('Session ID not found.');
                }

                const data = await fetchUserData(sessionId);
                console.log('useUserData - fetched data:', data); // Debug log
                setUserData(data);
            } catch (err) {
                setError(err.message);
                setUserData(defaultUserData);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [localStorage.getItem('sessionId')]); 

    return { userData, loading, error };
};

export default defaultUserData;