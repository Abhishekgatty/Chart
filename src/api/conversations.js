import axios from 'axios';

const BASE_URL = 'http://204.12.227.152:9092/chatbotservices';

// Save Conversation
export const saveConversation = async (sessionId, conversationData) => {
    try {
        // Transform the conversation data to match the expected format
        const payload = {
            id: Number(conversationData.id), // Convert ID to a number
            messages: conversationData.messages || [], // Ensure messages exist
            timestamp: new Date().toISOString() // Add current timestamp
        };

        const response = await axios.post(`${BASE_URL}/api/conversations/saveConversation`, payload, {
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