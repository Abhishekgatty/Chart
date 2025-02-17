import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { CameraVideoFill, MicMuteFill, PersonPlusFill, TelephoneXFill } from 'react-bootstrap-icons'
import { Media } from '../../../components'

const VideoCall = ({show, setShow, setShowAudio}) => {
  return (
    <Modal backdrop="static" show={show} size="sm" centered contentClassName="border-0">
        <div className="tyn-chat-call tyn-chat-call-video">
                <div className="tyn-chat-call-stack">
                    <div className="tyn-chat-call-cover">
                        <img src="images/v-cover/1.jpg" alt="" />
                    </div>
                </div>
                <div className="tyn-chat-call-stack on-dark">
                    <Media.Group className="p-4">
                        <Media.Col className="align-self-start pt-3">
                            <Media.Row className="has-dot-sap">
                                <span className="meta">Talking With ...</span>
                            </Media.Row>
                            <Media.Row>
                                <h6 className="name">Konstantin Frank</h6>
                            </Media.Row>
                            <Media.Row className="has-dot-sap">
                                <span className="content">02:09 min</span>
                            </Media.Row>
                        </Media.Col>
                        <Media size="3xl" className="tyn-media-1x1_3 border border-2 border-dark">
                            <img src="images/v-cover/2.jpg" alt="" />
                        </Media>
                    </Media.Group>
                    <ul className="tyn-list-inline gap gap-3 mx-auto py-4 justify-content-center  mt-auto">
                        <li>
                            <Button variant="light" className="btn-icon btn-pill">
                                <PersonPlusFill />
                            </Button>
                        </li>
                        <li>
                            <Button
                                onClick={()=> {
                                    setShow(false);
                                    setShowAudio(true);
                                }} variant="light" className="btn-icon btn-pill" >
                                <CameraVideoFill />
                            </Button>
                        </li>
                        <li>
                            <Button variant="light" className="btn-icon btn-pill">
                                <MicMuteFill />
                            </Button>
                        </li>
                        <li>
                            <Button
                                onClick={()=> {
                                    setShow(false);
                                }} 
                                variant="danger" className="btn-icon btn-pill">
                                <TelephoneXFill />
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
    </Modal>
  )
}

export default VideoCall