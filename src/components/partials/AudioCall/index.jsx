import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { CameraVideoFill, MicMuteFill, PersonPlusFill, TelephoneXFill } from 'react-bootstrap-icons'
import { Image, Media } from '../../../components'

const AudioCall = ({show, setShow, setShowVideo}) => {
  return (
    <Modal backdrop="static" show={show} size="sm" centered contentClassName="border-0">
        <div className="tyn-chat-call">
            <div className="tyn-chat-cover">
                <Image src="images/cover/1.jpg" alt="" />
            </div>
            <Media.Group orientation="vr" align="center" className="mt-n4 pb-4">
                <Media size="xl" shape="circle" className="border border-2 border-white">
                    <Image src="images/avatar/1.jpg" alt="" />
                </Media>
                <Media.Col>
                    <Media.Row className="has-dot-sap">
                        <span className="meta">Calling ...</span>
                    </Media.Row>
                    <Media.Row>
                        <h6 className="name">Konstantin Frank</h6>
                    </Media.Row>
                </Media.Col>
            </Media.Group>

            <ul className="tyn-list-inline gap gap-3 m-auto py-4">
                <li>
                    <Button
                        onClick={()=> {
                            setShow(false);
                            setShowVideo(true);
                        }} variant="light"> 
                        <span>Switch To</span>
                        <CameraVideoFill />
                    </Button>
                </li>
            </ul>

            <ul className="tyn-list-inline gap gap-3 mx-auto py-4">
                <li>
                    <Button variant="light" className="btn-icon btn-pill">
                        <PersonPlusFill />
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
    </Modal>
  )
}

export default AudioCall