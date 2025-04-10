import axios from 'axios';

const BASE_URL = 'http://204.12.227.152:9092/chatbotservices';

// Get Subscription Details
export const getSubscriptionDetails = async (sessionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/users/subscriptions`, {
            headers: { 
                'sessionId': sessionId,
                'accept': '*/*',
                'ngrok-skip-browser-warning': 'true',
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
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'true',
            }
        });
        return response.data;
    } catch (error) {
        console.error('POST Error:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Failed to update subscription.');
    }
};

// Capture Payment
export const capturePayment = async (sessionId, paymentId, amount) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/api/payments/capture`,
            null, // No body in the curl request
            {
                headers: {
                    'accept': '*/*',
                    'ngrok-skip-browser-warning': 'true',
                },
                params: {
                    paymentId,
                    amount,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Capture Payment Error:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Failed to capture payment.');
    }
};