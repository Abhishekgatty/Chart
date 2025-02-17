import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
function QuestionForm() {
  return (
    <Card className="border-0">
        <Card.Body className="p-4">
            <div className="tyn-text-block mb-3">
                <h3>Drop us your question</h3>
                <p>Please try to discribe your question as clear as possible. we will get back to you soon.</p>
            </div>
            <Form action="">
                <Row className="gy-3">
                    <Col xs="12">
                        <Form.Group className="form-group">
                            <Form.Label htmlFor="email">Your Email</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="text" id="email" placeholder="example@email.com" />
                            </div>
                        </Form.Group>
                    </Col>
                    <Col xs="12">
                        <Form.Group className="form-group">
                            <Form.Label htmlFor="question">Your Question</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control as="textarea" name="" id="question" cols="4" rows="4"></Form.Control>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col xs="12">
                        <Form.Group className="form-group">
                            <Button variant="primary">Submit</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Card.Body>
    </Card>
  )
}

export default QuestionForm