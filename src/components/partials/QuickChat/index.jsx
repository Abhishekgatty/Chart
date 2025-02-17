import React, { Fragment, useState, useRef, useEffect } from 'react'
import uuid4 from "uuid4";
import classNames from 'classnames'
import { Button } from 'react-bootstrap'
import {SendFill, XLg} from 'react-bootstrap-icons'
import Logo from '../../Logo/Logo'
import Media from '../../Media/Media'
import Reply from '../Reply'
import SimpleBar from 'simplebar-react';

const data = [
    {
        direction: 'outgoing',
        messages: [
            {
                id: uuid4(),
                type: 'text',
                content: 'Hey! Hows it going?',
                time: 'Aug 22, 2022, 3:05 PM'
            },
            {
                id: uuid4(),
                type: 'file',
                content:[
                    {
                        ext:'docx',
                        size: '24.65 MB',
                        name:'Konstantin_cv',
                    }
                ]
            }
        ]
    },
    {
        direction: 'incoming',
        messages: [
            {
                id: uuid4(),
                type: 'text',
                content: 'Hey there!',
                time: 'Aug 22, 2022, 3:05 PM'
            },
            {
                id: uuid4(),
                type: 'text',
                content: 'Not too bad, just hanging out at home.',
                time: 'Aug 22, 2022, 3:05 PM'
            },
            {
                id: uuid4(),
                type: 'text',
                content: 'Yourself?',
                time: 'Aug 22, 2022, 3:05 PM'
            },
        ]
    },
    {
        direction: 'outgoing',
        messages: [
            {
                id: uuid4(),
                type: 'text',
                content: 'I am doing well, thanks.',
                time: 'Aug 22, 2022, 3:05 PM'
            },
            {
                id: uuid4(),
                type: 'text',
                content: 'I was wondering if you wanted to get together later? ',
                time: 'Aug 22, 2022, 3:05 PM'
            },
            {
                id: uuid4(),
                type: 'text',
                content: 'Maybe grab some dinner or something? I am kind of bored just sitting around the house.',
                time: 'Aug 22, 2022, 3:05 PM'
            },
        ]
    },
    {
        direction: 'incoming',
        messages: [
            {
                id: uuid4(),
                type: 'text',
                content: 'Dinner sounds good to me! What did you have in mind?',
                time: 'Aug 22, 2022, 3:05 PM'
            },
            {
                id: uuid4(),
                type: 'media',
                content: [
                    {
                        type:'image',
                        src: '/images/gallery/chat/6.jpg',
                        thumb: '/images/gallery/chat/thumb-6.jpg',
                        height:"1620",
                        width:"1080"
                    },
                    {
                        type:'image',
                        src: '/images/gallery/chat/7.jpg',
                        thumb: '/images/gallery/chat/thumb-7.jpg',
                        height:"1620",
                        width:"1080"
                    },
                    {
                        type:'video',
                        src: 'https://www.youtube.com/embed/ag0qTaAKqT8',
                        poster: '/images/gallery/video/hr-6.jpg'
                    },
                ],
                time: 'Aug 22, 2022, 3:05 PM'
            },
        ]
    },
    {
        direction: 'outgoing',
        messages: [
            {
                id: uuid4(),
                type: 'text',
                content: 'Well, I was thinking we could try that new Mexican place downtown that everyone has been raving about. Their tacos are supposed to be amazing.',
                time: 'Aug 22, 2022, 3:05 PM'
            },
            {
                id: uuid4(),
                type: 'text',
                content: 'But Im open to other ideas too if you had something else in mind!',
                time: 'Aug 22, 2022, 3:05 PM'
            },
        ]
    },
]

const QuickChat = ({moveUp}) => {
    const [show, setShow] = useState(false);
    const chatWindow = useRef(null);
    useEffect(() => {
        if (chatWindow.current) {
            const scrollElement = chatWindow.current.contentWrapperEl;
            scrollElement.scrollTop = scrollElement.scrollHeight;
        }
    }, [])
  return (
    <div className={classNames({"tyn-quick-chat":true, "active": show})} id="tynQuickChat">
        <button onClick={()=> {setShow(!show)}} className={classNames({"tyn-quick-chat-toggle":true, "move-up": moveUp})}>
            <Logo />
            <span className="badge bg-primary top-0 start-0 position-absolute rounded-pill">2</span>
        </button>
        <div className="tyn-quick-chat-box">
            <div className="tyn-quick-chat-head">
                <Media.Group>
                    <Media size="rg">
                        <img src="images/avatar/1.jpg" alt="" />
                    </Media>
                    <Media.Col>
                        <Media.Row>
                            <h6 className="name">Jasmine Thompson</h6>
                        </Media.Row>
                        <Media.Row className="has-dot-sap">
                            <span className="meta">Active</span>
                        </Media.Row>
                    </Media.Col>
                </Media.Group>
            </div>
            <SimpleBar ref={chatWindow} className="tyn-quick-chat-reply">
                <Reply className="tyn-reply-quick">
                    {data.map((item,index)=>{
                        return(
                            <Fragment key={index}>
                                {item.new_date ? <Reply.Separator>{item.new_date}</Reply.Separator> :
                                <Reply.Item
                                    key={index}
                                    incoming={item.direction === "incoming"}
                                    outgoing={item.direction === "outgoing"}
                                >
                                    {item.direction === "incoming" && <Reply.Avatar avatar='/images/avatar/1.jpg' /> }
                                    <Reply.Group>
                                        {item.messages.map((item,index) =>
                                            <Reply.Bubble key={index}>
                                                {item.type === "text" && <Reply.Text>{item.content}</Reply.Text>}
                                                {item.type === "media" && <Reply.Media list={item.content} />}
                                                {item.type === "link" && <Reply.Link content={item.content} />}
                                                {item.type === "file" && <Reply.File content={item.content} />}
                                                {item.type === "call" && 
                                                    <Reply.Call 
                                                        content={item.call} 
                                                        time={item.time}
                                                    />
                                                } 
                                            </Reply.Bubble>
                                        )}
                                    </Reply.Group>
                                </Reply.Item>
                                }
                            </Fragment>
                        )}
                    )}
                </Reply>
            </SimpleBar>
            <div className="tyn-quick-chat-form">
                <div className="tyn-chat-form-input bg-light" id="tynQuickChatInput" contentEditable></div>
                <ul className="tyn-list-inline me-n2 my-1">
                    <li><Button variant="white" size="sm" className="btn-icon btn-pill"><SendFill /></Button></li>
                </ul>
            </div>
            <Button variant="danger" size="sm" onClick={()=> {setShow(!show)}} className="btn-icon top-0 end-0 position-absolute rounded-pill translate-middle"><XLg /></Button>
        </div>
    </div>
  )
}

export default QuickChat