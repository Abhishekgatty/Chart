import axios from 'axios';
const BASE_URL = 'http://204.12.227.152:9092/chatbotservices';

// Login User
export const loginUser = async (username, password) => {
    try {
        console.log("Sending login request to:", `${BASE_URL}/api/auth/login?username=${username}&password=${password}`);
        const response = await axios.get(
            `${BASE_URL}/api/auth/login`, 
            {
                params: { username, password }, // Send as query parameters
                headers: {
                    'accept': '*/*', // Match Swagger
                    'ngrok-skip-browser-warning': 'true',
                },
            }
        );
        console.log("Login API response:", response.data);
        if (response.data === 'Invalid username or password') {
            throw new Error('Incorrect username or password. Please try again.');
        }
        return { sessionId: response.data }; // Assuming response.data is the sessionId
    } catch (error) {
        console.error("Login error:", error.message);
        console.error("Response data:", error.response?.data);
        throw error; // Let the caller handle it
    }
};

// Validate Session
export const validateSession = async (sessionId) => {
    try {
        console.log("Validating session with ID:", sessionId);
        const response = await axios.get(
            `${BASE_URL}/api/auth/validate`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'sessionId': sessionId, // Include sessionId in headers
                    'ngrok-skip-browser-warning': 'true',
                },
            }
        );
        console.log("Validation response:", response.data);

        if (response.data && response.data.valid) {
            return true; // Session is valid
        } else {
            throw new Error('Session validation failed');
        }
    } catch (error) {
        console.error("Validation error:", error.message);
        throw new Error(error.response?.data?.message || 'Session validation failed.');
    }
};

// Logout
export const logoutUser = async (sessionId) => {
    try {
        await axios.post(`${BASE_URL}/api/auth/logout`, {}, {
            headers: { Authorization: `Bearer ${sessionId}` } // Use Authorization header for logout
        });
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Logout failed.');
    }
};