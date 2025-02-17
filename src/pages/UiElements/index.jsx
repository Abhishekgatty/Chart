import React from 'react';
import Layout from '../../layout/main'
import {Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import {Section} from "../../layout/global"
import { Link } from 'react-router-dom';
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Media } from '../../components'
import { Check2Circle, CheckCircleFill, Gear, Person, PlayFill, Unlock, XCircle, Power } from 'react-bootstrap-icons';

const videos = [
    {
        poster: "images/gallery/video/hr-1.jpg",
        src:"https://www.youtube.com/embed/ag0qTaAKqT8"
    },
    {
        poster: "images/gallery/video/hr-2.jpg",
        src:"https://www.youtube.com/embed/ag0qTaAKqT8"
    },
    {
        poster: "images/gallery/video/hr-3.jpg",
        src:"https://www.youtube.com/embed/ag0qTaAKqT8"
    },
    {
        poster: "images/gallery/video/hr-4.jpg",
        src:"https://www.youtube.com/embed/ag0qTaAKqT8"
    },
    {
        poster: "images/gallery/video/vr-5.jpg",
        src:"https://www.youtube.com/embed/ag0qTaAKqT8"
    },
    {
        poster: "images/gallery/video/hr-6.jpg",
        src:"https://www.youtube.com/embed/ag0qTaAKqT8"
    },
]

const images = [
    {
        thumb:"images/gallery/chat/thumb-1.jpg",
        main:"images/gallery/chat/1.jpg",
        height:"1620",
        width:"1080"
    },
    {
        thumb:"images/gallery/chat/thumb-2.jpg",
        main:"images/gallery/chat/2.jpg",
        height:"1080",
        width:"1620"
    },
    {
        thumb:"images/gallery/chat/thumb-3.jpg",
        main:"images/gallery/chat/3.jpg",
        height:"1620",
        width:"1080"
    },
    {
        thumb:"images/gallery/chat/thumb-4.jpg",
        main:"images/gallery/chat/4.jpg",
        height:"1620",
        width:"1080"
    },
    {
        thumb:"images/gallery/chat/thumb-5.jpg",
        main:"images/gallery/chat/5.jpg",
        height:"1620",
        width:"1080"
    },
    {
        thumb:"images/gallery/chat/thumb-6.jpg",
        main:"images/gallery/chat/6.jpg",
        height:"1620",
        width:"1080"
    },
]

function UiElements() {
  return (
    <Layout title="Misc Elements" content="tyn-content-page" footer={true}>
        <div className="tyn-hero">
            <div className="container">
                <Row className="row justify-content-center text-center">
                    <Col md="8" lg="5" xl="4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Elements</li>
                            </ol>
                        </nav>
                        <h1 className="display-6">Designed Elements</h1>
                        <p>Some collection of pre designed Elements for your project. lot more coming soon.</p>
                    </Col>
                </Row>
            </div>
        </div>
      <div className="tyn-main">
        <Section>
            <Container>
                <Row className="g-gs">
                    <Col md="6" xl="4">
                        <h6 className="tyn-overline">Media Group / Media with content</h6>
                        <Card>
                            <Card.Body>
                                <div className="tyn-media-list gap gap-3">
                                    <Media.Group>
                                        <Media size="xl">
                                            <img src="/images/avatar/1.jpg" alt="" />
                                        </Media>
                                        <Media.Col>
                                            <Media.Row>
                                                <h6 className="name">Jasmine Thompson</h6>
                                                <div className="indicator varified"><CheckCircleFill /></div>
                                                <span className="typing">typing ...</span>
                                            </Media.Row>
                                            <Media.Row className="has-dot-sap">
                                                <p className="content">Had they visited Rome before</p>
                                                <span className="meta">45 min</span>
                                            </Media.Row>
                                        </Media.Col>
                                    </Media.Group>
                                    <Media.Group>
                                        <Media size="xl">
                                            <img src="/images/gallery/chat/thumb-7.jpg" alt="" />
                                        </Media>
                                        <Media.Col>
                                            <h6 className="name">Digital Marketing Guide</h6>
                                            <div className="anchor">https://www.envato.com/blog/digital-marketing-guide/</div>
                                        </Media.Col>
                                    </Media.Group>
                                    <Media.Group className="align-items-start">
                                        <Media size="xl" shape="circle">
                                            <img src="/images/avatar/3.jpg" alt="" />
                                        </Media>
                                        <Media.Col>
                                            <Media.Row>
                                                <span className="message"><strong>Thomas Poulain</strong> Added You</span>
                                            </Media.Row>
                                            <Media.Row className="has-dot-sap">
                                                <span className="meta">1 weeks ago</span>
                                            </Media.Row>
                                            <Media.Row>
                                                <ul className="tyn-btn-inline gap gap-3 pt-1">
                                                    <li><Button size="md" variant="primary"><Check2Circle /><span>Accept</span></Button></li>
                                                    <li><Button size="md" variant="light"><XCircle /><span>Reject</span></Button></li>
                                                </ul>
                                            </Media.Row>
                                        </Media.Col>
                                    </Media.Group>
                                </div>
                            </Card.Body>
                        </Card>
                        <h6 className="tyn-overline mt-4">Profile Dropdown</h6>
                        <Dropdown.Menu show="true" className="position-relative">
                            <div className="dropdown-gap">
                                <Media.Group>
                                    <Media size="lg">
                                        <img src="/images/avatar/3.jpg" alt="" />
                                    </Media>
                                    <Media.Col>
                                        <Media.Row>
                                            <h6 className="name">Marie George</h6>
                                            <div className="indicator varified"><CheckCircleFill /></div>
                                        </Media.Row>
                                        <Media.Row className="has-dot-sap">
                                            <p className="content">Liked that disco music</p>
                                        </Media.Row>
                                    </Media.Col>
                                </Media.Group>
                            </div>
                            <ul className="tyn-list-links">
                                <li>
                                    <Link to="/profile?tab=profile-intro">
                                        <Person />
                                        <span>Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile?tab=profile-edit">
                                        <Gear />
                                        <span>Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile?tab=profile-security">
                                        <Unlock />
                                        <span>Change Password</span>
                                    </Link>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li>
                                    <Link to="/login">
                                        <Power />
                                        <span>Log Out</span>
                                    </Link>
                                </li>
                            </ul>
                        </Dropdown.Menu>
                    </Col>
                    <Col md="6" xl="4">
                        <h6 className="tyn-overline">Image Gallery</h6>
                        <Card>
                            <Card.Body>
                                <Row className="g-3">
                                    <Gallery>
                                        {images.map((item,index) => 
                                            <Col xs="4" key={index}>
                                                <Item
                                                    original={item.main}
                                                    thumbnail={item.main}
                                                    width={item.width}
                                                    height={item.height}
                                                    cropped
                                                >
                                                    {({ ref, open }) => (
                                                    <a href="#" 
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            open(e)
                                                        }} ref={ref} className="tyn-thumb">
                                                        <img src={item.thumb} className="tyn-image" alt="" /> 
                                                    </a>
                                                    )}
                                                </Item>
                                            </Col>
                                        )}
                                    </Gallery>
                                </Row>
                            </Card.Body>
                        </Card>
                        <h6 className="tyn-overline mt-4">Contact Card</h6>
                        <Row className="gx-3">
                            <Col xs="6">
                                <div className="bg-white border rounded-3 p-4 d-flex flex-column align-items-center text-center">
                                    <Media size="2xl" shape="circle" className="mb-3">
                                        <img src="/images/avatar/5.jpg" alt="" />
                                    </Media>
                                    <span className="tyn-subtext mb-1">@enne_nolan</span>
                                    <h6>Nolan Etienne</h6>
                                </div>
                            </Col>
                            <Col xs="6">
                                <div className="bg-white border rounded-3 p-4 d-flex flex-column align-items-center text-center">
                                    <Media size="2xl" shape="circle" className="mb-3">
                                        <img src="/images/avatar/3.jpg" alt="" />
                                    </Media>
                                    <span className="tyn-subtext mb-1">@konstatin_nk</span>
                                    <h6>Konstantin Frank</h6>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6" xl="4">
                        <h6 className="tyn-overline">Video Gallery</h6>
                        <Card>
                            <Card.Body>
                                <Row className="g-3">
                                    <Gallery>
                                        {videos.map((item,index) => 
                                            <Col xs="6" key={index}>
                                                <Item content={
                                                    <div className="pswp__content-video">
                                                        <div className="ratio ratio-16x9">
                                                            <iframe src={item.src} title="Iframe video" ></iframe>
                                                        </div>
                                                    </div>
                                                }>
                                                    {({ ref, open }) => (
                                                    <a href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        open(e)
                                                    }}
                                                    ref={ref} className="tyn-video">
                                                        <img src={item.poster} className="tyn-image" alt="" /> 
                                                        <div className="tyn-video-icon">
                                                            <PlayFill />
                                                        </div>
                                                    </a>
                                                    )}
                                                </Item>
                                            </Col>
                                        )}
                                    </Gallery>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Section>
      </div>
    </Layout>
  )
}

export default UiElements