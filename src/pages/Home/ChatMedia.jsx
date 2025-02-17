import React, { Fragment } from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { FiletypeAi, FiletypeCsv, FiletypeDocx, FiletypeMdx, FiletypePdf, PlayFill } from 'react-bootstrap-icons'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Media } from '../../components'

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

const ChatMedia = () => {
  return (
    <Tab.Container as={Fragment} defaultActiveKey="chat-media-images">
        <div className="tyn-aside-row py-0">
            <Nav as="ul" variant="tabs nav-tabs-line">
                <Nav.Item as="li">
                    <Nav.Link as="button" eventKey="chat-media-images">
                        Images
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as="button" eventKey="chat-media-videos">
                        Videos
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as="button" eventKey="chat-media-files">
                        Files
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as="button" eventKey="chat-media-links">
                        Links
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
        <div className="tyn-aside-row">
            <Tab.Content>
                <Tab.Pane eventKey="chat-media-images">
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
                </Tab.Pane>
                <Tab.Pane eventKey="chat-media-videos">
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
                </Tab.Pane>
                <Tab.Pane eventKey="chat-media-files">
                    <Media.List className="gap gap-3">
                        <Media.List.Item>
                            <a href="#" className="tyn-file">
                                <Media.Group>
                                    <Media size="lg" className="text-bg-light">
                                        <FiletypeDocx />
                                    </Media>
                                    <Media.Col>
                                        <h6 className="name">Konstantin_cv.docx</h6>
                                        <div className="meta">24.65 MB</div>
                                    </Media.Col>
                                </Media.Group>
                            </a>
                        </Media.List.Item>
                        <Media.List.Item>
                            <a href="#" className="tyn-file">
                                <Media.Group>
                                    <Media size="lg" className="text-bg-light">
                                        <FiletypeAi />
                                    </Media>
                                    <Media.Col>
                                        <h6 className="name">themeyn_logo.ai</h6>
                                        <div className="meta">2.08 MB</div>
                                    </Media.Col>
                                </Media.Group>
                            </a>
                        </Media.List.Item>
                        <Media.List.Item>
                            <a href="#" className="tyn-file">
                                <Media.Group>
                                    <Media size="lg" className="text-bg-light">
                                        <FiletypePdf />
                                    </Media>
                                    <Media.Col>
                                        <h6 className="name">realReact.pdf</h6>
                                        <div className="meta">19.54 MB</div>
                                    </Media.Col>
                                </Media.Group>
                            </a>
                        </Media.List.Item>
                        <Media.List.Item>
                            <a href="#" className="tyn-file">
                                <Media.Group>
                                    <Media size="lg" className="text-bg-light">
                                        <FiletypeCsv />
                                    </Media>
                                    <Media.Col>
                                        <h6 className="name">my_contacts.csv</h6>
                                        <div className="meta">0.97 MB</div>
                                    </Media.Col>
                                </Media.Group>
                            </a>
                        </Media.List.Item>
                        <Media.List.Item>
                            <a href="#" className="tyn-file">
                                <Media.Group>
                                    <Media size="lg" className="text-bg-light">
                                        <FiletypeMdx />
                                    </Media>
                                    <Media.Col>
                                        <h6 className="name">blog_posts.mdx</h6>
                                        <div className="meta">6.19 MB</div>
                                    </Media.Col>
                                </Media.Group>
                            </a>
                        </Media.List.Item>
                    </Media.List>
                </Tab.Pane>
                <Tab.Pane eventKey="chat-media-links">
                    <Media.List className="gap gap-3">
                        <Media.List.Item>
                            <a href="#" className="tyn-links">
                                <Media.Group>
                                    <Media size="xl">
                                        <img src="images/gallery/chat/thumb-7.jpg" alt="" /> 
                                    </Media>
                                    <Media.Col>
                                        <h6 className="name">Digital Marketing Guide</h6>
                                        <div className="anchor">https://www.envato.com/blog/digital-marketing-guide/</div>
                                    </Media.Col>
                                </Media.Group>
                            </a>
                        </Media.List.Item>
                        <Media.List.Item>
                            <a href="#" className="tyn-links">
                                <Media.Group>
                                    <Media size="xl">
                                        <img src="images/gallery/chat/thumb-8.jpg" alt="" /> 
                                    </Media>
                                    <Media.Col>
                                        <h6 className="name">Atomic power plant engine</h6>
                                        <div className="anchor">https://www.envato.com/atomic-power-plant-engine/</div>
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

export default ChatMedia