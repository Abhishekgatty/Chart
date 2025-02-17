import React, { useState } from 'react';
import Layout from '../../layout/blank';
import { Button, Card, Row, Col, Form, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import LogoLink from '../../components/Logo/LogoLink';
import axios from 'axios';

function Register() {
    const navigate = useNavigate();

    // State for form data
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        name: '',
        city: '',
        country: '',
        course: '',
        year: '',
        college: '',
        subscriptionName: 'Free'
    });

    // State for validation errors
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
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.course) newErrors.course = 'Course is required';
        if (!formData.year) newErrors.year = 'Year is required';
        if (!formData.college) newErrors.college = 'College is required';
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
            // Flatten the payload to match the backend's expected structure
            const submitData = {
                ...formData,
                year: parseInt(formData.year), // Ensure year is parsed as an integer
                subscriptionName: 'Free'
            };

            // Send the request to the backend
            const response = await axios({
                method: 'post',
                url: 'https://4b9d-106-51-211-140.ngrok-free.app/api/users/register', // Full backend URL
                data: submitData,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            // Handle successful registration
            if (response.data) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Registration successful'
                });

                // Reset form fields
                setFormData({
                    userName: '',
                    email: '',
                    password: '',
                    name: '',
                    city: '',
                    country: '',
                    course: '',
                    year: '',
                    college: '',
                    subscriptionName: 'Free'
                });

                setErrors({});
                setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
            }
        } catch (error) {
            console.error('Registration error:', error.response || error);

            // Extract and display error message
            const errorMessage = error.response?.data?.message 
                || error.response?.data 
                || error.message 
                || 'Registration failed. Please try again.';

            setSubmitStatus({
                type: 'error',
                message: typeof errorMessage === 'string' ? errorMessage : 'Registration failed. Please try again.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Layout>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <div className="text-center mb-4">
                                    <LogoLink />
                                    <h3>Create Account</h3>
                                </div>

                                {/* Display submission status */}
                                {submitStatus.message && (
                                    <Alert variant={submitStatus.type === 'success' ? 'success' : 'danger'}>
                                        {submitStatus.message}
                                    </Alert>
                                )}

                                {/* Registration Form */}
                                <Form onSubmit={handleSubmit}>
                                    {/* Username Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Username</Form.Label>
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
                                    </Form.Group>

                                    {/* Email Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter email"
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Password Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter password"
                                            isInvalid={!!errors.password}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Name Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter full name"
                                            isInvalid={!!errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* City Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Enter city"
                                            isInvalid={!!errors.city}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.city}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Country Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            placeholder="Enter country"
                                            isInvalid={!!errors.country}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.country}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Course Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Course</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            placeholder="Enter course"
                                            isInvalid={!!errors.course}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.course}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Year Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Year</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="year"
                                            value={formData.year}
                                            onChange={handleChange}
                                            placeholder="Enter year"
                                            isInvalid={!!errors.year}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.year}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* College Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>College</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="college"
                                            value={formData.college}
                                            onChange={handleChange}
                                            placeholder="Enter college"
                                            isInvalid={!!errors.college}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.college}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Submit Button */}
                                    <Button variant="primary" type="submit" disabled={isLoading} block>
                                        {isLoading ? 'Processing...' : 'Register Account'}
                                    </Button>
                                </Form>

                                {/* Login Link */}
                                <div className="text-center mt-3">
                                    Already have an account? <Link to="/login">Login</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Register;