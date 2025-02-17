import React from 'react';
import Layout from '../../layout/landing'
import { MoonFill } from 'react-bootstrap-icons';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Media } from '../../components';
import { useLayout, useLayoutUpdate } from '../../layout/provider/Theme';
import { Section } from '../../layout/global';

const data = [
    {
        title:"Chat Page",
        link:"/",
        image:"/images/landing/screens/chat-page.jpg",
    },
    {
        title:"Chatbot Page",
        link:"/chatbot",
        image:"/images/landing/screens/chat-bot.jpg",
    },
    {
        title:"Chatbot S2 Page",
        link:"/chatbot-s2",
        image:"/images/landing/screens/chat-bot-2.jpg",
    },
    {
        title:"Chatbot Welcome",
        link:"/chatbot-welcome",
        image:"/images/landing/screens/welcome-page.jpg",
    },
    {
        title:"Contact Page",
        link:"/contacts",
        image:"/images/landing/screens/contact-page.jpg",
    },
    {
        title:"Stories Page",
        link:"/stories",
        image:"/images/landing/screens/stories-page.jpg",
    },
    {
        title:"Profile Page",
        link:"/profile?tab=profile-edit",
        image:"/images/landing/screens/profile-edit.jpg",
    },
    {
        title:"Pricing Page",
        link:"/pricing",
        image:"/images/landing/screens/pricing-page.jpg",
    },
    {
        title:"Faq Page",
        link:"/faq",
        image:"/images/landing/screens/faq-page.jpg",
    },
    {
        title:"Chat Replies",
        link:"/ui-chat-replies",
        image:"/images/landing/screens/chat-replies.jpg",
    },
    {
        title:"Usecase Modals",
        link:"/ui-usecase-modals",
        image:"/images/landing/screens/usecase-modal.jpg",
    },
    {
        title:"Elements Preview",
        link:"/ui-elements",
        image:"/images/landing/screens/misc-elements.jpg",
    },
    {
        title:"Login Page",
        link:"/login",
        image:"/images/landing/screens/login-page.jpg",
    },
    {
        title:"Register Page",
        link:"/register",
        image:"/images/landing/screens/register-page.jpg",
    },
    {
        title:"Reset Page",
        link:"/forgot",
        image:"/images/landing/screens/reset-page.jpg",
    },
]

function Landing() {

  const layout = useLayout();
  const layoutUpdate = useLayoutUpdate();
  return (
    <Layout title="Intro Page" content="tyn-content-page bg-white" footer={true}>

      <div className="tyn-hero">
          <Container className="py-lg-3">
              <Row className="gy-5 gx-gs justify-content-center justify-content-lg-between align-items-center flex-lg-row-reverse">
                  <Col xl="5" lg="5" md="7">
                      <div className="ms-xl-n4">
                          <img className="w-100" src="/images/landing/cover.png" alt="" />
                      </div>
                  </Col>
                  <Col xl="6" lg="7" md="9">
                      <div className="pe-lg-4 pe-xl-5 text-center text-lg-start">
                          <div className="mb-2 mb-lg-4">
                              <div className="d-flex justify-content-center justify-content-lg-start gap gap-2 mb-2">
                                  <MoonFill />
                                  <h6>Darkmode</h6>
                              </div>
                              <ul className="d-flex justify-content-center justify-content-lg-start align-items-center gap gap-3">
                                  <li className="inline-flex">
                                    <div className="form-check">
                                        <input className="form-check-input" checked={layout.theme === 'dark'} onChange={() => layoutUpdate.theme('dark')} type="radio" name="themeMode" id="dark"/>
                                        <label className="form-check-label small" htmlFor="dark">
                                            On
                                        </label>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <div className="form-check">
                                        <input className="form-check-input" checked={layout.theme === 'light'} onChange={() => layoutUpdate.theme('light')} type="radio" name="themeMode" id="light"/>
                                        <label className="form-check-label small" htmlFor="light">
                                            Off
                                        </label>
                                    </div>
                                </li>
                              </ul>
                          </div>
                          <h1 className="display-6 mb-2 d-md-none">
                            <span className="text-primary">Chat Application</span> <span className="text-dark">React Template</span>
                          </h1>
                          <h1 className="display-4 mb-2 d-none d-md-block">
                            <span className="text-primary">Chat Application</span> <br /> <span className="text-dark">React Template</span>
                          </h1>
                          <p>Clean and modern chat uikit template based on Bootstrap 5. Its build with well optimized mobile first responsive approach. ConnectMe built with SASS, CSS3 and React JS.</p>
                          <ul className="tyn-list-inline gap gap-4 mt-4 align-items-center justify-content-center justify-content-lg-start">
                              <li>
                                <Link to="/" target="_blank" className="btn btn-primary gap-0">
                                  <span className="d-sm-none">Preview Demo</span><span className="d-none d-sm-inline"> Preview Application UI</span>
                                </Link>
                              </li>
                              <li>
                                  <ul className="tyn-list-inline gap gap-2">
                                      <li>
                                          <Media size="xs" shape="circle" bordered>
                                              <img src="/images/landing/icon/bootstrap.png" alt="" />
                                          </Media>
                                      </li>
                                      <li>
                                          <Media size="xs" shape="circle" bordered>
                                              <img src="/images/landing/icon/sass.png" alt="" />
                                          </Media>
                                      </li>
                                      <li>
                                          <Media size="xs" shape="circle" bordered>
                                              <img src="/images/landing/icon/javascript.png" alt="" />
                                          </Media>
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </Col>
              </Row>
          </Container>
      </div>

      <div className="tyn-main bg-opacity-50">
        <Section gap="lg" id="demo-pages">
            <Container>
                <Section.Head>
                    <Row className="justify-content-center text-center">
                        <Col xl="5" lg="6" md="8" sm="11">
                            <h2 className="h1">Checkout <span className="text-primary">Pages</span></h2>
                            <p>Lets take a look at our carefully crafted pages needed for your beautifull chat application. </p>
                        </Col>
                    </Row>
                </Section.Head>
                <Section.Content>
                    <Row className="gy-4 gy-lg-5 justify-content-center">
                        {data.map((item,index)=> {
                            return(
                                <Col key={index} xl="4" lg="4" sm="6" xs="11">
                                    <Link to={item.link} target="_blank" className="d-block text-center position-relative">
                                        <div className="position-relative">
                                            {item.badge && <div className="badge bg-primary position-absolute end-0 bottom-0 m-3 py-2 px-2 fs-8 rounded-pill">{item.badge}</div>}
                                            <img className="rounded-3 border border-2 border-primary border-opacity-25 w-100" src={item.image} alt="" />
                                        </div>
                                        <h3 className="mt-3">{item.title}</h3>
                                    </Link>
                                </Col>
                            )
                        })}
                    </Row>
                </Section.Content>
            </Container>
        </Section>
        <Section className="bg-darker position-relative">
            <div className="position-absolute text-center top-0 bottom-0 start-0 end-0 overflow-hidden">
                <img className="position-absolute bottom-0 start-50 translate-middle-x" src="/images/landing/cta-bg.png" alt="" />
            </div>
            <Container className="py-sm-2 position-relative">
                <Section.Content>
                    <Row className="justify-content-center">
                        <Col xxl="4" lg="5" md="7" sm="9">
                            <div className="text-center text-light">
                                <h2 className="text-white">Make your idea a reality today</h2>
                                <p>Purchase ConnectMe to make your chat application beautiful.</p>
                                <Button variant="primary" as="a" href="https://themeforest.net/item/connectme-chat-application-react-template/51520402" target="_blank">Purchase ConnectMe</Button>
                                <p className="text-success small mt-3 mb-0">Free Lifetime Update</p>
                            </div>
                        </Col>
                    </Row>
                </Section.Content>
            </Container>
        </Section>
    </div>

    </Layout>
  )
}

export default Landing