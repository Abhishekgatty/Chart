import React, { useState } from 'react';
import Layout from '../../layout/blank';
import { Button, Card, Row, Col, Form, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import LogoLink from './../../components/Logo/LogoLink';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();

    // State for form data
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });

    // State for error messages
    const [errors, setErrors] = useState({});

    // State for loading and submission status
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    // Validate form fields
    const validate = () => {
        const newErrors = {};
        if (!formData.userName) newErrors.userName = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form inputs
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsLoading(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            // Send login request to the backend
            const loginResponse = await axios({
                method: 'post',
                url: 'https://4b9d-106-51-211-140.ngrok-free.app/api/users/login', // Login API URL
                data: formData,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            // Extract userId from the login response
            const { userId } = loginResponse.data;

            // Fetch user subscription details
            const userResponse = await axios.get(
                `https://4b9d-106-51-211-140.ngrok-free.app/api/users/${userId}/subscriptions`
            );

            // Simulate saving user data globally (e.g., in localStorage or context)
            const userData = {
                userId,
                ...userResponse.data
            };
            localStorage.setItem('userData', JSON.stringify(userData)); // Save user data locally

            // Set success message
            setSubmitStatus({
                type: 'success',
                message: 'Login successful'
            });

            // Redirect to chatbot page after 2 seconds
            setTimeout(() => navigate('/chatbot'), 2000);
        } catch (error) {
            console.error('Login error:', error.response || error);

            // Extract and display error message
            const errorMessage = error.response?.data?.message
                || error.response?.data
                || error.message
                || 'Login failed. Please try again.';
            setSubmitStatus({
                type: 'error',
                message: typeof errorMessage === 'string' ? errorMessage : 'Login failed. Please try again.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Layout title="Login" content="tyn-auth tyn-auth-centered">
            <Container>
                <Row className="justify-content-center">
                    <Col xl="4" lg="5" md="7" sm="9">
                        <div className="my-3 text-center">
                            <LogoLink size="sm" full />
                        </div>
                        <Card className="border-0">
                            <div className="p-4">
                                <h3>Login</h3>

                                {/* Display submission status */}
                                {submitStatus.message && (
                                    <Alert variant={submitStatus.type === 'success' ? 'success' : 'danger'}>
                                        {submitStatus.message}
                                    </Alert>
                                )}

                                <Form onSubmit={handleSubmit}>
                                    {/* Username Field */}
                                    <Form.Group className="form-group">
                                        <Form.Label htmlFor="userName">Username</Form.Label>
                                        <div className="form-control-wrap">
                                            <Form.Control
                                                type="text"
                                                name="userName"
                                                value={formData.userName}
                                                onChange={handleChange}
                                                placeholder="Enter username"
                                                isInvalid={!!errors.userName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.userName}
                                            </Form.Control.Feedback>
                                        </div>
                                    </Form.Group>

                                    {/* Password Field */}
                                    <Form.Group className="form-group">
                                        <Form.Label className="d-flex" htmlFor="password">
                                            Password{' '}
                                            <Link to="/forgot" className="link link-primary ms-auto">
                                                Forgot?
                                            </Link>
                                        </Form.Label>
                                        <div className="form-control-wrap">
                                            <Form.Control
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="password"
                                                isInvalid={!!errors.password}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </div>
                                    </Form.Group>

                                    {/* Submit Button */}
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="w-100 mt-3"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Processing...' : 'Account Login'}
                                    </Button>
                                </Form>
                            </div>
                        </Card>
                        <div className="text-center mt-4">
                            <p className="small">
                                Don't have an account? <Link to="/register">Register</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Login;