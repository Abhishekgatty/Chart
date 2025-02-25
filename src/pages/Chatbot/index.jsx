import React, { useState, useEffect, useRef } from 'react';
import Layout from '../../layout/main';
import { ChatRightTextFill, PersonUp, PlusLg, SendFill, Trash, XLg } from 'react-bootstrap-icons';
import { Button, Row, Col } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { Media } from '../../components';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUserData } from '../../store/user';
import classNames from 'classnames';
import axios from 'axios';
import { getArchivedSessions, getConversations } from '../../api/conversations';

const CHATBOT_BASE_URL = 'http://204.12.227.152:8000';

function Chatbot() {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [archivedSessions, setArchivedSessions] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showMain, setShowMain] = useState(true); // Show main chat by default
  const [loading, setLoading] = useState(false); // No initial loading
  const [error, setError] = useState(null);
  const [inputMessage, setInputMessage] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isArchivedView, setIsArchivedView] = useState(false); // Track if viewing archived conversation
  const [suggestionTopic, setSuggestionTopic] = useState(''); // State for suggestion_topic
  const [suggestedQuestions, setSuggestedQuestions] = useState(''); // State for suggested_questions
  const chatWindow = useRef(null);
  const [currentPlan, setCurrentPlan] = useState('Free');

  const sessionId = localStorage.getItem('sessionId');
  const { userData, loading: userLoading, error: userError } = useUserData(sessionId);

  // Initialize a new conversation on mount/refresh
  const initializeNewConversation = () => {
    const newConversation = {
      id: Date.now().toString(), // Temporary ID
      messages: [],
      timestamp: new Date().toISOString(),
    };
    setSelectedConversation(newConversation);
    setSelectedSession(null);
    setConversations([]);
    setIsArchivedView(false);
    setSuggestionTopic('');
    setSuggestedQuestions('');
    setShowMain(true);
  };

  const fetchArchivedSessions = async () => {
    try {
      setLoading(true);
      if (!sessionId) throw new Error('No session ID found');
      const data = await getArchivedSessions(sessionId);
      setArchivedSessions(data);
      setError(null);
    } catch (err) {
      setError('Failed to load archived sessions');
      console.error('Error fetching archived sessions:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchConversations = async (pastSessionId) => {
    try {
      setLoading(true);
      if (!sessionId) throw new Error('No session ID found');
      const data = await getConversations(sessionId, pastSessionId);
      setConversations(data);
      setSelectedSession(pastSessionId);
      setShowMain(true);
      setIsArchivedView(true); // Mark as archived view
      setSuggestionTopic(''); // Clear suggestions when viewing archived
      setSuggestedQuestions('');
      if (data.length > 0) {
        setSelectedConversation(data[0]); // Select first conversation
      } else {
        setSelectedConversation(null); // No conversations in this session
      }
    } catch (err) {
      setError('Failed to load conversations');
      console.error('Error fetching conversations:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (messageInput = null) => {
    const messageToSend = messageInput || inputMessage;
    if (!messageToSend.trim() || !selectedConversation || isArchivedView) return;

    let currentConversation = selectedConversation;
    if (!currentConversation) {
      currentConversation = {
        id: Date.now().toString(),
        messages: [],
        timestamp: new Date().toISOString(),
      };
      setSelectedConversation(currentConversation);
    }

    const userMessage = { role: 'user', content: messageToSend };
    const updatedMessages = currentConversation.messages ? [...currentConversation.messages, userMessage] : [userMessage];
    const tempConversation = {
      ...currentConversation,
      messages: updatedMessages,
    };
    setSelectedConversation(tempConversation);

    if (!messageInput) {
      setInputMessage('');
    }

    setIsBotTyping(true);

    try {
      if (!sessionId || !userData?.id) throw new Error('Required user data missing');

      const url = `${CHATBOT_BASE_URL}/chatbot/send_message`;
      const response = await axios.post(url, null, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        params: {
          user_id: userData.id,
          session_id: sessionId,
          user_department: 'Nursing',
          user_year: userData.year,
          user_semester: userData.semester,
          message: messageToSend,
        },
      });

      const data = response.data;
      const botMessage = { role: 'bot', content: data.actual_response || 'Error getting response' };
      const updatedConversation = {
        ...tempConversation,
        messages: [...tempConversation.messages, botMessage],
        timestamp: new Date().toISOString(),
      };

      setSelectedConversation(updatedConversation);
      setSuggestionTopic(data.suggestion_topic || ''); // Store suggestion_topic
      setSuggestedQuestions(data.suggested_questions || ''); // Store suggested_questions
    } catch (err) {
      console.error('Error sending message:', err);
      setError(err.response?.data?.message || err.message);
      const errorMessage = { role: 'bot', content: `Sorry, there was an error: ${err.message}` };
      setSelectedConversation(prev => ({
        ...prev,
        messages: prev?.messages ? [...prev.messages, errorMessage] : [errorMessage],
      }));
    } finally {
      setIsBotTyping(false);
    }
  };

  const handleSuggestionResponse = (response) => {
    if (response === 'yes' && suggestedQuestions) {
      handleSendMessage(suggestedQuestions); // Send suggested question as a new message
    }
    setSuggestionTopic(''); // Clear suggestion after response
    setSuggestedQuestions('');
  };

  useEffect(() => {
    initializeNewConversation(); // Start with new conversation on mount/refresh
    fetchArchivedSessions(); // Fetch archived sessions for the sidebar
    const userPlan = localStorage.getItem('userPlan') || 'Free';
    setCurrentPlan(userPlan);
  }, []);

  useEffect(() => {
    if (chatWindow.current) {
      const scrollElement = chatWindow.current.contentWrapperEl;
      scrollElement.scrollTop = scrollElement.scrollHeight;
    }
  }, [selectedConversation]);

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
      ) : (
        <>
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
                      onClick={initializeNewConversation}
                    >
                      <PlusLg />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <SimpleBar className="tyn-aside-body">
              {/* <ul className="tyn-aside-list">
                {loading && archivedSessions.length === 0 ? (
                  <div>Loading archived sessions...</div>
                ) : archivedSessions.length > 0 ? (
                  archivedSessions.map((session) => (
                    <li
                      key={session.sessionId}
                      className={classNames({
                        'tyn-aside-item': true,
                        active: session.sessionId === selectedSession,
                      })}
                      onClick={() => fetchConversations(session.sessionId)}
                    >
                      <Media.Group>
                        <Media size="sm">
                          <ChatRightTextFill />
                        </Media>
                        <Media.Col>
                          <div className="content">
                            <div>{new Date(session.timestamp).toLocaleString()}</div>
                            <small>Messages: {session.conversationCount}</small>
                          </div>
                        </Media.Col>
                      </Media.Group>
                    </li>
                  ))
                ) : (
                  <div>No archived sessions found.</div>
                )}
              </ul> */}
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
                      onClick={() => {}}
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
          >
            {error && (
              <div className="alert alert-danger m-4" role="alert">
                <h4 className="alert-heading">Error</h4>
                <p>{error}</p>
              </div>
            )}
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
              {loading ? (
                <div className="d-flex justify-content-center align-items-center p-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (!selectedConversation?.messages || selectedConversation.messages.length === 0) ? (
                <div className="tyn-qa">
                  <div className="tyn-qa-item">
                    <div className="tyn-qa-avatar">
                      <Media size="md">
                        <img src="images/avatar/bot-1.jpg" alt="" />
                      </Media>
                    </div>
                    <div className="tyn-qa-message tyn-text-block">
                      <Markdown>{isArchivedView ? 'No messages in this archived conversation' : 'Start a new conversation'}</Markdown>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="tyn-qa">
                  {selectedConversation.messages.map((item, index) => (
                    <div
                      key={index}
                      className={classNames('tyn-qa-item', {
                        'd-flex flex-row': item.role === 'bot',
                        'd-flex flex-col-reverse': item.role === 'user',
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
                          'text-end': item.role === 'user',
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
                        {suggestionTopic && (
                          <p>
                            <strong>Suggestion Topic:</strong> <Markdown>{suggestionTopic}</Markdown>
                          </p>
                        )}
                        {suggestedQuestions && (
                          <p>
                            <strong>Suggested Question:</strong> <Markdown>{suggestedQuestions}</Markdown>
                          </p>
                        )}
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
                        <p style={{ fontSize: '10px', color: 'green', marginTop: '10px' }}>
                          Note: Click yes to proceed with suggested question
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </SimpleBar>
            <div className="tyn-chat-form border-0 ps-3 pe-4 py-3 bg-white mb-4 mx-4 rounded-3">
              <div className="tyn-chat-form-enter">
                <input
                  type="text"
                  className="tyn-chat-form-input"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !isArchivedView) {
                      handleSendMessage();
                    }
                  }}
                  placeholder="Type your message..."
                  disabled={isArchivedView || isBotTyping} // Disable when archived or typing
                />
                <ul className="tyn-list-inline me-n2 my-1">
                  <li key="send-btn">
                    <Button
                      variant="white"
                      size="md"
                      className="btn-icon btn-pill"
                      onClick={() => handleSendMessage()}
                      disabled={isArchivedView || isBotTyping} // Disable button too
                    >
                      <SendFill />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Chatbot;