import React, { useEffect, useState } from 'react';
import Layout from '../../layout/main'
import { Container, Nav, Tab } from 'react-bootstrap';

import { useSearchParams } from 'react-router-dom';

import ProfileHead from './ProfileHead'
import ProfileIntro from './ProfileIntro'
import ProfileEdit from './ProfileEdit'
import ProfileSecurity from './ProfileSecurity'

function Profile() {
    let [searchParams, setSearchParams] = useSearchParams();
    const [activeKey,setActiveKey] = useState(searchParams.get('tab') !== null ? searchParams.get('tab') : 'profile-edit');
    useEffect(() => {
        setActiveKey(searchParams.get('tab'));
    }, [searchParams])
    
  return (
    <Layout title="Profile" content="tyn-content-page" footer={true}>
      <div className="tyn-main tyn-content-inner">
        <Container>
            <div className="tyn-profile">
                <ProfileHead />
                <Tab.Container defaultActiveKey={activeKey} activeKey={activeKey}>
                    <div className="tyn-profile-nav">
                        <Nav as="ul" variant="tabs nav-tabs-line" className="w-100">
                            <Nav.Item as="li">
                                <Nav.Link onClick={()=> {setActiveKey('profile-intro'); setSearchParams({ 'tab': 'profile-intro' });}} as="button" eventKey="profile-intro">
                                    Intro
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link onClick={()=> {setActiveKey('profile-edit'); setSearchParams({ 'tab': 'profile-edit' });}} as="button" eventKey="profile-edit">
                                    Edit Profile
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link onClick={()=> {setActiveKey('profile-security'); setSearchParams({ 'tab': 'profile-security' });}} as="button" eventKey="profile-security">
                                    Change Password
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="tyn-profile-details">
                        <Tab.Content className="tab-content">
                            <Tab.Pane eventKey="profile-intro">
                                <ProfileIntro />
                            </Tab.Pane>
                            <Tab.Pane eventKey="profile-edit">
                                <ProfileEdit />
                            </Tab.Pane>
                            <Tab.Pane eventKey="profile-security">
                                <ProfileSecurity />
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Profile