import React, { useState, useEffect, useRef } from 'react';
import Layout from '../../layout/main';
import { ChatRightTextFill, PersonUp, PlusLg, SendFill, Trash, XLg } from 'react-bootstrap-icons';
import { Button, Row, Col } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { Media } from '../../components';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getConversations, saveConversation } from '../../api/conversations';
import classNames from 'classnames';

function Chatbot() {
    let [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [conversations, setConversations] = useState([]);
    const [selected, setSelected] = useState();
    const [showMain, setShowMain] = useState(searchParams.get('id') !== null && true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [inputMessage, setInputMessage] = useState('');
    const chatWindow = useRef(null);

    const [currentPlan, setCurrentPlan] = useState('Free');

    // Fetch conversations from API
    const fetchConversations = async () => {
        try {
            setLoading(true);
            const sessionId = localStorage.getItem('sessionId'); // Assuming you store sessionId in localStorage
            const response = await getConversations(sessionId);
            setConversations(response.slice(0, 5)); // Limit to 10 conversations
            setError(null);
        } catch (err) {
            setError('Failed to load conversations');
            console.error('Error fetching conversations:', err);
        } finally {
            setLoading(false);
        }
    };

    // Handle sending new message
    const handleSendMessage = async () => {
        if (!inputMessage.trim() || !selected) return;

        const newMessage = {
            who: 'user',
            content: inputMessage,
            timestamp: new Date().toISOString()
        };

        const botMessage = {
            who: 'bot',
            content: 'We are offline, try again later',
            timestamp: new Date().toISOString()
        };

        try {
            const sessionId = localStorage.getItem('sessionId');
            const updatedConversation = {
                ...selected,
                chats: [...selected.chats, newMessage, botMessage]
            };

            await saveConversation(sessionId, updatedConversation);
            setSelected(updatedConversation);
            setInputMessage('');
            
            // Refresh conversations list
            fetchConversations();
        } catch (err) {
            console.error('Error saving message:', err);
            setError('Failed to send message');
        }
    };

    // Initial load of conversations and user plan
    useEffect(() => {
        fetchConversations();
        const userPlan = localStorage.getItem('userPlan') || 'Free';
        setCurrentPlan(userPlan);
    }, []);

    // Handle URL params and selected conversation
    useEffect(() => {
        const id = searchParams.get('id');
        if (id && conversations.length > 0) {
            const selectedConversation = conversations.find((item) => item.id === id);
            setSelected(selectedConversation);
        } else if (conversations.length > 0) {
            navigate(`/chatbot?id=${conversations[0].id}`);
        }
    }, [searchParams, conversations]);

    // Scroll to bottom of chat
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
                        {/* <span className="tyn-subtext">{conversations.length} Conversations</span> */}
                    </div>
                    <div className="tyn-aside-head-tools">
                        <ul className="tyn-list-inline gap gap-3">
                            <li>
                                <Button 
                                    variant="light" 
                                    size="md" 
                                    className="btn-icon btn-pill"
                                    onClick={() => {
                                        // Handle creating new conversation
                                        // You would implement this based on your requirements
                                    }}
                                >
                                    <PlusLg />
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <SimpleBar className="tyn-aside-body">
                    <ul className="tyn-aside-list">
                        {conversations.map((item, index) => (
                            <li
                                key={index}
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
                        ))}
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
                                    onClick={() => {
                                        // Handle clearing archive
                                        // You would implement this based on your requirements
                                    }}
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
                id="tynMain"
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
                <SimpleBar ref={chatWindow} className="tyn-chat-body m-4 rounded-3" id="tynBotBody">
                    <div className="tyn-qa" id="tynBotReply">
                        {selected?.chats?.map((item, index) => (
                            <div
                                key={index}
                                className={classNames({
                                    'tyn-qa-item': true,
                                    'rounded-bottom-3': selected.chats.length === index + 1,
                                })}
                            >
                                <div className="tyn-qa-avatar">
                                    <Media size="md">
                                        {item.who === 'user' && <img src="images/avatar/1.jpg" alt="" />}
                                        {item.who === 'bot' && <img src="images/avatar/bot-1.jpg" alt="" />}
                                    </Media>
                                </div>
                                <div className="tyn-qa-message tyn-text-block">
                                    <Markdown
                                        children={item.content}
                                        components={{
                                            code(props) {
                                                const { children, className, node, inline, ...rest } = props;
                                                const match = /language-(\w+)/.exec(className || '');
                                                const [copied, setCopied] = useState(false);
                                                return !inline && match ? (
                                                    <div className="tyn-code-block">
                                                        <h6 className="tyn-code-block-title tyn-overline">{match[1]}</h6>
                                                        <CopyToClipboard
                                                            className="tyn-copy"
                                                            text={children}
                                                            onCopy={() => {
                                                                setCopied(true);
                                                                setTimeout(() => setCopied(false), 1000);
                                                            }}
                                                        >
                                                            <button>{copied ? 'Copied' : 'Copy'}</button>
                                                        </CopyToClipboard>
                                                        <SyntaxHighlighter
                                                            {...rest}
                                                            children={String(children).replace(/\n$/, '')}
                                                            language={match[1]}
                                                            useInlineStyles={false}
                                                            className={className}
                                                        />
                                                    </div>
                                                ) : (
                                                    <code {...rest} className={className}>
                                                        {children}
                                                    </code>
                                                );
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
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
                                    onClick={handleSendMessage}
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