import axios from 'axios';

const API_BASE_URL = 'http://204.12.227.152:9092/chatbotservices/api';

// Fetch archived session details
export const getArchivedSessions = async (sessionId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sessions/userconversationdetails`, {
      headers: {
        'accept': '*/*',
        'sessionId': sessionId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error in getArchivedSessions:', error);
    throw error.response?.data || error.message;
  }
};

// Fetch conversations for a specific session
export const getConversations = async (sessionId, pastSessionId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/conversations/getConversations`, {
      headers: {
        'accept': '*/*',
        'sessionId': sessionId,
      },
      params: {
        pastSessionId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error in getConversations:', error);
    throw error.response?.data || error.message;
  }
};