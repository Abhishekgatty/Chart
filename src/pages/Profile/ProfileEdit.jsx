import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../../store/user';
import { updateUserData, fetchUserData } from '../../api/user';

const ProfileEdit = () => {
    const navigate = useNavigate();
    const sessionId = localStorage.getItem('sessionId');
    const { userData, loading, error } = useUserData(sessionId);
    const [formData, setFormData] = useState({
        id: 0,
        userName: '',
        name: '',
        email: '',
        country: '',
        city: '',
        course: '',
        year: '',
        college: '',
        semester: '',
        subscriptionName: 'Free'
    });
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        console.log('ProfileEdit - userData:', userData);
        console.log('ProfileEdit - loading:', loading);
        console.log('ProfileEdit - error:', error);
    }, [userData, loading, error]);

    useEffect(() => {
        if (userData) {
            setFormData({
                id: userData.id || 0,
                userName: userData.userName || '',
                name: userData.name || '',
                email: userData.email || '',
                country: userData.country || '',
                city: userData.city || '',
                course: userData.course || '',
                year: userData.year || '',
                college: userData.college || '',
                semester: userData.semester || '',
                subscriptionName: userData.subscriptionName || 'Free'
            });
        }
    }, [userData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            if (!sessionId) {
                throw new Error('No session ID found');
            }

            let validatedUserData;
            try {
                validatedUserData = await fetchUserData(sessionId);
                console.log('Validated user data:', validatedUserData);
            } catch (validationError) {
                console.error('Session validation failed:', validationError);
                throw new Error('Invalid session. Please log in again.');
            }

            const submitData = {
                id: validatedUserData.id,
                userName: formData.userName,
                name: formData.name,
                email: formData.email,
                country: formData.country,
                city: formData.city,
                course: formData.course,
                year: parseInt(formData.year) || 0,
                college: formData.college,
                semester: parseInt(formData.semester) || 0,
                subscriptionName: formData.subscriptionName
            };

            console.log('Submitting payload:', submitData);
            await updateUserData(sessionId, submitData);
            setSubmitStatus({
                type: 'success',
                message: 'Profile updated successfully!'
            });
        } catch (error) {
            console.error('Submit error:', error);
            const errorMessage = error.message || 'Failed to update profile.';
            setSubmitStatus({ type: 'danger', message: errorMessage });
            if (errorMessage.includes('Invalid session')) {
                setTimeout(() => navigate('/login'), 2000);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container mt-4">
            <h3>Edit Profile</h3>
            {submitStatus.message && (
                <Alert variant={submitStatus.type}>
                    {submitStatus.message}
                </Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        className="form-control"
                        disabled
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="form-control"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="form-control"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Course</Form.Label>
                    <Form.Select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="">Select a course</option>
                        <option value="Nursing">Nursing</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Year</Form.Label>
                    <Form.Select
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="">Select a year</option>
                        {[1,2,3,4].map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>College</Form.Label>
                    <Form.Control
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        className="form-control"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Semester</Form.Label>
                    <Form.Select
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="">Select a semester</option>
                        {[1, 2, 3, 4, 5, 6].map((semester) => (
                            <option key={semester} value={semester}>
                                {semester}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                </Button>
            </Form>
        </div>
    );
};

export default ProfileEdit;