import React, { useState, useEffect, useRef } from 'react';
import Layout from '../../layout/main';
import { ChatRightTextFill, PersonUp, PlusLg, SendFill, Trash, XLg } from 'react-bootstrap-icons';
import { Button, Row, Col } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { Media } from '../../components';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getConversations, saveConversation } from '../../api/conversations';
import { useUserData } from '../../store/user';
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
    const [suggestionTopic, setSuggestionTopic] = useState(''); // State for suggestion_topic
    const [suggestedQuestions, setSuggestedQuestions] = useState(''); // State for suggested_questions
    const chatWindow = useRef(null);
    const [currentPlan, setCurrentPlan] = useState('Free');

    const sessionId = localStorage.getItem('sessionId');
    const { userData, loading: userLoading, error: userError } = useUserData(sessionId);

    const createNewConversation = async () => {
        try {
            if (!sessionId) throw new Error('No session ID found');
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
            if (!sessionId) throw new Error('No session ID found');
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
            if (!sessionId) throw new Error('No session ID found');
            if (!userData || !userData.id) throw new Error('User ID not available');

            const url = `${CHATBOT_BASE_URL}/chatbot/send_message?user_id=${userData.id}&session_id=${encodeURIComponent(sessionId)}&user_department=${encodeURIComponent('Nursing')}&user_year=4&user_semester=2&message=${encodeURIComponent(messageToSend)}`;

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

            const botMessage = { role: 'bot', content: data.actual_response || "Error getting response" };
            const updatedConversation = {
                ...tempConversation,
                messages: [...tempConversation.messages, botMessage],
                timestamp: new Date().toISOString()
            };

            setSelected(updatedConversation);
            setSuggestionTopic(data.suggestion_topic || ''); // Store suggestion_topic
            setSuggestedQuestions(data.suggested_questions || ''); // Store suggested_questions

            try {
                const savedConversation = await saveConversation(sessionId, updatedConversation);
                console.log('Conversation saved:', savedConversation);
                if (savedConversation.id !== updatedConversation.id) {
                    setSelected({ ...updatedConversation, id: savedConversation.id });
                    navigate(`/chatbot?id=${savedConversation.id}`);
                }
                setConversations(prev =>
                    prev.map(conv => conv.id === updatedConversation.id ? savedConversation : conv)
                );
            } catch (saveErr) {
                console.error('Error saving conversation:', saveErr);
                setError('Failed to save conversation');
            }
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

    const handleSuggestionResponse = (response) => {
        if (response === 'yes' && suggestedQuestions) {
            handleSendMessage(suggestedQuestions); // Send suggested_questions as a new message
        }
        setSuggestionTopic(''); // Clear suggestion after response
        setSuggestedQuestions('');
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

    // if (userLoading) {
    //     return <div className="text-center p-4">Loading user data...</div>;
    // }

    // if (userError || !userData) {
    //     return <div className="text-center p-4 text-danger">Error loading user data or not logged in</div>;
    // }

    // if (loading && conversations.length === 0) {
    //     return <div className="text-center p-4">Loading conversations...</div>;
    // }

    // if (error && conversations.length === 0) {
    //     return <div className="text-center p-4 text-danger">{error}</div>;
    // }

    return (
        <Layout title="Chatbot" content="tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base">
            {userLoading ? (
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-center p-4">Loading user data...</div>
                </div>
            ) : userError || !userData ? (
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading">Error!</h4>
                        <p>{userError || 'User data not available. Please try logging in again.'}</p>
                        <hr />
                        <p className="mb-0">
                            <Link to="/login" className="btn btn-outline-danger">
                                Go to Login
                            </Link>
                        </p>
                    </div>
                </div>
            ) : (<>
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
                                        disabled
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
                                <Col key="upgrade-btn" as="li" xs="6">
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
                                <Col key="clear-archive-btn" as="li" xs="6">
                                    <Button
                                        variant="light"
                                        size="lg"
                                        className="w-100 flex-column py-2 pt-3"
                                        onClick={() => { }}
                                        disabled
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
                >{error && conversations.length === 0 ? (
                    <div className="alert alert-danger m-4" role="alert">
                        <h4 className="alert-heading">Failed to Load Conversations</h4>
                        <p>{error}</p>
                        <hr />
                        <Button
                            variant="outline-danger"
                            onClick={() => fetchConversations()}
                            className="mt-2"
                        >
                            Retry Loading
                        </Button>
                    </div>
                ) : (
                    <>
                        <ul className="tyn-list-inline d-md-none translate-middle-x position-absolute start-50 z-1">
                            <li key="close-btn">
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
                            {loading && conversations.length === 0 ? (
                                <div className="d-flex justify-content-center align-items-center p-5">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="spinner-border text-primary mb-3" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <div>Loading conversations...</div>
                                    </div>
                                </div>
                            ) : (<div className="tyn-qa">
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
                                    <div
                                        key={index}
                                        className={classNames('tyn-qa-item', {
                                            'd-flex flex-row': item.role === 'bot',
                                            'd-flex flex-col-reverse': item.role === 'user'
                                        })}
                                    >
                                        {item.role === 'bot' && (
                                            <div className="tyn-qa-avatar me-2">
                                                <Media size="md">
                                                    <img src="images/avatar/bot-1.jpg" alt="" />
                                                </Media>
                                            </div>
                                        )}
                                        <div
                                            className={classNames('tyn-qa-message tyn-text-block', {
                                                'text-start': item.role === 'bot',
                                                'text-end': item.role === 'user'
                                            })}
                                        >
                                            <Markdown>{item.content}</Markdown>
                                        </div>
                                        {item.role === 'user' && (
                                            <div className="tyn-qa-avatar ms-2">
                                                <Media size="md">
                                                    <img src="images/avatar/1.jpg" alt="" />
                                                </Media>
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {isBotTyping && (
                                    <div className="tyn-qa-item d-flex flex-row">
                                        <div className="tyn-qa-avatar me-2">
                                            <Media size="md">
                                                <img src="images/avatar/bot-1.jpg" alt="" />
                                            </Media>
                                        </div>
                                        <div className="tyn-qa-message tyn-text-block text-start">
                                            <span>Typing...</span>
                                        </div>
                                    </div>
                                )}
                                {(suggestionTopic || suggestedQuestions) && (
                                    <div className="tyn-qa-item d-flex flex-row">
                                        <div className="tyn-qa-avatar me-2">
                                            <Media size="md">
                                                <img src="images/avatar/bot-1.jpg" alt="" />
                                            </Media>
                                        </div>
                                        <div className="tyn-qa-message tyn-text-block text-start">
                                            {suggestionTopic && <p><strong>Suggestion Topic:</strong> <Markdown>{suggestionTopic}</Markdown></p>}
                                            {suggestedQuestions && <p><strong>Suggested Question:</strong> <Markdown>{suggestedQuestions}</Markdown></p>}
                                            <div className="mt-2">
                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    className="me-2"
                                                    onClick={() => handleSuggestionResponse('yes')}
                                                >
                                                    Yes
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    onClick={() => handleSuggestionResponse('no')}
                                                >
                                                    No
                                                </Button>
                                            </div>
                                            <p style={{ fontSize: "10px", color: "green", marginTop: "10px" }}>Note: Click yes to procced with suggested question</p>
                                        </div>
                                    </div>
                                )}
                            </div>)}
                        </SimpleBar>
                        <div className="tyn-chat-form border-0 ps-3 pe-4 py-3 bg-white mb-4 mx-4 rounded-3">
                            <div className="tyn-chat-form-enter">
                                <input
                                    type="text"
                                    className="tyn-chat-form-input"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSendMessage();
                                        }
                                    }}
                                    placeholder="Type your message..."
                                />
                                <ul className="tyn-list-inline me-n2 my-1">
                                    <li key="send-btn">
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
                    </>
                )}
                </div>
            </>
            )}
        </Layout>
    );
}

export default Chatbot;