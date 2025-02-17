import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import {  Search, XLg, PersonPlusFill } from 'react-bootstrap-icons'
import { Media } from '../../../components'
import { useNavigate } from 'react-router-dom';

const contactList = [
    { id:"uid01", avatar: "/images/avatar/1.jpg", name: 'Jasmine Thompson', handle: '@thompson_jasmine' },
    { id:"uid02", avatar: "/images/avatar/2.jpg", name: 'Konstantin Frank', handle: '@konstantin_frank' },
    { id:"uid03", avatar: "/images/avatar/3.jpg", name: 'Mathias Devos', handle: '@mathias_devos' },
    { id:"uid04", avatar: "/images/avatar/4.jpg", name: 'Marie George', handle: '@marie_george' },
    { id:"uid05", avatar: "/images/avatar/5.jpg", name: 'Phillip Burke', handle: '@phillip_burke' }
]

const AddContact = ({show, setShow}) => {
    const navigate = useNavigate();
  return (
    <Modal backdrop="static" show={show} size="sm" centered contentClassName="border-0">
        <Modal.Body className="p-4">
            <h4 className="pb-2">Search by Name</h4>
            <Form className="form-group">
                <div className="form-control-wrap">
                    <div className="form-control-icon start"><Search /></div>
                    <Form.Control type="text" className="form-control-solid" id="search-contact" placeholder="Search contact" />
                </div>
            </Form>

            <Media.List className="gap gap-3 pt-4">
                {contactList.map((item,index)=> {
                    return(
                        <Media.List.Item key={index}>
                            <Media.Group>
                                <Media>
                                    <img src={item.avatar} alt={item.name} />
                                </Media>
                                <Media.Col>
                                    <Media.Row>
                                        <h6 className="name">{item.name}</h6>
                                    </Media.Row>
                                    <Media.Row>
                                        <p className="content">{item.handle}</p>
                                    </Media.Row>
                                </Media.Col>
                                <ul className="tyn-media-option-list me-n1">
                                    <li>
                                        <Button variant="white" className="btn-icon btn-pill">
                                            <PersonPlusFill />
                                        </Button>
                                    </li>
                                </ul>
                            </Media.Group>
                        </Media.List.Item>
                    )
                })}
            </Media.List>
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

export default AddContact