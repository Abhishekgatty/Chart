import React, {useEffect, useState} from 'react'
import { XLg } from 'react-bootstrap-icons'
import contacts from '../../store/contacts'
import { Media } from '../../components';
import { Button } from 'react-bootstrap';

const ProfileHead = ({user}) => {
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
    <>
        <div className="tyn-profile-head">
            <div className="tyn-profile-cover">
                <img className="tyn-profile-cover-image" src={user.cover} alt="" />
            </div>
            <div className="tyn-profile-info">
                <Media.Group className="align-items-start">
                    <Media size="4xl" bordered className="tyn-profile-avatar">
                        <img src={user.avatar} alt="" />
                    </Media>
                    <Media.Col>
                        <Media.Row>
                            <h4 className="name">{user.name} <span className="username">@{user.handle}</span></h4>
                        </Media.Row>
                        <Media.Row className="has-dot-sap">
                            <span className="content">{user.contacts.length} Contacts</span>
                            <span className="meta">8 Mutual</span>
                        </Media.Row>
                        <Media.Row className="pt-2">
                            <Media.Multiple>
                                {userContacts?.slice(0,5).map((item,index)=> {
                                    return(
                                        <Media key={index} size="md" shape="circle" bordered>
                                            <img src={item.avatar} alt="" />
                                        </Media>
                                    )
                                })}
                            </Media.Multiple>
                        </Media.Row>
                    </Media.Col>
                </Media.Group>
            </div>
        </div>
    </>
  )
}

export default ProfileHead