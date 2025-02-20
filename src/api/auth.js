import axios from 'axios';
const BASE_URL = 'http://204.12.227.152:9090/chatbotservices';

// Login User
export const loginUser = async (username, password) => {
    try {
        console.log("Sending login request to:", `${BASE_URL}/api/auth/login`);
        const response = await axios.get(
            `${BASE_URL}/api/auth/login`, 
            {
                params: { username, password }, // Query parameters
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log("Login API response:", response.data);
        // Check for invalid credentials message
        if (response.data === 'Invalid username or password') {
            throw new Error('Incorrect username or password. Please try again.');
        }

        return { sessionId: response.data }; // Return the session ID
    } catch (error) {
        console.error("Login error:", error.message);
        throw new Error(error.response?.data?.message || error.message || 'Login failed.');
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
                },
            }
        );
        console.log("Validation response:", response.data);

        // Check if the response indicates success
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