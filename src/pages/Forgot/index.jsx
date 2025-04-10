import React, { useState } from 'react';
import Layout from '../../layout/blank';
import { Card, Row, Col, Form, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoLink from '../../components/Logo/LogoLink';
import { forgotPassword } from '../../api/user'; // Import the API function

function Forgot() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
        setError('');
        setSuccess('');
    };

    const validateEmail = () => {
        if (!email) {
            setError('Email address is required.');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateEmail()) return;

        setIsSubmitting(true);
        try {
            await forgotPassword(email); // Use the API function
            setSuccess('Password reset link has been sent to your email.');
            setEmail('');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout title="Forgot" content="tyn-auth tyn-auth-centered">
            <Container>
                <Row className="justify-content-center">
                    <Col xl="4" lg="5" md="7" sm="9">
                        <div className="my-3 text-center">
                            <LogoLink size="sm" full />
                        </div>
                        <Card className="border-0">
                            <div className="p-4">
                                <h3>Recovery Password</h3>
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row className="g-3">
                                        <Col xs="12">
                                            <Form.Group controlId="email-address">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    id="email-address"
                                                    placeholder="youremail@example.com"
                                                    value={email}
                                                    onChange={handleChange}
                                                    isInvalid={!!error}
                                                    disabled={isSubmitting}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {error}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Col>
                                        <Col xs="12">
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                className="w-100"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Sending...' : 'Reset Password'}
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                                {success && (
                                    <div className="mt-3 text-success text-center">
                                        {success}
                                    </div>
                                )}
                            </div>
                        </Card>
                        <div className="mt-4">
                            <p className="small">
                                Somehow remembered? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Forgot;