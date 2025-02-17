import React, {Fragment, useState, useEffect, useRef} from 'react'
import { Dropdown,  Button,Form, Nav, Tab } from 'react-bootstrap'
import { ArrowLeft, TelephoneFill, CameraVideoFill, Search, LayoutSidebarInsetReverse, ChevronUp, ChevronDown, XLg, PlusLg, PersonVideo2, Mic, CardImage, EmojiSmileFill, MicFill, SendFill, BellFill, BellSlashFill, Images, Sliders} from 'react-bootstrap-icons'
import { Media, Image} from '../../components'
import ChatMedia from './ChatMedia'
import classNames from 'classnames'
import ChatOptions from './ChatOptions'
import SimpleBar from 'simplebar-react'
import MuteModal from '../../components/partials/MuteModal'
import VideoCall from '../../components/partials/VideoCall'
import AudioCall from '../../components/partials/AudioCall'
import QuickChat from '../../components/partials/QuickChat'
import Reply from '../../components/partials/Reply'

const Chat = ({selected, showAudioCall, setShowAudioCall, showVideoCall, setShowVideoCall, showMain, setShowMain }) => {
    const [asideVisibility, setAsideVisibility] = useState(true);
    const [showSearch, setShowSearch] = useState(false);
    const [muted, setMuted] = useState(false);
    const [muteModal, setMuteModal] = useState(false);

    const chatWindow = useRef(null);

    useEffect(() => {
        const handleAside = () => {
            if (window.innerWidth >= 1200) {
                setAsideVisibility(true);
            } else {
                setAsideVisibility(false);
            }
        }
    
        handleAside();
        window.addEventListener('resize', handleAside);
        return () => {
            window.removeEventListener('resize', handleAside);
        };
    }, []);


    useEffect(() => {
        if (chatWindow.current) {
            const scrollElement = chatWindow.current.contentWrapperEl;
            scrollElement.scrollTop = scrollElement.scrollHeight;
        }
    }, [selected])
    
  return (
    <>
        <div className={classNames({"tyn-main tyn-chat-content" : true, "aside-shown" : asideVisibility, "main-shown" : showMain})}>
            <div className="tyn-chat-head">
                <ul className="tyn-list-inline d-md-none ms-n1">
                    <li><Button variant="transparent" size="md" className="btn-icon btn-pill"
                        onClick={()=>{
                            setShowMain(false)
                        }}
                    ><ArrowLeft /></Button></li>
                </ul>
                <Media.Group>
                    <Media size="lg" className="d-none d-sm-inline-flex">
                        <Image src={selected.avatar} alt="" />
                    </Media>
                    <Media size="rg" className="d-sm-none">
                        <Image src={selected.avatar} alt="" />
                    </Media>
                    <Media.Col>
                        <Media.Row>
                            <h6 className="name">{selected.name}</h6>
                        </Media.Row>
                        <Media.Row className="has-dot-sap">
                            <span className="meta text-capitalize">{selected.status}</span>
                        </Media.Row>
                    </Media.Col>
                </Media.Group>
                <ul className="tyn-list-inline gap gap-3 ms-auto">
                    <li>
                        <Button 
                            onClick={()=>{
                                setShowAudioCall(!showAudioCall);
                            }}
                            variant="light" className="btn-icon"
                        ><TelephoneFill /></Button>
                    </li>
                    <li>
                        <Button
                            onClick={()=>{
                                setShowVideoCall(!showVideoCall);
                            }} variant="light" className="btn-icon"
                        ><CameraVideoFill /></Button>
                    </li>
                    <li className="d-none d-sm-block">
                        <Button 
                            onClick={()=>{
                                setShowSearch(!showSearch);
                            }}
                            variant="light" className={classNames({"btn-icon" : true, "active" : showSearch})}
                        ><Search /></Button>
                    </li>
                    <li>
                        <Button
                            onClick={()=>{
                                setAsideVisibility(!asideVisibility);
                            }}
                            variant="light" className={classNames({"btn-icon" : true, "active" : asideVisibility})}>
                            <LayoutSidebarInsetReverse />
                        </Button>
                    </li>
                </ul>
                <div className={classNames({"tyn-chat-search" : true, "active" : showSearch})} id="tynChatSearch">
                    <div className="flex-grow-1">
                        <Form.Group className="form-group">
                            <div className="form-control-wrap form-control-plaintext-wrap">
                                <div className="form-control-icon start"><Search /></div>
                                <Form.Control type="text" className="form-control-plaintext" id="searchInThisChat" placeholder="Search in this chat" />
                            </div>
                        </Form.Group>
                    </div>
                    <div className="d-flex align-items-center gap gap-3">
                        <ul className="tyn-list-inline ">
                            <li><Button size="sm" variant="transparent" className="btn-icon"><ChevronUp /></Button></li>
                            <li><Button size="sm" variant="transparent" className="btn-icon"><ChevronDown /></Button></li>
                        </ul>
                        <ul className="tyn-list-inline ">
                            <li><Button onClick={()=>{
                                setShowSearch(false);
                            }} size="md" variant="light" className="btn-icon"><XLg /></Button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <SimpleBar ref={chatWindow} className="tyn-chat-body" id="tynChatBody">
                <Reply>
                    {selected.chats.map((item,index)=>{
                        return(
                            <Fragment key={index}>
                                {item.new_date ? <Reply.Separator>{item.new_date}</Reply.Separator> :
                                <Reply.Item
                                    key={index}
                                    incoming={item.direction === "incoming"}
                                    outgoing={item.direction === "outgoing"}
                                >
                                    {item.direction === "incoming" && <Reply.Avatar avatar={selected.avatar} /> }
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
                                                <Reply.Tools />
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
            <div className="tyn-chat-form">
                <div className="tyn-chat-form-insert">
                    <ul className="tyn-list-inline gap gap-3">
                        <Dropdown as="li" drop="up">
                            <Dropdown.Toggle variant="light" size="md" className="btn-icon btn-pill"><PlusLg /></Dropdown.Toggle>
                            <Dropdown.Menu style={{marginBottom: "10px"}}>
                                <ul className="tyn-list-links">
                                    <li><a href="#"><PersonVideo2 /> <span>New Group</span></a></li>
                                    <li><a href="#"><Mic /> <span>Voice Clip</span></a></li>
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="d-none d-sm-block"><Button variant="light" size="md" className="btn-icon btn-pill"><CardImage /></Button></li>
                        <li className="d-none d-sm-block"><Button variant="light" size="md" className="btn-icon btn-pill"><EmojiSmileFill /></Button></li>
                    </ul>
                </div>
                <div className="tyn-chat-form-enter">
                    <div className="tyn-chat-form-input h-100" id="tynChatInput" contentEditable></div>
                    <ul className="tyn-list-inline me-n2 my-1">
                        <li><Button variant="white" size="md" className="btn-icon btn-pill"><MicFill /></Button></li>
                        <li><Button variant="white" size="md" className="btn-icon btn-pill" id="tynChatSend"><SendFill /></Button></li>
                    </ul>
                </div>
            </div>
            {asideVisibility && <div onClick={()=> setAsideVisibility(false)} className="tyn-overlay js-toggle-chat-options active d-xl-none"></div>}
            <SimpleBar className={classNames({"tyn-chat-content-aside" : true, "show-aside" : asideVisibility})} id="tynChatAside">
                <div className="tyn-chat-cover">
                    <Image src={selected.cover} alt={selected.name} />
                </div>
                <Media.Group orientation="vr" align="center" className="mt-n4">
                    <Media size="xl" className="border border-2 border-white">
                        <Image  src={selected.avatar} alt={selected.name} />
                    </Media>
                    <Media.Col>
                        <Media.Row>
                            <h6 className="name">{selected.name}</h6>
                        </Media.Row>
                        <Media.Row className="has-dot-sap">
                            <span className="meta text-capitalize">{selected.status} Now</span>
                        </Media.Row>
                    </Media.Col>
                </Media.Group>
                <Tab.Container as={Fragment} defaultActiveKey="chat-options">
                    <div className="tyn-aside-row">
                        <Nav as="ul" variant="btns nav-btns-stretch nav-btns-light">
                            <Nav.Item as="li">
                                <Nav.Link 
                                    onClick={()=>{
                                        muted ? setMuted(false) : setMuteModal(true);
                                    }}
                                as="button" className={classNames({"tyn-chat-mute" : true, "chat-muted" : muted})}>
                                    <span className="icon unmuted-icon">
                                        <BellFill />
                                    </span>
                                    <span className="unmuted-icon">Mute</span>
                                    <span className="icon muted-icon">
                                        <BellSlashFill />
                                    </span>
                                    <span className="muted-icon">Muted</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as="button" eventKey="chat-media">
                                    <Images />
                                    <span>Media</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as="button" eventKey="chat-options">
                                    <Sliders />
                                    <span>Options</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="chat-media"><ChatMedia /></Tab.Pane>
                        <Tab.Pane eventKey="chat-options"><ChatOptions /></Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </SimpleBar>
        </div>
        <QuickChat moveUp={!asideVisibility} />
        <MuteModal setMuted={setMuted} show={muteModal} setShow={setMuteModal} />
        <AudioCall show={showAudioCall} setShow={setShowAudioCall} showVideo={showVideoCall} setShowVideo={setShowVideoCall} />
        <VideoCall show={showVideoCall} setShow={setShowVideoCall} showAudio={showAudioCall} setShowAudio={setShowAudioCall} />
    </>
  )
}

export default Chat