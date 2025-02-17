import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { XLg } from 'react-bootstrap-icons'

const MuteModal = ({setMuted, show, setShow}) => {
  return (
    <Modal show={show} size="sm" centered contentClassName="border-0">
        <Modal.Body className="p-4">
            <h4 className="pb-2">Mute conversation</h4>
            <ul className="tyn-media-list gap gap-2">
                <li>
                    <Form.Check type="radio" label="For 15 minutes" id="muteFor15min" name="muteFor" />
                </li>
                <li>
                    <Form.Check type="radio" label="For 1 Hours" id="muteFor1Hour" name="muteFor" defaultChecked />
                </li>
                <li>
                    <Form.Check type="radio" label="For 1 Days" id="muteFor1Days" name="muteFor" />
                </li>
                <li>
                    <Form.Check type="radio" label="Until I turn back On" id="muteForInfinity" name="muteFor" />
                </li>
            </ul>
            <ul className="tyn-list-inline gap gap-3 pt-3">
                <li>
                    <Button 
                        onClick={()=> {
                            setMuted(true);
                            setShow(false);
                        }} 
                    size="md" variant="danger">Mute</Button>
                </li>
                <li>
                    <Button
                        onClick={()=> {
                            setShow(false);
                        }} 
                    size="md" variant="light">Close</Button>
                </li>
            </ul>
        </Modal.Body>
        <Button 
            onClick={()=> {
                setShow(false);
            }}
        size="md" variant="white" className="btn-icon btn-pill shadow position-absolute top-0 end-0 mt-n3 me-n3"><XLg /></Button>
    </Modal>
  )
}

export default MuteModal