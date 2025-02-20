import axios from 'axios';

<<<<<<< HEAD
const BASE_URL = process.env.REACT_BASE_URL;
=======
const BASE_URL = process.env.REACT_APP_BASE_URL;
>>>>>>> cec177c0ad4be6a62f953016ba847476e3b4b899

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