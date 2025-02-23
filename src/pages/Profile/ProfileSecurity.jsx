import React, { useState } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { changePassword } from '../../api/user';

const ProfileSecurity = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.currentPassword) newErrors.currentPassword = 'Current password is required';
        if (!formData.newPassword) newErrors.newPassword = 'New password is required';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
        if (formData.newPassword && formData.confirmPassword && formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const sessionId = localStorage.getItem('sessionId');
            if (!sessionId) {
                throw new Error('No session ID found. Please log in.');
            }

            const passwordData = {
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword,
                confirmPassword: formData.confirmPassword
            };

            console.log('Submitting password change:', passwordData);
            await changePassword(sessionId, passwordData);

            setSubmitStatus({
                type: 'success',
                message: 'Password changed successfully!'
            });

            // Reset form
            setFormData({
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
            setErrors({});
        } catch (error) {
            console.error('Password change error:', error);
            setSubmitStatus({
                type: 'danger',
                message: error.message || 'Failed to change password.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Row className="gy-5">
            <Col xs="12">
                <Row className="gy-4">
                    <Col lg="3">
                        <h6>Change Password</h6>
                        <div className="tyn-subtext">Edit Your pass key</div>
                    </Col>
                    <Col lg="9">
                        {submitStatus.message && (
                            <Alert variant={submitStatus.type}>
                                {submitStatus.message}
                            </Alert>
                        )}
                        <Form onSubmit={handleSubmit}>
                            <Row className="g-gs">
                                <Col xs="12">
                                    <div className="form-group">
                                        <Form.Label className="d-flex" htmlFor="currentPassword">Current Password</Form.Label>
                                        <div className="form-control-wrap">
                                            <Form.Control
                                                type="password"
                                                id="currentPassword"
                                                name="currentPassword"
                                                value={formData.currentPassword}
                                                onChange={handleChange}
                                                placeholder="Enter current password"
                                                isInvalid={!!errors.currentPassword}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.currentPassword}
                                            </Form.Control.Feedback>
                                        </div>
                                        <div className="tyn-subtext mt-2">The pass key associated with your account</div>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="form-group">
                                        <Form.Label htmlFor="newPassword">New Password</Form.Label>
                                        <div className="form-control-wrap">
                                            <Form.Control
                                                type="password"
                                                id="newPassword"
                                                name="newPassword"
                                                value={formData.newPassword}
                                                onChange={handleChange}
                                                placeholder="Enter new password"
                                                isInvalid={!!errors.newPassword}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.newPassword}
                                            </Form.Control.Feedback>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="form-group">
                                        <Form.Label htmlFor="confirmPassword">Repeat Password</Form.Label>
                                        <div className="form-control-wrap">
                                            <Form.Control
                                                type="password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                placeholder="Repeat new password"
                                                isInvalid={!!errors.confirmPassword}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.confirmPassword}
                                            </Form.Control.Feedback>
                                        </div>
                                    </div>
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
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ProfileSecurity;