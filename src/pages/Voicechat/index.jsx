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
    { id:"uid04", avatar: "/images/avatar/4.jpg", name: 'Guest User', handle: '@marie_george' },
    { id:"uid05", avatar: "/images/avatar/5.jpg", name: 'Phillip Burke', handle: '@phillip_burke' }
]

function Voicechat() {
  return (
    <Layout title="Usecase Modals" content="tyn-content-page" footer={true}>
        <div className="tyn-hero">
            <div className="container">
                <Row className="row justify-content-center text-center">
                    <Col md="7" lg="5" xl="4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Voice Chat</li>
                            </ol>
                        </nav>
                        <h1 className="display-6">Coming Soon</h1>
                        
                    </Col>
                </Row>
            </div>
        </div>
      
    </Layout>
  )
}

export default Voicechat