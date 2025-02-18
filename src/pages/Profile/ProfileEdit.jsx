import React, { useState } from 'react';
import { updateUserData } from '../../api/user';
import { useUserData } from '../../store/user';

const ProfileEdit = () => {
    const { userData } = useUserData();
    const [formData, setFormData] = useState(userData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserData(localStorage.getItem('sessionId'), formData);
            alert('Profile updated successfully!');
        } catch (error) {
            alert('Failed to update profile.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label>City:</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label>Country:</label>
                <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label>Course:</label>
                <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label>Year:</label>
                <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label>College:</label>
                <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Save Changes
            </button>
        </form>
    );
};

export default ProfileEdit;