import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { XLg } from 'react-bootstrap-icons'

const DeleteChat = ({show, setShow}) => {
  return (
    <Modal backdrop="static" show={show} size="sm" centered contentClassName="border-0">
        <Modal.Body>
            <div className="py-4 px-4 text-center">
                <h3>Delete chat</h3>
                <p className="small">Once you delete your copy of this conversation, it cannot be undone.</p>
                <ul className="tyn-list-inline gap gap-3 pt-1 justify-content-center">
                    <li>
                        <Button 
                        onClick={()=> {
                            setShow(false);
                        }} variant="danger">Delete</Button>
                    </li>
                    <li>
                        <Button 
                        onClick={()=> {
                            setShow(false);
                        }} variant="light">No</Button>
                    </li>
                </ul>
            </div>
        </Modal.Body>
        <Button
            onClick={()=> {
                setShow(false);
            }}
            size="md" variant="white" className="btn-icon btn-pill shadow position-absolute top-0 end-0 mt-n3 me-n3"><XLg />
        </Button>
    </Modal>
  )
}

export default DeleteChat