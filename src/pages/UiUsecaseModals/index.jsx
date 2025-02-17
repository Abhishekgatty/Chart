import React from 'react';
import Layout from '../../layout/main'
import {Button, Col, Container, Dropdown, Form, Modal, Nav, Row, Tab } from 'react-bootstrap';
import {Section} from "../../layout/global"
import { Link } from 'react-router-dom';
import { CameraVideo, CameraVideoFill, ChatLeftText, EnvelopeFill, MicMuteFill, PersonPlusFill, Search, Telephone, TelephoneFill, TelephoneXFill, ThreeDots } from 'react-bootstrap-icons';
import { Image, Media } from '../../components';

const contactList = [
    { id:"uid01", avatar: "/images/avatar/1.jpg", name: 'Jasmine Thompson', handle: '@thompson_jasmine' },
    { id:"uid02", avatar: "/images/avatar/2.jpg", name: 'Konstantin Frank', handle: '@konstantin_frank' },
    { id:"uid03", avatar: "/images/avatar/3.jpg", name: 'Mathias Devos', handle: '@mathias_devos' },
    { id:"uid04", avatar: "/images/avatar/4.jpg", name: 'Marie George', handle: '@marie_george' },
    { id:"uid05", avatar: "/images/avatar/5.jpg", name: 'Phillip Burke', handle: '@phillip_burke' }
]

function UiUsecaseModals() {
  return (
    <Layout title="Usecase Modals" content="tyn-content-page" footer={true}>
        <div className="tyn-hero">
            <div className="container">
                <Row className="row justify-content-center text-center">
                    <Col md="7" lg="5" xl="4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Usecase Modals</li>
                            </ol>
                        </nav>
                        <h1 className="display-6">Usecase Modals</h1>
                        <p>You get lot's of essential pre designed modal for you chat application.</p>
                    </Col>
                </Row>
            </div>
        </div>
      <div className="tyn-main tyn-modal-preview">
        <Section>
            <Container fluid="xxl">
              <Section.Content>
                <Tab.Container defaultActiveKey="call-screens">
                    <Nav as="ul" variant="tabs nav-tabs-line" className="border-bottom-0 justify-content-center">
                        <Nav.Item>
                            <Nav.Link eventKey="call-screens">
                                Call Screens
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="action-modal">
                                Action Modals
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="py-4">
                        <Tab.Content>    
                            <Tab.Pane eventKey="call-screens">        
                                <div className="d-flex justify-content-center flex-wrap gap gap-3">
                                    <div className="px-3">
                                        <div className="modal show w-auto h-auto" style={{ display: 'block', position: 'initial' }}>
                                            <Modal.Dialog centered size="sm" className="my-0" contentClassName="border-0">
                                                <div className="tyn-chat-call tyn-chat-call-video">
                                                    <div className="tyn-chat-call-stack">
                                                        <div className="tyn-chat-call-cover">
                                                            <img src="/images/v-cover/1.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="tyn-chat-call-stack on-dark">
                                                        <Media.Group orientation="vr" align="center" className="mt-auto">
                                                            <Media size="xl" shape="circle" className="border border-2 border-white">
                                                                <img src="/images/v-cover/2.jpg" alt="" />
                                                            </Media>
                                                            <Media.Col>
                                                                <Media.Row className="has-dot-sap">
                                                                    <span className="meta">Calling ...</span>
                                                                </Media.Row>
                                                                <Media.Row>
                                                                    <h6 className="name">Konstantin Frank</h6>
                                                                </Media.Row>
                                                            </Media.Col>
                                                        </Media.Group>
                                                        <ul className="tyn-list-inline gap gap-3 mx-auto py-4 justify-content-center  mt-auto">
                                                            <li>
                                                                <Button variant="light" className="btn-icon btn-pill">
                                                                    <PersonPlusFill />
                                                                </Button>
                                                            </li>
                                                            <li>
                                                                <Button  variant="light" className="btn-icon btn-pill" >
                                                                    <CameraVideoFill />
                                                                </Button>
                                                            </li>
                                                            <li>
                                                                <Button variant="light" className="btn-icon btn-pill">
                                                                    <MicMuteFill />
                                                                </Button>
                                                            </li>
                                                            <li>
                                                                <Button
                                                                    variant="danger" className="btn-icon btn-pill">
                                                                    <TelephoneXFill />
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Modal.Dialog>
                                        </div>
                                        <h6 className="tyn-overline mt-3 text-center">Video Calling</h6>
                                    </div>
                                    <div className="px-3">
                                        <div className="modal show w-auto h-auto" style={{ display: 'block', position: 'initial' }}>
                                            <Modal.Dialog centered size="sm" className="my-0" contentClassName="border-0">
                                                <div className="tyn-chat-call tyn-chat-call-video">
                                                    <div className="tyn-chat-call-stack">
                                                        <div className="tyn-chat-call-cover">
                                                            <img src="/images/v-cover/2.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="tyn-chat-call-stack on-dark">
                                                        <Media.Group orientation="vr" align="center" className="mt-auto">
                                                            <Media size="xl" shape="circle" className="border border-2 border-white">
                                                                <img src="/images/avatar/3.jpg" alt="" />
                                                            </Media>
                                                            <Media.Col>
                                                                <Media.Row className="has-dot-sap">
                                                                    <span className="meta">VIdeo Call From ..</span>
                                                                </Media.Row>
                                                                <Media.Row>
                                                                    <h6 className="name">Konstantin Frank</h6>
                                                                </Media.Row>
                                                            </Media.Col>
                                                        </Media.Group>
                                                        <ul className="tyn-list-inline gap gap-3 mx-auto py-4 justify-content-center">
                                                            <li><Button variant="danger" className="btn-icon btn-pill"><TelephoneXFill /></Button></li>
                                                            <li><Button variant="success" className="btn-icon btn-pill"><CameraVideoFill /></Button></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Modal.Dialog>
                                        </div>
                                        <h6 className="tyn-overline mt-3 text-center">Incoming Video Call</h6>
                                    </div>
                                    <div className="px-3">
                                        <div className="modal show w-auto h-auto" style={{ display: 'block', position: 'initial' }}>
                                            <Modal.Dialog centered size="sm" className="my-0" contentClassName="border-0">
                                                <div className="tyn-chat-call tyn-chat-call-video">
                                                    <div className="tyn-chat-call-stack">
                                                        <div className="tyn-chat-call-cover">
                                                            <img src="/images/v-cover/1.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="tyn-chat-call-stack on-dark">
                                                        <Media.Group className="p-4">
                                                            <Media.Col className="align-self-start pt-3">
                                                                <Media.Row className="has-dot-sap">
                                                                    <span className="meta">Talking With ...</span>
                                                                </Media.Row>
                                                                <Media.Row>
                                                                    <h6 className="name">Konstantin Frank</h6>
                                                                </Media.Row>
                                                                <Media.Row className="has-dot-sap">
                                                                    <span className="content">02:09 min</span>
                                                                </Media.Row>
                                                            </Media.Col>
                                                            <Media size="3xl" className="tyn-media-1x1_3 border border-2 border-dark">
                                                                <img src="/images/v-cover/2.jpg" alt="" />
                                                            </Media>
                                                        </Media.Group>
                                                        <ul className="tyn-list-inline gap gap-3 mx-auto py-4 justify-content-center  mt-auto">
                                                            <li>
                                                                <Button variant="light" className="btn-icon btn-pill">
                                                                    <PersonPlusFill />
                                                                </Button>
                                                            </li>
                                                            <li>
                                                                <Button  variant="light" className="btn-icon btn-pill" >
                                                                    <CameraVideoFill />
                                                                </Button>
                                                            </li>
                                                            <li>
                                                                <Button variant="light" className="btn-icon btn-pill">
                                                                    <MicMuteFill />
                                                                </Button>
                                                            </li>
                                                            <li>
                                                                <Button
                                                                    variant="danger" className="btn-icon btn-pill">
                                                                    <TelephoneXFill />
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Modal.Dialog>
                                        </div>
                                        <h6 className="tyn-overline mt-3 text-center">On Going Video Call</h6>
                                    </div>
                                    <div className="px-3">
                                        <div className="modal show w-auto h-auto" style={{ display: 'block', position: 'initial' }}>
                                            <Modal.Dialog centered size="sm" className="my-0" contentClassName="border-0">
                                                <div className="tyn-chat-call">
                                                    <div className="tyn-chat-cover">
                                                        <Image src="/images/cover/1.jpg" alt="" />
                                                    </div>
                                                    <Media.Group orientation="vr" align="center" className="mt-n4 pb-4">
                                                        <Media size="xl" shape="circle" className="border border-2 border-white">
                                                            <Image src="/images/avatar/1.jpg" alt="" />
                                                        </Media>
                                                        <Media.Col>
                                                            <Media.Row className="has-dot-sap">
                                                                <span className="meta">Calling ...</span>
                                                            </Media.Row>
                                                            <Media.Row>
                                                                <h6 className="name">Konstantin Frank</h6>
                                                            </Media.Row>
                                                        </Media.Col>
                                                    </Media.Group>

                                                    <ul className="tyn-list-inline gap gap-3 m-auto py-4">
                                                        <li>
                                                            <Button  variant="light"> 
                                                                <span>Switch To</span>
                                                                <CameraVideoFill />
                                                            </Button>
                                                        </li>
                                                    </ul>

                                                    <ul className="tyn-list-inline gap gap-3 mx-auto py-4">
                                                        <li>
                                                            <Button variant="light" className="btn-icon btn-pill">
                                                                <PersonPlusFill />
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button variant="light" className="btn-icon btn-pill">
                                                                <MicMuteFill />
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button
                                                                variant="danger" className="btn-icon btn-pill">
                                                                <TelephoneXFill />
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Modal.Dialog>
                                        </div>
                                        <h6 className="tyn-overline mt-3 text-center">Audio Calling</h6>
                                    </div>
                                    <div className="px-3">
                                        <div className="modal show w-auto h-auto" style={{ display: 'block', position: 'initial' }}>
                                            <Modal.Dialog centered size="sm" className="my-0" contentClassName="border-0">
                                                <div className="tyn-chat-call">
                                                    <div className="tyn-chat-cover">
                                                        <img src="/images/cover/2.jpg" alt="" />
                                                    </div>
                                                    <Media.Group orientation="vr" align="center" className="mt-n4 pb-4">
                                                        <Media size="xl" shape="circle" className="border border-2 border-white">
                                                            <img src="/images/avatar/2.jpg" alt="" />
                                                        </Media>
                                                        <Media.Col>
                                                            <Media.Row className="has-dot-sap">
                                                                <span className="meta">Audio Call From ...</span>
                                                            </Media.Row>
                                                            <Media.Row>
                                                                <h6 className="name">Romy Schulte</h6>
                                                            </Media.Row>
                                                        </Media.Col>
                                                    </Media.Group>

                                                    <ul className="tyn-list-inline gap gap-3 m-auto py-4">
                                                        <li><Button variant="light"> <span>Ask For</span><CameraVideoFill /></Button></li>
                                                    </ul>
                                                    <ul className="tyn-list-inline gap gap-3 mx-auto py-4">
                                                        <li>
                                                            <Button variant="success" className="btn-icon btn-pill">
                                                                <TelephoneFill />
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button variant="light" className="btn-icon btn-pill">
                                                                <MicMuteFill />
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button
                                                                variant="danger" className="btn-icon btn-pill">
                                                                <TelephoneXFill />
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Modal.Dialog>
                                        </div>
                                        <h6 className="tyn-overline mt-3 text-center">Incoming Call</h6>
                                    </div>
                                    <div className="px-3">
                                        <div className="modal show w-auto h-auto" style={{ display: 'block', position: 'initial' }}>
                                            <Modal.Dialog centered size="sm" className="my-0" contentClassName="border-0">
                                                <div className="tyn-chat-call">
                                                    <div className="tyn-chat-cover">
                                                        <img src="/images/cover/1.jpg" alt="" />
                                                    </div>
                                                    <Media.Group orientation="vr" align="center" className="mt-n4 pb-4">
                                                        <Media size="xl" shape="circle" className="border border-2 border-white">
                                                            <img src="/images/avatar/1.jpg" alt="" />
                                                        </Media>
                                                        <Media.Col>
                                                            <Media.Row className="has-dot-sap">
                                                                <span className="meta">Talking with ..</span>
                                                            </Media.Row>
                                                            <Media.Row>
                                                                <h6 className="name">Konstantin Frank</h6>
                                                            </Media.Row>
                                                            <Media.Row className="has-dot-sap">
                                                                <span className="content">02:09 min</span>
                                                            </Media.Row>
                                                        </Media.Col>
                                                    </Media.Group>

                                                    <ul className="tyn-list-inline gap gap-3 m-auto py-4">
                                                        <li><Button variant="light"><EnvelopeFill /><span>Send</span></Button></li>
                                                    </ul>
                                                    <ul className="tyn-list-inline gap gap-3 mx-auto py-4">
                                                        <li>
                                                            <Button variant="light" className="btn-icon btn-pill">
                                                                <PersonPlusFill />
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button variant="light" className="btn-icon btn-pill">
                                                                <MicMuteFill />
                                                            </Button>
                                                        </li>
                                                        <li>
                                                            <Button
                                                                variant="danger" className="btn-icon btn-pill">
                                                                <TelephoneXFill />
                                                            </Button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Modal.Dialog>
                                        </div>
                                        <h6 className="tyn-overline mt-3 text-center">On Going Call</h6>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="action-modal">    
                                <div className="d-flex justify-content-center pt-3  flex-xl-nowrap flex-wrap gap gap-3 overflow-hidden">
                                    <div className="px-3">
                                        <div className="modal show w-auto h-auto overflow-visible" style={{ display: 'block', position: 'initial' }}>
                                            <Modal.Dialog centered size="sm" className="my-0" contentClassName="border-0">
                                                <Modal.Body className="p-4">
                                                    <h4 className="pb-2">Search by Name</h4>
                                                    <Form.Group className="form-group">
                                                        <div className="form-control-wrap">
                                                            <div className="form-control-icon start"><Search /></div>
                                                            <Form.Control type="text" className="form-control-solid" id="search-contact" placeholder="Search contact" />
                                                        </div>
                                                    </Form.Group>

                                                    <ul className="tyn-media-list gap gap-3 pt-4">
                                                        {contactList.map((item,index)=> {
                                                            return(
                                                                <li key={index}>
                                                                    <Media.Group>
                                                                        <Media>
                                                                            <img src={item.avatar} alt={item.name} />
                                                                        </Media>
                                                                        <Media.Col>
                                                                            <Media.Row>
                                                                                <h6 className="name">{item.name}</h6>
                                                                            </Media.Row>
                                                                            <Media.Row>
                                                                                <p className="content">{item.handle}</p>
                                                                            </Media.Row>
                                                                        </Media.Col>
                                                                        <ul className="tyn-media-option-list me-n1">
                                                                            <Dropdown as="li" autoClose="outside" align="end">
                                                                                <Dropdown.Toggle variant="white" className="btn-icon btn-pill">
                                                                                    <ThreeDots />
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu>
                                                                                    <ul className="tyn-list-links">
                                                                                        <li>
                                                                                            <button onClick={(ev) => {
                                                                                                ev.preventDefault();
                                                                                                navigate(`/?id=${item.id}`);
                                                                                                setShow(false);
                                                                                            }}>
                                                                                                <ChatLeftText />
                                                                                                <span>Start Texting</span>
                                                                                            </button>
                                                                                        </li>
                                                                                        <li>
                                                                                            <button
                                                                                                onClick={()=>{
                                                                                                    setShow(false);
                                                                                                    setShowAudio(!showAudio);
                                                                                                }}
                                                                                            >
                                                                                                <Telephone />
                                                                                                <span>Audio Call</span>
                                                                                            </button>
                                                                                        </li>
                                                                                        <li>
                                                                                            <button 
                                                                                                onClick={()=>{
                                                                                                    setShow(false);
                                                                                                    setShowVideo(!showVideo);
                                                                                                }}
                                                                                            >
                                                                                                <CameraVideo />
                                                                                                <span>Video Call</span>
                                                                                            </button>
                                                                                        </li>
                                                                                    </ul>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </ul>
                                                                    </Media.Group>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </Modal.Body>
                                            </Modal.Dialog>
                                        </div>
                                    </div>
                                    <div className="px-3">
                                        <div className="modal show w-auto h-auto overflow-visible" style={{ display: 'block', position: 'initial' }}>
                                            <Modal.Dialog centered size="sm" className="my-0" contentClassName="border-0">
                                            <Modal.Body className="p-4">
                                                <h4 className="pb-2">Mute conversation</h4>
                                                <ul className="tyn-media-list gap gap-2">
                                                    <li>
                                                        <Form.Check type="radio" label="For 15 minutes" id="muteFor15min" name="muteFor" />
                                                    </li>
                                                    <li>
                                                        <Form.Check type="radio" label="For 1 Hours" id="muteFor1Hour" name="muteFor" defaultChecked />
                                                    </li>
                                                    <li>
                                                        <Form.Check type="radio" label="For 1 Days" id="muteFor1Days" name="muteFor" />
                                                    </li>
                                                    <li>
                                                        <Form.Check type="radio" label="Until I turn back On" id="muteForInfinity" name="muteFor" />
                                                    </li>
                                                </ul>
                                                <ul className="tyn-list-inline gap gap-3 pt-3">
                                                    <li>
                                                        <Button 
                                                            onClick={()=> {
                                                                setMuted(true);
                                                                setShow(false);
                                                            }} 
                                                        size="md" variant="danger">Mute</Button>
                                                    </li>
                                                    <li>
                                                        <Button
                                                            onClick={()=> {
                                                                setShow(false);
                                                            }} 
                                                        size="md" variant="light">Close</Button>
                                                    </li>
                                                </ul>
                                            </Modal.Body>
                                            </Modal.Dialog>
                                        </div>
                                    </div>
                                    <div className="px-3">
                                        <div className="modal show w-auto h-auto overflow-visible" style={{ display: 'block', position: 'initial' }}>
                                            <Modal.Dialog centered size="sm" className="my-0" contentClassName="border-0">
                                                <Modal.Body>
                                                    <div className="py-4 px-4 text-center">
                                                        <h3>Delete chat</h3>
                                                        <p className="small">Once you delete your copy of this conversation, it cannot be undone.</p>
                                                        <ul className="tyn-list-inline gap gap-3 pt-1 justify-content-center">
                                                            <li>
                                                                <Button 
                                                                onClick={()=> {
                                                                    setShow(false);
                                                                }} variant="danger">Delete</Button>
                                                            </li>
                                                            <li>
                                                                <Button 
                                                                onClick={()=> {
                                                                    setShow(false);
                                                                }} variant="light">No</Button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Modal.Body>
                                            </Modal.Dialog>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
              </Section.Content>
            </Container>
        </Section>
      </div>
    </Layout>
  )
}

export default UiUsecaseModals