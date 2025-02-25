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
    semester: 0, 
    subscriptionName: "Free", 
    subscriptions: [], 
    conversations: [] 
};

const BASE_URL = 'http://204.12.227.152:9092/chatbotservices';

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

export const useUserData = (sessionId) => { // Changed to accept sessionId as parameter
    const [userData, setUserData] = useState(defaultUserData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                if (!sessionId) {
                    throw new Error('Session ID not found.');
                }

                const data = await fetchUserData(sessionId);
                console.log('useUserData - fetched data:', data);
                setUserData(data);
            } catch (err) {
                setError(err.message);
                setUserData(defaultUserData);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [sessionId]); // Dependency on sessionId parameter

    return { userData, loading, error };
};

export default defaultUserData;