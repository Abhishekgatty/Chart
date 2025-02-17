import React from 'react'
import { Button, Dropdown, Form, Modal } from 'react-bootstrap'
import { ChatLeftText, Search, ThreeDots, XLg, Telephone, CameraVideo } from 'react-bootstrap-icons'
import { Media } from '../../../components'
import { useNavigate } from 'react-router-dom';

const contactList = [
    { id:"uid01", avatar: "/images/avatar/1.jpg", name: 'Jasmine Thompson', handle: '@thompson_jasmine' },
    { id:"uid02", avatar: "/images/avatar/2.jpg", name: 'Konstantin Frank', handle: '@konstantin_frank' },
    { id:"uid03", avatar: "/images/avatar/3.jpg", name: 'Mathias Devos', handle: '@mathias_devos' },
    { id:"uid04", avatar: "/images/avatar/4.jpg", name: 'Marie George', handle: '@marie_george' },
    { id:"uid05", avatar: "/images/avatar/5.jpg", name: 'Phillip Burke', handle: '@phillip_burke' }
]

const NewChat = ({show, setShow, showAudio, setShowAudio, showVideo, setShowVideo}) => {
    const navigate = useNavigate();
  return (
    <Modal backdrop="static" show={show} size="sm" centered contentClassName="border-0">
        <Modal.Body className="p-4">
            <h4 className="pb-2">Search by Name</h4>
            <Form.Group className="form-group">
                <div className="form-control-wrap">
                    <div className="form-control-icon start"><Search /></div>
                    <Form.Control type="text" className="form-control-solid" id="search-contact" placeholder="Search contact" />
                </div>
            </Form.Group>

            <ul className="tyn-media-list gap gap-3 pt-4">
                {contactList.map((item,index)=> {
                    return(
                        <li key={index}>
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
                                    <Dropdown as="li" autoClose="outside" align="end">
                                        <Dropdown.Toggle variant="white" className="btn-icon btn-pill">
                                            <ThreeDots />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <ul className="tyn-list-links">
                                                <li>
                                                    <button onClick={(ev) => {
                                                        ev.preventDefault();
                                                        navigate(`/?id=${item.id}`);
                                                        setShow(false);
                                                    }}>
                                                        <ChatLeftText />
                                                        <span>Start Texting</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={()=>{
                                                            setShow(false);
                                                            setShowAudio(!showAudio);
                                                        }}
                                                    >
                                                        <Telephone />
                                                        <span>Audio Call</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button 
                                                        onClick={()=>{
                                                            setShow(false);
                                                            setShowVideo(!showVideo);
                                                        }}
                                                    >
                                                        <CameraVideo />
                                                        <span>Video Call</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ul>
                            </Media.Group>
                        </li>
                    )
                })}
            </ul>
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

export default NewChat