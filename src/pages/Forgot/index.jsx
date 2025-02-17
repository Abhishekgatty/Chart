import React from 'react';
import Layout from '../../layout/blank'
import {Card, Row, Col, Form, Container} from "react-bootstrap"
import {Link} from "react-router-dom"
import LogoLink from "../../components/Logo/LogoLink"

function Forgot() {
  return (
    <Layout title="Forgot" content="tyn-auth tyn-auth-centered">
      <Container>
        <Row className="justify-content-center">
            <Col xl="4" lg="5" md="7" sm="9">
                <div className="my-3 text-center">
                    <LogoLink size="sm" full />
                </div>
                <Card className="border-0">
                    <div className="p-4">
                        <h3>Recovery Password</h3>
                        <Row className="g-3">
                            <Col xs="12">
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="email-address">Email Address</Form.Label>
                                    <div className="form-control-wrap">
                                        <Form.Control type="text"  id="email-address" placeholder="youremail@example.com" />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xs="12">
                                <Link className="btn btn-primary w-100" to="/">Reset Password</Link>
                            </Col>
                        </Row>
                    </div>
                </Card>

                <div className="mt-4"><p className="small">Some how remembered? <Link to="/login">Login</Link></p></div>
                
            </Col>
        </Row>
    </Container>
    </Layout>
  )
}

export default Forgot