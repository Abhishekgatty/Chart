import React from 'react';
import Layout from '../../layout/main'
import {Col, Container, Row } from 'react-bootstrap';
import {Section} from "../../layout/global"
import { Link } from 'react-router-dom';
import Reply from "../../components/partials/Reply"

function UiChatReplies() {
  return (
    <Layout title="Chat Replies" content="tyn-content-page" footer={true}>
        <div className="tyn-hero">
            <div className="container">
                <Row className="row justify-content-center text-center">
                    <Col md="6" lg="4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Chat Replies</li>
                            </ol>
                        </nav>
                        <h1 className="display-6">Chat Replies</h1>
                        <p>Careful crafted designs for different kind of chat messages</p>
                    </Col>
                </Row>
            </div>
        </div>
      <div className="tyn-main tyn-reply tyn-reply-preview">
        <Section>
            <Container fluid="xxl">
                <Section.Content>
                    <Row className="g-gs">
                        <Col sm="6" lg="4" xl="3">
                            <h6 className="tyn-overline">Text Long And Short</h6>
                            <Reply.Item>
                                <Reply.Group>
                                    <Reply.Bubble>
                                        <Reply.Text>
                                            I hope these article helps.
                                        </Reply.Text>
                                    </Reply.Bubble>
                                    <Reply.Bubble>
                                        <Reply.Text>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ducimus nesciunt laborum debitis voluptatum porro illo soluta vel.
                                        </Reply.Text>
                                    </Reply.Bubble>
                                </Reply.Group>
                            </Reply.Item>
                            <h6 className="tyn-overline mt-4">OutGoing text</h6>
                            <Reply.Item outgoing>
                                <Reply.Group>
                                    <Reply.Bubble>
                                        <Reply.Text>
                                            I hope these article helped you.
                                        </Reply.Text>
                                    </Reply.Bubble>
                                    <Reply.Bubble>
                                        <Reply.Text>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ducimus nesciunt laborum debitis voluptatum porro illo soluta vel.
                                        </Reply.Text>
                                    </Reply.Bubble>
                                </Reply.Group>
                            </Reply.Item>
                        </Col>
                        <Col sm="6" lg="4" xl="3">
                            <h6 className="tyn-overline">Plain Links</h6>
                            <Reply.Item>
                                <Reply.Group>
                                    <Reply.Bubble>
                                        <Reply.Link content={{link:"https://www.envato.com/atomic-power-plant-engine/"}} />
                                    </Reply.Bubble>
                                </Reply.Group>
                            </Reply.Item>
                            <h6 className="tyn-overline pt-4">Links with Thumbnail</h6>
                            <Reply.Item>
                                <Reply.Group>
                                    <Reply.Bubble>
                                        <Reply.Link 
                                            className="w-100"
                                            content={{
                                                link:"https://www.envato.com/atomic-power-plant-engine/",
                                                thumb:"/images/avatar/4.jpg",
                                                title:"Digital Marketing Guide line  for dummies"
                                            }} 
                                        />
                                    </Reply.Bubble>
                                </Reply.Group>
                            </Reply.Item>
                        </Col>
                        <Col sm="6" lg="4" xl="3">
                            <h6 className="tyn-overline">Video Attachment</h6>
                            <Reply.Item>
                                <Reply.Group>
                                    <Reply.Bubble className="w-100">
                                        <Reply.Media 
                                            list= {[
                                                {
                                                    type:'video',
                                                    src: 'https://www.youtube.com/embed/ag0qTaAKqT8',
                                                    poster: '/images/gallery/video/hr-6.jpg'
                                                },
                                            ]}
                                        />
                                    </Reply.Bubble>
                                </Reply.Group>
                            </Reply.Item>
                            <h6 className="tyn-overline mt-4">File Attachment</h6>
                            <Reply.Item>
                                <Reply.Group>
                                    <Reply.Bubble className="w-100">
                                        <Reply.File 
                                            className="w-100"
                                            content= {[
                                                {
                                                    ext:'docx',
                                                    size: '24.65 MB',
                                                    name:'Konstantin_cv',
                                                }
                                            ]}
                                        />
                                    </Reply.Bubble>
                                </Reply.Group>
                            </Reply.Item>
                            <h6 className="tyn-overline mt-4">Call</h6>
                            <Reply.Item>
                                <Reply.Group>
                                    <Reply.Bubble className="w-100">
                                        <Reply.Call 
                                            className="w-100"
                                            content= {{
                                                type: 'video',
                                                result: 'success'
                                            }}
                                            time= '3:29 PM'
                                        />
                                    </Reply.Bubble>
                                </Reply.Group>
                            </Reply.Item>
                            <h6 className="tyn-overline mt-4">Missed Call</h6>
                            <Reply.Item>
                                <Reply.Group>
                                    <Reply.Bubble className="w-100">
                                        <Reply.Call 
                                            className="w-100"
                                            content= {{
                                                type: 'audio',
                                                result: 'missed'
                                            }}
                                            time= '3:29 PM'
                                        />
                                    </Reply.Bubble>
                                </Reply.Group>
                            </Reply.Item>
                        </Col>
                        <Col sm="6" lg="4" xl="3">
                            <h6 className="tyn-overline">Single Image Attachment</h6>
                            <Reply.Item>
                                <Reply.Group>
                                    <Reply.Bubble className="w-100">
                                        <Reply.Media 
                                            list= {[
                                                {
                                                    type:'image',
                                                    src: '/images/gallery/chat/5.jpg',
                                                    thumb: '/images/gallery/chat/thumb-5.jpg',
                                                    height:"1620",
                                                    width:"1080"
                                                },
                                            ]}
                                        />
                                    </Reply.Bubble>
                                </Reply.Group>
                            </Reply.Item>
                            <h6 className="tyn-overline mt-4">2 Image Attachment</h6>
                            <Reply.Item>
                                <Reply.Group>
                                    <Reply.Bubble className="w-100">
                                        <Reply.Media 
                                            list= {[
                                                {
                                                    type:'image',
                                                    src: '/images/gallery/chat/2.jpg',
                                                    thumb: '/images/gallery/chat/thumb-2.jpg',
                                                    height:"1080",
                                                    width:"1620"
                                                },
                                                {
                                                    type:'image',
                                                    src: '/images/gallery/chat/5.jpg',
                                                    thumb: '/images/gallery/chat/thumb-5.jpg',
                                                    height:"1620",
                                                    width:"1080"
                                                },
                                            ]}
                                        />
                                    </Reply.Bubble>
                                </Reply.Group>
                            </Reply.Item>
                            <h6 className="tyn-overline mt-4">Multiple Image Attachment</h6>
                            <Reply.Item>
                                <Reply.Group>
                                    <Reply.Bubble className="w-100">
                                        <Reply.Media 
                                            list= {[
                                                {
                                                    type:'image',
                                                    src: '/images/gallery/chat/1.jpg',
                                                    thumb: '/images/gallery/chat/thumb-1.jpg',
                                                    height:"1620",
                                                    width:"1080"
                                                },
                                                {
                                                    type:'image',
                                                    src: '/images/gallery/chat/2.jpg',
                                                    thumb: '/images/gallery/chat/thumb-2.jpg',
                                                    height:"1080",
                                                    width:"1620"
                                                },
                                                {
                                                    type:'image',
                                                    src: '/images/gallery/chat/3.jpg',
                                                    thumb: '/images/gallery/chat/thumb-3.jpg',
                                                    height:"1620",
                                                    width:"1080"
                                                },
                                                {
                                                    type:'image',
                                                    src: '/images/gallery/chat/4.jpg',
                                                    thumb: '/images/gallery/chat/thumb-4.jpg',
                                                    height:"1620",
                                                    width:"1080"
                                                },
                                                {
                                                    type:'image',
                                                    src: '/images/gallery/chat/5.jpg',
                                                    thumb: '/images/gallery/chat/thumb-5.jpg',
                                                    height:"1620",
                                                    width:"1080"
                                                },
                                            ]}
                                        />
                                    </Reply.Bubble>
                                </Reply.Group>
                            </Reply.Item>
                        </Col>
                    </Row>
                </Section.Content>
            </Container>
        </Section>
      </div>
    </Layout>
  )
}

export default UiChatReplies