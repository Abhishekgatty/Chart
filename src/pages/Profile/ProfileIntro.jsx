import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Tiktok } from 'react-bootstrap-icons';
import { 
    Envelope, 
    Building, 
    Globe as World, 
    Book, 
    Calendar, 
    Mortarboard as University 
} from 'react-bootstrap-icons';
import { Button, Col, Row } from 'react-bootstrap';
import { useUserData } from '../../store/user';

const ProfileIntro = () => {
    const { userData, loading, error } = useUserData();    
        if (loading) {
            return <p>Loading...</p>;
        }
    
        if (error) {
            return <p>Error: {error}</p>;
        }

    return (
        <Row className="gy-4">
            {/* Rest of the component remains the same */}
            {/* About Section */}
            {/* <Col xl="6">
                <div className="tyn-profile-bio">
                    <h5>About {userData.name?.split(' ')[0]}</h5>
                    <p>{userData.bio || 'No bio available.'}</p>
                </div>
                <ul className="tyn-list-inline gap gap-3 ms-auto">
                    <li><Button as="a" variant="light" href="#" className="btn-icon"><Facebook /></Button></li>
                    <li><Button as="a" variant="light" href="#" className="btn-icon"><Twitter /></Button></li>
                    <li><Button as="a" variant="light" href="#" className="btn-icon"><Instagram /></Button></li>
                    <li><Button as="a" variant="light" href="#" className="btn-icon"><Tiktok /></Button></li>
                </ul>
            </Col> */}

            {/* Basic Info Section */}
            <Col xs="12">
                <h5>Basic Info</h5>
                <ul className="d-flex gap gx-5 flex-wrap">
                    {/* Email */}
                    <li>
                        <div className="vstack">
                            <div className="mb-2">
                                <Envelope />
                            </div>
                            <span className="tyn-subtext">Email</span>
                            <h5>{userData.email || 'Not provided'}</h5>
                        </div>
                    </li>

                    {/* City */}
                    <li>
                        <div className="vstack">
                            <div className="mb-2">
                                <Building />
                            </div>
                            <span className="tyn-subtext">City</span>
                            <h5>{userData.city || 'Not provided'}</h5>
                        </div>
                    </li>

                    {/* Country */}
                    <li>
                        <div className="vstack">
                            <div className="mb-2">
                                <World />
                            </div>
                            <span className="tyn-subtext">Country</span>
                            <h5>{userData.country || 'Not provided'}</h5>
                        </div>
                    </li>

                    {/* Course */}
                    <li>
                        <div className="vstack">
                            <div className="mb-2">
                                <Book />
                            </div>
                            <span className="tyn-subtext">Course</span>
                            <h5>{userData.course || 'Not provided'}</h5>
                        </div>
                    </li>

                    {/* Year */}
                    <li>
                        <div className="vstack">
                            <div className="mb-2">
                                <Calendar />
                            </div>
                            <span className="tyn-subtext">Year</span>
                            <h5>{userData.year || 'Not provided'}</h5>
                        </div>
                    </li>

                    {/* College */}
                    <li>
                        <div className="vstack">
                            <div className="mb-2">
                                <University />
                            </div>
                            <span className="tyn-subtext">College</span>
                            <h5>{userData.college || 'Not provided'}</h5>
                        </div>
                    </li>
                </ul>
            </Col>
        </Row>
    );
};

export default ProfileIntro;