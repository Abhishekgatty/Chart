import React from 'react';
import Layout from '../../layout/main'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Section } from '../../layout/global';
import { LogoLink } from '../../components';
import { SendFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const data = [
    {
        title:"Try it",
        cards: [
            {text: "Can you provide a customized experience"},
            {text: "Can i become a super hero, by mosquito bite."},
        ]
    },
    {
        title:"What can do?",
        cards: [
            {text:"Simulate conversation with human users."},
            {text:"Can provide 24/7 best customer support in the world."},
        ]
    },
    {
        title:"What can't do?",
        cards: [
            {text:"My knowledge and abilities are limited by internet."},
            {text:"My ability to communicate is limited to language."},
        ]
    }
]

function Welcome() {
  return (
    <Layout title="Welcome" content="tyn-content-page" footer={true}>
      <div className="tyn-main">
        <Section gap="lg">
          <Container>
            <div className="tyn-text-block text-center pb-4 pb-lg-5">
                <LogoLink full/>
                <h1 className="mt-3">Welcome Back to Optimus</h1>
                <p>Your AI-powered knowledge Bot.</p>
            </div>
            <Row className="g-3 justify-content-center text-center">
                {data.map((item, index) => (
                    <Col xl="3" lg="4" key={index}>
                        <h4 className="title mb-3">{item.title}</h4>
                        <Row className="g-3 justify-content-center">
                            {item.cards.map((card, index) => (
                                <Col sm="6" md="5" lg="12" key={index}>
                                    <Card className="h-100 border-0">
                                        <Card.Body>
                                            <div className="tyn-text-block">
                                                <p>{card.text}</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                ))}
            </Row>
            <div className="text-center mt-4">
                <p>Choose a conversation style</p>
                <Row className="justify-content-center">
                    <Col xl="5">
                        <ul className="d-inline-flex flex-wrap bg-white p-2 rounded-3 justify-content-center gap gap-2">
                            <li className="flex-grow-1">
                                <input type="radio" className="btn-check" name="convotype" id="creative" defaultChecked />
                                <label className="btn btn-light flex-column w-100" htmlFor="creative"><span className="w-100 small mb-n3 pb-1">More</span>Creative</label>
                            </li>
                            <li className="flex-grow-1">
                                <input type="radio" className="btn-check" name="convotype" id="balanced" />
                                <label className="btn btn-light flex-column w-100" htmlFor="balanced"><span className="w-100 small mb-n3 pb-1">More</span>Balanced</label>
                            </li>
                            <li className="flex-grow-1">
                                <input type="radio" className="btn-check" name="convotype" id="precise" />
                                <label className="btn btn-light flex-column w-100" htmlFor="precise"><span className="w-100 small mb-n3 pb-1">More</span>Precise</label>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className="mt-4">
                    <Link to="/chatbot" className="btn btn-pill btn-rg btn-primary">
                        <SendFill />
                        <span>Start Talking</span>
                    </Link>
                </div>
            </div>
          </Container>
        </Section>
      </div>
    </Layout>
  )
}

export default Welcome