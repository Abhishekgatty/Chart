import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

const ProfileSecurity = () => {
  return (
    <Row className="gy-5">
        <Col xs="12">
            <Row className="gy-4">
                <Col lg="3">
                    <h6>Change Password</h6>
                    <div className="tyn-subtext">Edit Your pass key</div>
                </Col>
                <Col lg="9">
                    <Row className="g-gs">
                        <Col xs="12">
                            <div className="form-group">
                                <Form.Label className="d-flex" htmlFor="CurrentPassword">Current Password</Form.Label>
                                <div className="form-control-wrap">
                                    <Form.Control type="password" id="CurrentPassword" placeholder="password" />
                                </div>
                                <div className="tyn-subtext mt-2">The pass key associated with your account</div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="form-group">
                                <Form.Label htmlFor="newPass">New Password</Form.Label>
                                <div className="form-control-wrap">
                                    <Form.Control type="password" id="newPass" placeholder="New Password" />
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="form-group">
                                <Form.Label htmlFor="repeatPassword">Repeat Password</Form.Label>
                                <div className="form-control-wrap">
                                    <Form.Control type="password" id="repeatPassword" placeholder="Repeat Password" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
  )
}

export default ProfileSecurity