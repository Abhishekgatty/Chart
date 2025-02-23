import React, { useState, useEffect, useRef } from 'react';
import Layout from '../../layout/main';
import { ChatRightTextFill, PersonUp, PlusLg, SendFill, Trash, XLg } from 'react-bootstrap-icons';
import { Button, Row, Col } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { Media } from '../../components';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getConversations } from '../../api/conversations';
import classNames from 'classnames';

const CHATBOT_BASE_URL = 'http://204.12.227.152:8000';

function Chatbot() {
    let [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [conversations, setConversations] = useState([]);
    const [selected, setSelected] = useState(null);
    const [showMain, setShowMain] = useState(searchParams.get('id') !== null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [inputMessage, setInputMessage] = useState('');
    const [isBotTyping, setIsBotTyping] = useState(false);
    const chatWindow = useRef(null);
    const [currentPlan, setCurrentPlan] = useState('Free');

    const userInfo = {
        user_id: 1,
        user_department: 'Nursing',
        user_year: 4,
        user_semester: 2
    };

    const createNewConversation = async () => {
        try {
            const sessionId = localStorage.getItem('sessionId');
            const newConversation = {
                id: Date.now().toString(),
                title: `Chat ${conversations.length + 1}`,
                messages: []
            };
            setSelected(newConversation);
            setShowMain(true);
            navigate(`/chatbot?id=${newConversation.id}`);
            return newConversation;
        } catch (err) {
            console.error('Error creating new conversation:', err);
            setError('Failed to create new conversation');
            return null;
        }
    };

    const fetchConversations = async () => {
        try {
            setLoading(true);
            const sessionId = localStorage.getItem('sessionId');
            const response = await getConversations(sessionId);
            
            if (Array.isArray(response)) {
                setConversations(response.slice(0, 5));
                if (response.length === 0) {
                    await createNewConversation();
                }
            } else {
                setConversations([]);
                await createNewConversation();
            }
            setError(null);
        } catch (err) {
            setError('Failed to load conversations');
            console.error('Error fetching conversations:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSendMessage = async (messageInput = null) => {
        const messageToSend = messageInput || inputMessage;
        if (!messageToSend.trim()) return;

        let currentConversation = selected;
        if (!currentConversation) {
            currentConversation = await createNewConversation();
            if (!currentConversation) return;
            setSelected(currentConversation);
            await new Promise(resolve => setTimeout(resolve, 0));
        }

        console.log('handleSendMessage - currentConversation:', currentConversation);

        const userMessage = { role: 'user', content: messageToSend };
        const updatedMessages = currentConversation.messages ? [...currentConversation.messages, userMessage] : [userMessage];
        const tempConversation = {
            ...currentConversation,
            messages: updatedMessages
        };
        setSelected(tempConversation);
        
        if (!messageInput) {
            setInputMessage('');
        }

        setIsBotTyping(true);

        try {
            const sessionId = localStorage.getItem('sessionId');
            if (!sessionId) {
                throw new Error('No session ID found');
            }

            const url = `${CHATBOT_BASE_URL}/chatbot/send_message?user_id=${userInfo.user_id}&session_id=${encodeURIComponent(sessionId)}&user_department=${encodeURIComponent(userInfo.user_department)}&user_year=${encodeURIComponent(userInfo.user_year)}&user_semester=${userInfo.user_semester}&message=${encodeURIComponent(messageToSend)}`;

            console.log('Sending request to:', url);

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: ''
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! status: ${response.status}, detail: ${JSON.stringify(errorData)}`);
            }

            const data = await response.json();
            console.log('Received response:', data);

            const botMessage = { role: 'bot', content: data.response || "Error getting response" };
            const updatedConversation = {
                ...tempConversation,
                messages: [...tempConversation.messages, botMessage],
                timestamp: new Date().toISOString()
            };
            
            setSelected(updatedConversation);
        } catch (err) {
            console.error("Error sending message:", err);
            setError(err.message);
            const errorMessage = { 
                role: 'bot', 
                content: `Sorry, there was an error: ${err.message}` 
            };
            setSelected(prev => ({
                ...prev,
                messages: prev?.messages ? [...prev.messages, errorMessage] : [errorMessage]
            }));
        } finally {
            setIsBotTyping(false);
        }
    };

    useEffect(() => {
        fetchConversations();
        const userPlan = localStorage.getItem('userPlan') || 'Free';
        setCurrentPlan(userPlan);
    }, []);

    useEffect(() => {
        const id = searchParams.get('id');
        if (id && conversations.length > 0) {
            const selectedConversation = conversations.find((item) => item.id === id);
            setSelected(selectedConversation || null);
        }
    }, [searchParams, conversations]);

    useEffect(() => {
        if (chatWindow.current) {
            const scrollElement = chatWindow.current.contentWrapperEl;
            scrollElement.scrollTop = scrollElement.scrollHeight;
        }
    }, [selected]);

    if (loading && conversations.length === 0) {
        return <div className="text-center p-4">Loading conversations...</div>;
    }

    if (error && conversations.length === 0) {
        return <div className="text-center p-4 text-danger">{error}</div>;
    }

    return (
        <Layout title="Chatbot" content="tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base">
            <div className="tyn-aside tyn-aside-base">
                <div className="tyn-aside-head">
                    <div className="tyn-aside-head-text">
                        <h3 className="tyn-aside-title tyn-title">Chat Archive</h3>
                    </div>
                    <div className="tyn-aside-head-tools">
                        <ul className="tyn-list-inline gap gap-3">
                            <li>
                                <Button
                                    variant="light"
                                    size="md"
                                    className="btn-icon btn-pill"
                                    onClick={createNewConversation}
                                >
                                    <PlusLg />
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <SimpleBar className="tyn-aside-body">
                    <ul className="tyn-aside-list">
                        {Array.isArray(conversations) && conversations.length > 0 ? (
                            conversations.map((item) => (
                                <li
                                    key={item.id}
                                    className={classNames({
                                        'tyn-aside-item': true,
                                        active: item.id === selected?.id,
                                    })}
                                    onClick={(ev) => {
                                        ev.preventDefault();
                                        if (!ev.target.closest('.tyn-aside-item-option')) {
                                            navigate(`/chatbot?id=${item.id}`);
                                            setShowMain(true);
                                        }
                                    }}
                                >
                                    <Media.Group>
                                        <Media size="sm">
                                            <ChatRightTextFill />
                                        </Media>
                                        <Media.Col>
                                            <div className="content">{item.title}</div>
                                        </Media.Col>
                                    </Media.Group>
                                </li>
                            ))
                        ) : (
                            <div>No conversations found.</div>
                        )}
                    </ul>
                </SimpleBar>
                <div className="tyn-aside-foot">
                    <div className="w-100">
                        <Row as="ul" className="gx-3">
                            <Col as="li" xs="6">
                                {currentPlan === 'Free' ? (
                                    <Link to="/pricing" className="btn btn-light btn-lg w-100 flex-column py-2 pt-3">
                                        <PersonUp />
                                        <span className="small text-nowrap mt-n1">Become Pro</span>
                                    </Link>
                                ) : (
                                    <Button
                                        variant="light"
                                        size="lg"
                                        className="w-100 flex-column py-2 pt-3"
                                        disabled
                                    >
                                        <PersonUp />
                                        <span className="small text-nowrap mt-n1">Premium Member</span>
                                    </Button>
                                )}
                            </Col>
                            <Col as="li" xs="6">
                                <Button
                                    variant="light"
                                    size="lg"
                                    className="w-100 flex-column py-2 pt-3"
                                    onClick={() => {}}
                                >
                                    <Trash />
                                    <span className="small text-nowrap mt-n1">Clear Archive</span>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div
                className={classNames({
                    'tyn-main tyn-main-boxed tyn-main-boxed-lg': true,
                    'main-shown': showMain,
                })}
            >
                <ul className="tyn-list-inline d-md-none translate-middle-x position-absolute start-50 z-1">
                    <li>
                        <Button
                            variant="white"
                            className="btn-icon btn-pill"
                            onClick={() => setShowMain(false)}
                        >
                            <XLg />
                        </Button>
                    </li>
                </ul>
                <SimpleBar ref={chatWindow} className="tyn-chat-body m-4 rounded-3">
                    <div className="tyn-qa">
                        {(!selected?.messages || selected.messages.length === 0) && (
                            <div className="tyn-qa-item">
                                <div className="tyn-qa-avatar">
                                    <Media size="md">
                                        <img src="images/avatar/bot-1.jpg" alt="" />
                                    </Media>
                                </div>
                                <div className="tyn-qa-message tyn-text-block">
                                    <Markdown>Start the conversation</Markdown>
                                </div>
                            </div>
                        )}
                        {selected?.messages?.map((item, index) => (
                            <div key={index} className="tyn-qa-item">
                                <div className="tyn-qa-avatar">
                                    <Media size="md">
                                        <img src={item.role === 'user' ? "images/avatar/1.jpg" : "images/avatar/bot-1.jpg"} alt="" />
                                    </Media>
                                </div>
                                <div className="tyn-qa-message tyn-text-block">
                                    <Markdown>{item.content}</Markdown>
                                </div>
                            </div>
                        ))}
                        {isBotTyping && (
                            <div className="tyn-qa-item">
                                <div className="tyn-qa-avatar">
                                    <Media size="md">
                                        <img src="images/avatar/bot-1.jpg" alt="" />
                                    </Media>
                                </div>
                                <div className="tyn-qa-message tyn-text-block">
                                    <span>Typing...</span>
                                </div>
                            </div>
                        )}
                    </div>
                </SimpleBar>
                <div className="tyn-chat-form border-0 ps-3 pe-4 py-3 bg-white mb-4 mx-4 rounded-3">
                    <div className="tyn-chat-form-enter">
                        <input
                            type="text"
                            className="tyn-chat-form-input"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleSendMessage();
                                }
                            }}
                            placeholder="Type your message..."
                        />
                        <ul className="tyn-list-inline me-n2 my-1">
                            <li>
                                <Button
                                    variant="white"
                                    size="md"
                                    className="btn-icon btn-pill"
                                    onClick={() => handleSendMessage()}
                                >
                                    <SendFill />
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Chatbot;