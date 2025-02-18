import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

// Get Subscription Details
export const getSubscriptionDetails = async (sessionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/users/subscriptions`, {
            headers: { sessionId }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch subscription details.');
    }
};