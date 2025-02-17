import React, { useState, useEffect, Fragment } from 'react';
import Layout from '../../layout/main'
import { Image, Media } from '../../components';

import { Button, Dropdown, Form, Nav, Tab } from 'react-bootstrap';
import { PlusLg, ThreeDots, Person, Telephone, CameraVideo, ExclamationTriangle, Chat, PersonX, Search, XLg } from 'react-bootstrap-icons'
import SimpleBar from 'simplebar-react'
import classNames from 'classnames';
import { useNavigate, useSearchParams } from 'react-router-dom';

import AudioCall from '../../components/partials/AudioCall'
import VideoCall from '../../components/partials/VideoCall'
import AddContact from '../../components/partials/AddContact';
import ProfileHead from './ProfileHead';
import ProfileAbout from './ProfileAbout';
import ProfileContacts from './ProfileContacts';
import ProfileGallery from './ProfileGallery';
import ProfileStories from './ProfileStories';

import contacts from '../../store/contacts'


function Contacts() {

    let [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [contactData] = useState(contacts);
    const [selected, setSelected] = useState();
  
    const [audioCallModal, setAudioCallModal] = useState(false);
    const [videoCallModal, setVideoCallModal] = useState(false);
    const [addContactModal, setAddContactModal] = useState(false);

    const [showMain, setShowMain] = useState(searchParams.get('id') !== null && true);


// grabs the id of the url and loads the corresponding data
useEffect(() => {
  const id = searchParams.get('id');
  if (id !== undefined || null || "") {
    let selectedContact = contactData.find((item) => item.id === id);
    setSelected(selectedContact);
  };
  if (id == undefined || null || "") {
    navigate(`/contacts?id=${contactData[0].id}`)
  }
}, [searchParams, contactData]);

  return (
    <Layout title="Contacts" content="tyn-contact has-aside-base">
      <div className="tyn-aside tyn-aside-base">
        <div className="tyn-aside-head">
          <div className="tyn-aside-head-text">
              <h3 className="tyn-aside-title tyn-title">Contacts</h3>
              <span className="tyn-subtext">127 Contacts</span>
          </div>
          <div className="tyn-aside-head-tools">
              <ul className="tyn-list-inline gap gap-3">
                  <li><Button variant="light" size="md" className="btn-icon btn-pill"   onClick={()=>{
                      setAddContactModal(!addContactModal);
                    }}><PlusLg /></Button></li>
              </ul>
          </div>
        </div>
        <div className="tyn-aside-row pt-0">
            <Nav defaultActiveKey="contact-all" as="ul" variant="tabs nav-tabs-line">
                <Nav.Item as="li">
                    <Nav.Link as="button" eventKey="contact-all">
                        All
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as="button" eventKey="contact-new">
                        New
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as="button" eventKey="contact-favorites">
                        Favorites
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as="button" eventKey="contact-blocked">
                        Blocked
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
        <SimpleBar className="tyn-aside-body">
          <div className="tyn-aside-search">
            <Form.Group className="form-group tyn-pill">
              <div className="form-control-wrap">
                  <div className="form-control-icon start">
                    <Search />
                  </div>
                  <Form.Control className="form-control-solid" type="text" placeholder="Search contact / chat" />
              </div>
            </Form.Group>
          </div>
          <ul className="tyn-aside-list">
            {contactData.slice(0,10).map((item,index) => {
              return (
                <li key={item.id} 
                  className={classNames({
                    "tyn-aside-item":true,
                    "active" : selected?.id === item.id
                  })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    if(!ev.target.closest('.tyn-aside-item-option')){
                        navigate(`/contacts?id=${item.id}`);
                        setShowMain(true);
                    }
                  }}>
                  <Media.Group>
                    <Media size="lg">
                      <Image src={item.avatar} />
                    </Media>
                    <Media.Col>
                      <Media.Row>
                        <h6 className="name">{item.name}</h6>
                      </Media.Row>
                      <Media.Row className="has-dot-sap">
                        <p className="content">@{item.handle}</p>
                      </Media.Row>
                    </Media.Col>
                    <Media.Option className="tyn-aside-item-option">
                      <ul className="tyn-media-option-list">
                          <Dropdown as="li" autoClose="outside" align="end">
                              <Dropdown.Toggle variant="white" className="btn-icon btn-pill"><ThreeDots /></Dropdown.Toggle>
                              <Dropdown.Menu>
                                <ul className="tyn-list-links">
                                    <li>
                                        <button onClick={(ev) => {
                                            ev.preventDefault();
                                            navigate(`/contacts?id=${item.id}`);
                                        }}>
                                            <Person />
                                            <span>View Profile</span>
                                        </button>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                        <button
                                            onClick={()=>{
                                            setAudioCallModal(!audioCallModal);
                                            }}
                                        >
                                            <Telephone />
                                            <span>Audio Call</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={()=>{
                                                setVideoCallModal(!videoCallModal);
                                            }}
                                        >
                                            <CameraVideo />
                                            <span>Video Call</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={(ev) => {
                                            ev.preventDefault();
                                            navigate(`/?id=${item.id}`);
                                        }}>
                                            <Chat />
                                            <span>Send Message</span>
                                        </button>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                        <a href="#">
                                            <PersonX />
                                            <span>Block</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <ExclamationTriangle />
                                            <span>Report</span>
                                        </a>
                                    </li>
                                </ul>
                              </Dropdown.Menu>
                          </Dropdown>
                      </ul>
                    </Media.Option>
                  </Media.Group>
                </li>
              );
            })}
          </ul>
        </SimpleBar>
      </div>
      <div className={classNames({
            "tyn-main tyn-content-inner":true,
            "main-shown": showMain
        })} id="tynMain">
          <div className="container">
              <div className="tyn-profile">
                <ul className="tyn-list-inline d-md-none translate-middle position-absolute start-50 z-1">
                    <li>
                        <Button variant="white" className="btn-icon btn-pill" onClick={()=> setShowMain(false)}>
                            <XLg />
                        </Button>
                    </li>
                </ul>
                  {selected && <ProfileHead user={selected} /> }
                  <Tab.Container as={Fragment} defaultActiveKey="profile-about">
                    <div className="tyn-profile-nav">
                        <Nav as="ul" variant="tabs nav-tabs-line" className="border-0">
                            <Nav.Item as="li">
                                <Nav.Link as="button" eventKey="profile-about">
                                    About
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as="button" eventKey="profile-contacts">
                                    Mutual Contacts
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as="button" eventKey="profile-gallery">
                                    Gallery
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as="button" eventKey="profile-stories">
                                    Stories
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <ul className="tyn-list-inline gap gap-3 ms-auto me-n1">
                            <Dropdown as="li" align="end">
                                <Dropdown.Toggle variant="transparent" size="md" className="btn-icon btn-pill">
                                    <ThreeDots />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                    <ul className="tyn-list-links">
                                        <li>
                                            <button
                                                onClick={()=>{
                                                setAudioCallModal(!audioCallModal);
                                                }}
                                            >
                                                <Telephone />
                                                <span>Audio Call</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button 
                                                onClick={()=>{
                                                    setVideoCallModal(!videoCallModal);
                                                }}
                                            >
                                                <CameraVideo />
                                                <span>Video Call</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button onClick={(ev) => {
                                                ev.preventDefault();
                                                navigate(`/?id=${selected.id}`);
                                            }}>
                                                <Chat />
                                                <span>Send Message</span>
                                            </button>
                                        </li>
                                        <li className="dropdown-divider"></li>
                                        <li>
                                            <a href="#">
                                                <Person />
                                                <span>Block</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <ExclamationTriangle />
                                                <span>Report</span>
                                            </a>
                                        </li>
                                    </ul>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                    </div>
                    <div className="tyn-profile-details">
                        <Tab.Content>
                            <Tab.Pane eventKey="profile-about">
                                {selected && <ProfileAbout user={selected} /> }
                            </Tab.Pane>
                            <Tab.Pane eventKey="profile-contacts">
                                {selected && <ProfileContacts user={selected} /> }
                            </Tab.Pane>
                            <Tab.Pane eventKey="profile-gallery">
                                {selected && <ProfileGallery user={selected} /> }
                            </Tab.Pane>
                            <Tab.Pane eventKey="profile-stories">
                                {selected && <ProfileStories user={selected} /> }
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                  </Tab.Container>
              </div>
          </div>
      </div>
        <AudioCall show={audioCallModal} setShow={setAudioCallModal} showVideo={videoCallModal} setShowVideo={setVideoCallModal} />
        <VideoCall show={videoCallModal} setShow={setVideoCallModal} showAudio={audioCallModal} setShowAudio={setAudioCallModal} />
        <AddContact show={addContactModal} setShow={setAddContactModal} />
    </Layout>
  )
}

export default Contacts