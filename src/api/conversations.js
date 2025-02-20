import axios from 'axios';

const BASE_URL = "http://192.168.68.100:8080/chatbotservices";

// Save Conversation
export const saveConversation = async (sessionId, conversationData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/conversations/saveConversation`, conversationData, {
            headers: { sessionId }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to save conversation.');
    }
};

// Get Conversations
export const getConversations = async (sessionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/conversations/getConversations`, {
            headers: { sessionId }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch conversations.');
    }
};