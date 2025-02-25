import axios from 'axios';

const BASE_URL = 'http://204.12.227.152:9092/chatbotservices';

// Get Subscription Details
export const getSubscriptionDetails = async (sessionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/users/subscriptions`, {
            headers: { 
                'sessionId': sessionId,
                'accept': '*/*'
            }
        });
        return response.data;
    } catch (error) {
        console.error('GET Error:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Failed to fetch subscription details.');
    }
};

// Update Subscription
export const updateSubscription = async (sessionId, subscriptionData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/users/subscriptions`, subscriptionData, {
            headers: { 
                'sessionId': sessionId,
                'accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('POST Error:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Failed to update subscription.');
    }
};