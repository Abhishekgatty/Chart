import React, {useEffect, useState} from 'react'
import contacts from '../../store/contacts'
import { Media } from '../../components';
import { Col, Row } from 'react-bootstrap';

const ProfileContacts = ({user}) => {
    const [userContacts, setUserContacts] = useState();
    useEffect(() => {
        let uc = [];
        user.contacts.forEach(item=> {
            let selectedContact = contacts.find(contact => contact.id === item);
            uc.push(selectedContact)
        })
        setUserContacts(uc);
    }, [contacts,user]);
  return (
    <Row className="g-gs">
        {userContacts?.map((item,index)=> {
            return(
                <Col key={index} xxl="2" xl="3" lg="4" sm="6">
                    <div className="border border-light rounded-3 py-4 px-3 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                        <Media size="2xl" shape="circle" className="mb-3">
                            <img src={item.avatar} alt={item.name} />
                        </Media>
                        <span className="tyn-subtext mb-1">@{item.handle}</span>
                        <h6>{item.name}</h6>
                    </div>
                </Col>
            )
        })}
    </Row>
  )
}

export default ProfileContacts