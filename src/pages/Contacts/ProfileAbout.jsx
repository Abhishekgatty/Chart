import React, { Fragment } from 'react'
import { Facebook, Instagram, Tiktok, Twitter } from 'react-bootstrap-icons'
import Icon from '../../components/Icon'
import { Button, Col, Row } from 'react-bootstrap'

const ProfileAbout = ({user}) => {
  return (
    <Row className="gy-4">
        <Col xl="6">
            <div className="tyn-profile-bio">
                <h5>About {user.name.split(' ')[0]}</h5>
                <p>{user.bio}</p>
            </div>
            <ul className="tyn-list-inline gap gap-3 ms-auto">
                <li><Button as="a" variant="light" href="#" className="btn-icon"><Facebook /></Button></li>
                <li><Button as="a" variant="light" href="#" className="btn-icon"><Twitter /></Button></li>
                <li><Button as="a" variant="light" href="#" className="btn-icon"><Instagram /></Button></li>
                <li><Button as="a" variant="light" href="#" className="btn-icon"><Tiktok /></Button></li>
            </ul>
        </Col>
        <Col xs="12">
            <h5>Basic Info</h5>
            <ul className="d-flex gap gx-5 flex-wrap">
                <li>
                    <div className="vstack">
                        <div className="mb-2">
                            <Icon.BirthDayCake />
                        </div>
                        <span className="tyn-subtext">Birth day</span>
                        <h5>{user.dob}</h5>
                    </div>
                </li>
                <li>
                    <div className="vstack">
                        <div className="mb-2">
                            {user.gender === "male" && <Icon.ManInGlasses />}
                            {user.gender === "female" && <Icon.WomanInGlasses />}
                        </div>
                        <span className="tyn-subtext">Gender</span>
                        <h5 className="text-capitalize">{user.gender}</h5>
                    </div>
                </li>
                {user.language && <li>
                    <div className="vstack">
                        <div className="mb-2">
                            <Icon.World />
                        </div>
                        <span className="tyn-subtext">Language</span>
                        <h5>
                            {user.language.map((item,index) => 
                                <Fragment key={index}>
                                {item}
                                {user.language.length > index + 1 ? ', ': ''}
                                </Fragment>
                            )}
                        </h5>
                    </div>
                </li>}
                {user.city && <li>
                    <div className="vstack">
                        <div className="mb-2">
                            <Icon.Building />
                        </div>
                        <span className="tyn-subtext">City</span>
                        <h5>
                            {user.city.map((item,index) => 
                                <Fragment key={index}>
                                {item}
                                {user.city.length > index + 1 ? ', ': ''}
                                </Fragment>
                            )}
                        </h5>
                    </div>
                </li>}
                <li>
                    <div className="vstack">
                        <div className="mb-2">
                            <Icon.Telephone />
                        </div>
                        <span className="tyn-subtext">Phone No</span>
                        <h5>{user.phone}</h5>
                    </div>
                </li>
                <li>
                    <div className="vstack">
                        <div className="mb-2">
                            <Icon.Envelope />
                        </div>
                        <span className="tyn-subtext">Emails</span>
                        <h5>{user.mail}</h5>
                    </div>
                </li>
            </ul>
        </Col>
    </Row>
  )
}

export default ProfileAbout