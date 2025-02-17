import React, { Fragment } from 'react'
import { Button, Col, Nav, Row, Tab } from 'react-bootstrap'
import { ExclamationTriangleFill, PencilSquare, PersonXFill } from 'react-bootstrap-icons'
import { Media } from '../../components'

const ChatOptions = () => {
  return (
    <Tab.Container as={Fragment} defaultActiveKey="chat-options-customize">
        <div className="tyn-aside-row py-0">
            <Nav as="ul" variant="tabs nav-tabs-line">
                <Nav.Item as="li">
                    <Nav.Link as="button" eventKey="chat-options-customize">
                        Customize
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as="button" eventKey="chat-options-manage">
                        Manage
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
        <div className="tyn-aside-row">
            <Tab.Content>
                <Tab.Pane eventKey="chat-options-customize">
                    <ul className="d-flex flex-column gap gap-4">
                        <li>
                            <h6 className="tyn-title-overline">Change Theme</h6>
                            <ul className="tyn-chat-theme-list">
                                <li>
                                    <button className="tyn-chat-theme-btn" data-theme="blue"></button>
                                </li>
                                <li>
                                    <button className="tyn-chat-theme-btn" data-theme="indigo"></button>
                                </li>
                                <li>
                                    <button className="tyn-chat-theme-btn" data-theme="green"></button>
                                </li>
                                <li>
                                    <button className="tyn-chat-theme-btn" data-theme="red"></button>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6 className="tyn-title-overline">Change Background</h6>
                            <Row className="g-3">
                                <Col xs="4">
                                    <button className="tyn-thumb">
                                        <img src="images/gallery/chat/thumb-1.jpg" className="tyn-image" alt="" /> 
                                    </button>
                                </Col>
                                <Col xs="4">
                                    <button className="tyn-thumb">
                                        <img src="images/gallery/chat/thumb-2.jpg" className="tyn-image" alt="" /> 
                                    </button>
                                </Col>
                                <Col xs="4">
                                    <button className="tyn-thumb">
                                        <img src="images/gallery/chat/thumb-3.jpg" className="tyn-image" alt="" /> 
                                    </button>
                                </Col>
                                <Col xs="4">
                                    <button className="tyn-thumb">
                                        <img src="images/gallery/chat/thumb-4.jpg" className="tyn-image" alt="" /> 
                                    </button>
                                </Col>
                                <Col xs="4">
                                    <button className="tyn-thumb">
                                        <img src="images/gallery/chat/thumb-5.jpg" className="tyn-image" alt="" /> 
                                    </button>
                                </Col>
                                <Col xs="4">
                                    <button className="tyn-thumb">
                                        <img src="images/gallery/chat/thumb-6.jpg" className="tyn-image" alt="" /> 
                                    </button>
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <h6 className="tyn-title-overline">Edit Nicknames</h6>
                            <Media.List className="gap gap-3">
                                <Media.List.Item>
                                    <Media.Group>
                                        <Media size="lg">
                                            <img src="/images/avatar/1.jpg" alt="" /> 
                                        </Media>
                                        <Media.Col>
                                            <Media.Row>
                                                <h6 className="name">Jasmine Thompson</h6>
                                            </Media.Row>
                                            <Media.Row className="has-dot-sap">
                                                <span className="meta">og : Jasmine</span>
                                            </Media.Row>
                                        </Media.Col>
                                        <Media.Option>
                                            <ul className="tyn-media-option-list">
                                                <li>
                                                    <Button variant="light" size="md" className="btn-icon btn-pill">
                                                        <PencilSquare />
                                                    </Button>
                                                </li>
                                            </ul>
                                        </Media.Option>
                                    </Media.Group>
                                </Media.List.Item>
                                <Media.List.Item>
                                    <Media.Group>
                                        <Media size="lg">
                                            <img src="/images/avatar/3.jpg" alt="" /> 
                                        </Media>
                                        <Media.Col>
                                            <Media.Row>
                                                <h6 className="name">Konstantin Frank</h6>
                                            </Media.Row>
                                            <Media.Row className="has-dot-sap">
                                                <span className="meta">og : konstatin nk</span>
                                            </Media.Row>
                                        </Media.Col>
                                        <Media.Option>
                                            <ul className="tyn-media-option-list">
                                                <li>
                                                    <Button variant="light" size="md" className="btn-icon btn-pill">
                                                        <PencilSquare />
                                                    </Button>
                                                </li>
                                            </ul>
                                        </Media.Option>
                                    </Media.Group>
                                </Media.List.Item>
                            </Media.List>
                        </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="chat-options-manage">
                    <Media.List className="tyn-media-list gap gap-3">
                        <Media.List.Item>
                            <a href="#" className="tyn-file">
                                <Media.Group>
                                    <Media className="text-bg-light">
                                        <PersonXFill />
                                    </Media>
                                    <Media.Col>
                                        <h6 className="name">Block</h6>
                                        <div className="meta">Frank will no longer be in your contact.</div>
                                    </Media.Col>
                                </Media.Group>
                            </a>
                        </Media.List.Item>
                        <Media.List.Item>
                            <a href="#" className="tyn-file">
                                <Media.Group>
                                    <Media className="text-bg-light">
                                        <ExclamationTriangleFill />
                                    </Media>
                                    <Media.Col>
                                        <h6 className="name">Report</h6>
                                        <div className="meta">Give feedback on the conversation</div>
                                    </Media.Col>
                                </Media.Group>
                            </a>
                        </Media.List.Item>
                    </Media.List>
                </Tab.Pane>
            </Tab.Content>
        </div>
    </Tab.Container>
  )
}

export default ChatOptions