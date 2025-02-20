import axios from 'axios';

const BASE_URL = 'http://204.12.227.152:9090/chatbotservices';

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