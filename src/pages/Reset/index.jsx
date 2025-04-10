import React, { useState, useEffect } from 'react';
import Layout from '../../layout/blank';
import { Card, Row, Col, Form, Container, Button } from 'react-bootstrap';
import { Link, useSearchParams, useNavigate } from 'react-router-dom'; // Added useNavigate
import LogoLink from '../../components/Logo/LogoLink';
import { resetPassword } from '../../api/user'; // Import the new API function

function Reset() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate(); // For redirecting after success
    const [formData, setFormData] = useState({
        verificationCode: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const tokenFromUrl = searchParams.get('key'); // Assuming 'key' from your previous example
        if (tokenFromUrl) {
            setFormData((prev) => ({ ...prev, verificationCode: tokenFromUrl }));
        }
    }, [searchParams]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
        setSuccess(''); // Clear success message on change
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.verificationCode) newErrors.verificationCode = 'Verification code is required.';
        if (!formData.newPassword) newErrors.newPassword = 'New password is required.';
        if (formData.newPassword.length < 6) newErrors.newPassword = 'Password must be at least 6 characters.';
        if (formData.confirmPassword !== formData.newPassword)
            newErrors.confirmPassword = 'Passwords do not match.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const { verificationCode, newPassword, confirmPassword } = formData;
            await resetPassword(verificationCode, { newPassword, confirmPassword });
            setSuccess('Password changed successfully!');
            setFormData({ verificationCode: '', newPassword: '', confirmPassword: '' }); // Clear form
            setTimeout(() => {
                navigate('/login'); // Redirect to login after 2 seconds
            }, 2000);
        } catch (err) {
            setErrors({ ...errors, api: err.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout title="Reset" content="tyn-auth tyn-auth-centered">
            <Container>
                <Row className="justify-content-center">
                    <Col xl="6" lg="6" md="7" sm="9">
                        <Card className="border-0 p-4">
                            <div className="my-3 text-center">
                                <LogoLink size="sm" />
                            </div>
                            <Form className="tyn-form" noValidate onSubmit={handleSubmit}>
                                <Row className="g-gs">
                                    <Col xs="12">
                                        <Form.Group controlId="verificationCode">
                                            <Form.Label>Verification Code</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="verificationCode"
                                                value={formData.verificationCode}
                                                onChange={handleChange}
                                                placeholder="Enter Verification Code"
                                                isInvalid={!!errors.verificationCode}
                                                disabled={isSubmitting}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.verificationCode}
                                            </Form.Control.Feedback>
                                            <div className="tyn-subtext mt-2">
                                                The pass key associated with your account
                                            </div>
                                        </Form.Group>
                                    </Col>

                                    <Col lg="6">
                                        <Form.Group controlId="newPassword">
                                            <Form.Label>New Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="newPassword"
                                                value={formData.newPassword}
                                                onChange={handleChange}
                                                placeholder="Enter new password"
                                                isInvalid={!!errors.newPassword}
                                                disabled={isSubmitting}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.newPassword}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col lg="6">
                                        <Form.Group controlId="confirmPassword">
                                            <Form.Label>Repeat Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                placeholder="Repeat new password"
                                                isInvalid={!!errors.confirmPassword}
                                                disabled={isSubmitting}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.confirmPassword}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col xs="12">
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            disabled={isSubmitting}
                                            className="mt-3"
                                        >
                                            {isSubmitting ? 'Saving...' : 'Change Password'}
                                        </Button>
                                    </Col>
                                </Row>
                                {errors.api && (
                                    <div className="mt-3 text-danger text-center">
                                        {errors.api}
                                    </div>
                                )}
                                {success && (
                                    <div className="mt-3 text-success text-center">
                                        {success}
                                    </div>
                                )}
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Reset;