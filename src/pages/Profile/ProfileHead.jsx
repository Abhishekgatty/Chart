import React, { useState, useEffect } from 'react';
import { Media } from '../../components';
import { useUserData } from '../../store/user';
import { uploadProfilePic, getProfilePic, deleteProfilePic } from '../../api/user'; // Added deleteProfilePic
import { Pencil, Trash, Upload } from 'react-bootstrap-icons'; // Added Trash and Upload icons
import classNames from 'classnames';

const ProfileHead = () => {
    const sessionId = localStorage.getItem('sessionId');
    const { userData, loading, error } = useUserData(sessionId);
    const [profilePic, setProfilePic] = useState(null);
    const [uploadError, setUploadError] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [showMenu, setShowMenu] = useState(false); // State to toggle menu visibility

    useEffect(() => {
        fetchProfilePic();
    }, []);

    const fetchProfilePic = async () => {
        try {
            const imageUrl = await getProfilePic(sessionId);
            setProfilePic(imageUrl);
        } catch (err) {
            setUploadError(err.message);
        }
    };

    const handleProfilePicUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (file.size > 2 * 1024 * 1024) {
            setUploadError('File size exceeds 2MB limit');
            return;
        }

        setIsUploading(true);
        setUploadError(null);
        setShowMenu(false); // Hide menu after selection

        try {
            await uploadProfilePic(sessionId, file);
            await fetchProfilePic();
        } catch (err) {
            setUploadError(err.message);
        } finally {
            setIsUploading(false);
        }
    };

    const handleDeleteProfilePic = async () => {
        setIsUploading(true);
        setUploadError(null);
        setShowMenu(false); // Hide menu after selection

        try {
            await deleteProfilePic(sessionId);
            setProfilePic(null); // Clear the profile picture
        } catch (err) {
            setUploadError(err.message);
        } finally {
            setIsUploading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="tyn-profile-head">
            <div className="tyn-profile-info">
                <Media.Group className="align-items-start">
                    <Media size="4xl" bordered className="tyn-profile-avatar" style={{ position: 'relative' }}>
                        <div
                            style={{
                                position: 'relative',
                                display: 'block',
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            <img
                                src={profilePic || "images/avatar/19.jpg"}
                                alt="Profile"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <span
                                onClick={() => setShowMenu(!showMenu)} // Toggle menu on click
                                style={{
                                    position: 'absolute',
                                    bottom: '5px',
                                    right: '5px',
                                    background: 'rgba(0, 0, 0, 0.7)',
                                    borderRadius: '50%',
                                    padding: '5px',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <Pencil size={12} />
                            </span>

                            {/* Menu for Update/Delete */}
                            {showMenu && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '30px',
                                        right: '0',
                                        background: 'white',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                        zIndex: 10,
                                    }}
                                >
                                    <label
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '8px 12px',
                                            cursor: 'pointer',
                                            margin: 0,
                                        }}
                                    >
                                        <Upload size={16} style={{ marginRight: '8px' }} />
                                        Update
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleProfilePicUpload}
                                            style={{ display: 'none' }}
                                            disabled={isUploading}
                                        />
                                    </label>
                                    <div
                                        onClick={handleDeleteProfilePic}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '8px 12px',
                                            cursor: 'pointer',
                                            color: 'red',
                                        }}
                                    >
                                        <Trash size={16} style={{ marginRight: '8px' }} />
                                        Delete
                                    </div>
                                </div>
                            )}
                        </div>
                    </Media>

                    <Media.Col>
                        <Media.Row>
                            <h4 className="name">
                                {userData.name} <br />
                                <span className="username">@{userData.userName}</span>
                            </h4>
                        </Media.Row>
                    </Media.Col>
                </Media.Group>

                {uploadError && (
                    <div className="error-message" style={{ color: 'red', marginTop: '10px' }}>
                        {uploadError}
                    </div>
                )}
                {isUploading && (
                    <div className="uploading-message" style={{ marginTop: '10px' }}>
                        {profilePic ? 'Uploading profile picture...' : 'Deleting profile picture...'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileHead;