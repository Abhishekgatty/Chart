import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'
import { Section } from '../../layout/global'
import { Link } from 'react-router-dom';
const FaqSection = () => {
  return (
    <>
        <Section.Head center className="pb-0">
            <h2 className="h3">Frequently Asked Questions</h2>
            <p>Here is some answer for few quetion.</p>
        </Section.Head>
        <Section.Content>
            <Row className="justify-content-center">
                <Col xl="9">
                    <Accordion defaultActiveKey="0" className="d-flex flex-column gap-2">
                        <Accordion.Item eventKey="0" className="rounded">
                            <Accordion.Button className="rounded shadow-none">
                            <h5>What is this chatbot for?</h5>
                            </Accordion.Button>
                            <Accordion.Body className="tyn-text-block pt-0">
                            <p>This chatbot is designed to provide customer service support. You can use it to get answers to common questions, find information about our products or services, and get help with any issues you may be experiencing.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="rounded">
                            <Accordion.Button className="rounded shadow-none">
                            <h5>How do I use the chatbot?</h5>
                            </Accordion.Button>
                            <Accordion.Body className="tyn-text-block pt-0">
                            <p>To use the chatbot, simply type your question or request into the chat window. The chatbot will then provide a response or guide you through the process of finding the information you need.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="rounded">
                            <Accordion.Button className="rounded shadow-none">
                            <h5>What kind of questions can I ask the chatbot?</h5>
                            </Accordion.Button>
                            <Accordion.Body className="tyn-text-block pt-0">
                            <p>You can ask the chatbot any question related to our products or services. Some common questions include.</p>
                            <ol>
                                <li>How do I place an order?</li>
                                <li>What is your return policy?</li>
                                <li>How do I track my shipment?</li>
                                <li>Can I change my order after it has been placed?</li>
                            </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="rounded">
                            <Accordion.Button className="rounded shadow-none">
                            <h5>What if the chatbot can’t answer my question?</h5>
                            </Accordion.Button>
                            <Accordion.Body className="tyn-text-block pt-0">
                            <p>If the chatbot is unable to answer your question or provide the information you need, it will direct you to other resources such as our customer service team or website.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
            <div className="mt-4 text-center">
                <Link to="/faq" className="link link-primary">
                    <span>Still have question ?</span> 
                </Link>
            </div>
        </Section.Content>
    </>
  )
}

export default FaqSection