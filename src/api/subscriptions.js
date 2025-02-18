import axios from 'axios';

const BASE_URL = 'https://a4dd-106-51-211-140.ngrok-free.app';

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