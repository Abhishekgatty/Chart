import React, { useState } from 'react';
import Layout from '../../layout/blank';
import { Button, Card, Row, Col, Form, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import LogoLink from '../../components/Logo/LogoLink';
import { registerUser } from '../../api/user';

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        repeatPassword: '',
        name: '',
        city: '',
        country: '',
        course: '',
        year: '',
        college: '',
        semester: '',
        subscriptionName: 'Free'
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.userName) newErrors.userName = 'Username is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.repeatPassword) newErrors.repeatPassword = 'Repeat Password is required';
        if (formData.password && formData.repeatPassword && formData.password !== formData.repeatPassword) {
            newErrors.repeatPassword = 'Passwords do not match';
        }
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.course) newErrors.course = 'Course is required';
        if (!formData.year) newErrors.year = 'Year is required';
        if (!formData.college) newErrors.college = 'College is required';
        if (!formData.semester) newErrors.semester = 'Semester is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsLoading(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const submitData = {
                userName: formData.userName,
                email: formData.email,
                password: formData.password,
                name: formData.name,
                city: formData.city,
                country: formData.country,
                course: formData.course,
                year: parseInt(formData.year),
                college: formData.college,
                semester: parseInt(formData.semester),
                subscriptionName: formData.subscriptionName
            };

            await registerUser(submitData);

            setSubmitStatus({
                type: 'success',
                message: 'Registration successful'
            });

            setFormData({
                userName: '',
                email: '',
                password: '',
                repeatPassword: '',
                name: '',
                city: '',
                country: '',
                course: '',
                year: '',
                college: '',
                semester: '',
                subscriptionName: 'Free'
            });

            setErrors({});
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            console.error('Registration error:', error);
            const errorMessage =
                error.response?.data?.message ||
                error.response?.data ||
                error.message ||
                'Registration failed. Please try again.';
            setSubmitStatus({
                type: 'error',
                message: typeof errorMessage === 'string' ? errorMessage : 'Registration failed. Please try again.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Layout title="Register" content="tyn-auth tyn-auth-centered">
            <Container>
                <Row className="justify-content-center">
                    <Col xl="6" lg="8">
                        <div className="my-3 text-center">
                            <LogoLink size="sm" full />
                        </div>
                        <Card className="border-0">
                            <div className="p-4">
                                <h3>Create Account</h3>

                                {submitStatus.message && (
                                    <Alert variant={submitStatus.type === 'success' ? 'success' : 'danger'}>
                                        {submitStatus.message}
                                    </Alert>
                                )}

                                <Form onSubmit={handleSubmit}>
                                    <Row className="g-3 gx-4">
                                        <Col sm="6">
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
                                        </Col>
                                        <Col sm="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="email">Email Address</Form.Label>
                                                <div className="form-control-wrap">
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
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="password">Password</Form.Label>
                                                <div className="form-control-wrap">
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
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="repeatPassword">Repeat Password</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Control
                                                        type="password"
                                                        name="repeatPassword"
                                                        value={formData.repeatPassword}
                                                        onChange={handleChange}
                                                        placeholder="Repeat password"
                                                        isInvalid={!!errors.repeatPassword}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.repeatPassword}
                                                    </Form.Control.Feedback>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="name">Full Name</Form.Label>
                                                <div className="form-control-wrap">
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
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="city">City</Form.Label>
                                                <div className="form-control-wrap">
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
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="country">Country</Form.Label>
                                                <div className="form-control-wrap">
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
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="course">Department</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Select
                                                        name="course"
                                                        value={formData.course}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.course}
                                                    >
                                                        <option value="">Select Department</option>
                                                        <option value="Nursing">Nursing</option>
                                                    </Form.Select>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.course}
                                                    </Form.Control.Feedback>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="year">Year</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Select
                                                        name="year"
                                                        value={formData.year}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.year}
                                                    >
                                                        <option value="">Select a year</option>
                                                        {[1, 2, 3, 4].map((year) => (
                                                            <option key={year} value={year}>
                                                                {year}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.year}
                                                    </Form.Control.Feedback>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="college">College</Form.Label>
                                                <div className="form-control-wrap">
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
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col sm="6">
                                            <Form.Group className="form-group">
                                                <Form.Label htmlFor="semester">Semester</Form.Label>
                                                <div className="form-control-wrap">
                                                    <Form.Select
                                                        name="semester"
                                                        value={formData.semester}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.semester}
                                                    >
                                                        <option value="">Select a semester</option>
                                                        {[1, 2, 3, 4, 5, 6].map((semester) => (
                                                            <option key={semester} value={semester}>
                                                                {semester}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.semester}
                                                    </Form.Control.Feedback>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col sm="12">
                                            <Button
                                                variant="primary"
                                                type="submit"
                                                className="w-100 mt-3"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? 'Processing...' : 'Register Account'}
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Card>
                        <div className="text-center mt-4">
                            <p className="small">
                                Already have an account?{' '}
                                <Link to="/login" className="link link-primary">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Register;