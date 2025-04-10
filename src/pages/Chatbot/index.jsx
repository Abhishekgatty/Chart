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
import { getProfilePic } from '../../api/user';
import { getSubscriptionDetails } from '../../api/subscriptions';

// Typing animation CSS (unchanged)
const typingAnimationStyles = `
  .typing-animation {
    display: inline-flex;
    align-items: center;
  }
  .typing-dot {
    width: 8px;
    height: 8px;
    background-color: #888;
    border-radius: 50%;
    margin: 0 2px;
    animation: typing 1.4s infinite ease-in-out;
  }
  .typing-dot:nth-child(1) {
    animation-delay: 0s;
  }
  .typing-dot:nth-child(2) {
    animation-delay: 0.2s;
  }
  .typing-dot:nth-child(3) {
    animation-delay: 0.4s;
  }
  @keyframes typing {
    0%, 80%, 100% {
      opacity: 0.2;
    }
    40% {
      opacity: 1;
    }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = typingAnimationStyles;
document.head.appendChild(styleSheet);

const CHATBOT_BASE_URL = 'http://204.12.227.152:8000';

function Chatbot() {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [archivedSessions, setArchivedSessions] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showMain, setShowMain] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputMessage, setInputMessage] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isArchivedView, setIsArchivedView] = useState(false);
  const [suggestionTopic, setSuggestionTopic] = useState('');
  const [suggestedQuestions, setSuggestedQuestions] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [fullResponse, setFullResponse] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const chatWindow = useRef(null);
  const [currentPlan, setCurrentPlan] = useState('Free');

  const sessionId = localStorage.getItem('sessionId');
  const { userData, loading: userLoading, error: userError } = useUserData(sessionId);

  console.log('Chatbot - Initial render - sessionId:', sessionId);
  console.log('Chatbot - Initial render - userData:', userData, 'userLoading:', userLoading, 'userError:', userError);

  useEffect(() => {
    const fetchProfilePic = async () => {
      if (!sessionId) return;
      try {
        console.log('Chatbot - Fetching profile picture with sessionId:', sessionId);
        const imageUrl = await getProfilePic(sessionId);
        console.log('Chatbot - Successfully fetched profile picture URL:', imageUrl);
        setProfilePic(imageUrl);
      } catch (err) {
        console.error('Chatbot - Failed to fetch profile picture:', err.message);
        setProfilePic('/images/avatar/1.jpg');
      }
    };

    fetchProfilePic();
  }, [sessionId]);

  useEffect(() => {
    console.log('Chatbot - Running initialization effect');
    const fetchSubscription = async () => {
      try {
        if (!sessionId) return;
        console.log('Chatbot - Fetching subscription with sessionId:', sessionId);
        const response = await getSubscriptionDetails(sessionId);
        console.log('Chatbot - Subscription response:', response);
        const activeSubscription = Array.isArray(response) && response.find(sub => sub.status === 'Active');
        const plan = activeSubscription ? activeSubscription.subscriptionType : 'Free';
        setCurrentPlan(plan);
        localStorage.setItem('userPlan', plan);
      } catch (err) {
        console.error('Chatbot - Error fetching subscription:', err.message);
        setCurrentPlan('Free');
        localStorage.setItem('userPlan', 'Free');
      }
    };

    if (sessionId && !userLoading && userData) {
      initializeNewConversation();
      fetchArchivedSessions();
      fetchSubscription();
    } else {
      console.log('Chatbot - Waiting for sessionId or userData');
    }
  }, [sessionId, userLoading, userData]);

  useEffect(() => {
    if (chatWindow.current) {
      const scrollElement = chatWindow.current.contentWrapperEl;
      scrollElement.scrollTop = scrollElement.scrollHeight;
    }
  }, [selectedConversation, displayedResponse]);

  // Typing effect for bot response
  useEffect(() => {
    if (fullResponse && !isBotTyping) {
      let index = 0;
      const speed = 10; // Typing speed (ms per character)
      setDisplayedResponse('');

      const typeResponse = () => {
        if (index < fullResponse.length) {
          setDisplayedResponse(fullResponse.slice(0, index + 1));
          index++;
          setTimeout(typeResponse, speed);
        } else {
          setSelectedConversation((prev) => ({
            ...prev,
            messages: [...prev.messages.slice(0, -1), { role: 'bot', content: fullResponse }],
          }));
          setFullResponse('');
        }
      };

      typeResponse();
    }
  }, [fullResponse]);

  const initializeNewConversation = () => {
    console.log('Chatbot - Initializing new conversation');
    const newConversation = {
      id: Date.now().toString(),
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

      const allMessages = [];
      data.forEach(conv => {
        if (Array.isArray(conv.messages)) {
          conv.messages.forEach(msg => {
            if (msg.user_message) {
              allMessages.push({ role: 'user', content: msg.user_message });
            }
            if (msg.actual_response) {
              allMessages.push({ role: 'bot', content: msg.actual_response });
            }
          });
        }
      });

      const combinedConversation = {
        id: pastSessionId,
        messages: allMessages,
        timestamp: data.length > 0 ? data[0].timestamp : new Date().toISOString(),
      };

      setConversations(data);
      setSelectedSession(pastSessionId);
      setSelectedConversation(combinedConversation);
      setShowMain(true);
      setIsArchivedView(true);
      setSuggestionTopic('');
      setSuggestedQuestions('');
    } catch (err) {
      setError('Failed to load conversations');
      console.error('Error fetching conversations:', err);
      setSelectedConversation({ id: pastSessionId, messages: [], timestamp: new Date().toISOString() });
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
      setSuggestionTopic(''); // Clear suggestions when user types manually
      setSuggestedQuestions('');
    }

    setIsBotTyping(true);

    try {
      if (!sessionId || !userData?.id) throw new Error('Required user data missing');

      const userType = userData.year ? 1 : 0;

      let requestBody;
      if (userType === 0) {
        requestBody = {
          user_type: 0,
          user_id: String(userData.id),
          session_id: String(sessionId),
          user_question: messageToSend,
        };
      } else {
        requestBody = {
          user_type: 1,
          user_id: String(userData.id),
          session_id: String(sessionId),
          user_question: messageToSend,
          user_department: String(userData.course || 'Nursing'),
          user_year: String(userData.year || '1'),
          user_semester: String(userData.semester || '2'),
        };
      }

      console.log('Chatbot - Sending request to API:', {
        url: `${CHATBOT_BASE_URL}/api/v1/chat`,
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
        body: JSON.stringify(requestBody, null, 2),
      });

      const response = await axios.post(`${CHATBOT_BASE_URL}/api/v1/chat`, requestBody, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
      });

      console.log('Chatbot - Response received:', response.data);
      const data = response.data;
      let botResponse = data.final_result || 'Error getting response';

      // Append suggestions to the response with separate lines
      if (data.suggested_topics || data.suggested_questions) {
        setSuggestionTopic(data.suggested_topics || '');
        setSuggestedQuestions(data.suggested_questions || '');
        botResponse += `\n\n**Suggested Topic:** ${data.suggested_topics || ''}\n\n**Suggested Question:** ${data.suggested_questions || ''}\n\nWould you like to proceed with the suggested question?`;
      }

      setSelectedConversation((prev) => ({
        ...prev,
        messages: [...prev.messages, { role: 'bot', content: '' }],
      }));
      setFullResponse(botResponse);
    } catch (err) {
      console.error('Chatbot - Error sending message:', {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });

      let errorMessageContent = 'Sorry, there was an error processing your request';
      if (err.response?.status === 422) {
        const validationErrors = err.response?.data?.detail || 'Unknown validation error';
        errorMessageContent = `Invalid request: ${JSON.stringify(validationErrors)}`;
      } else {
        errorMessageContent = `Sorry, there was an error: ${err.message}`;
      }

      setFullResponse(errorMessageContent);
      setSelectedConversation((prev) => ({
        ...prev,
        messages: [...prev.messages, { role: 'bot', content: '' }],
      }));
      setError(err.response?.data?.message || err.message);
    } finally {
      setIsBotTyping(false);
    }
  };

  const handleSuggestionResponse = (response) => {
    if (response === 'yes' && suggestedQuestions) {
      handleSendMessage(suggestedQuestions); // Send the suggested question
    } else {
      setSuggestionTopic('');
      setSuggestedQuestions('');
    }
  };

  const getPlanButtonText = () => {
    if (currentPlan === 'Free') {
      return (
        <>
          <PersonUp />
          <span className="small text-nowrap mt-n1">Become Pro</span>
        </>
      );
    } else {
      return (
        <>
          <PersonUp />
          <span className="small text-nowrap mt-n1">{currentPlan} Plan</span>
          <span className="small text-nowrap d-block" style={{ fontSize: '10px' }}>Upgrade Now</span>
        </>
      );
    }
  };

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
                <ul className="tyn-list-inline gap gap-3 p-2">
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
              {/* Archived sessions list (unchanged) */}
            </SimpleBar>
            <div className="tyn-aside-foot">
              <div className="w-100">
                <Row as="ul" className="gx-3">
                  <Col key="upgrade-btn" as="li" xs="6">
                    <Link 
                      to="/pricing" 
                      className={`btn ${currentPlan === 'Free' ? 'btn-primary' : 'btn-outline-primary'} btn-lg w-100 flex-column py-2 pt-3`}
                    >
                      {getPlanButtonText()}
                    </Link>
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
                        <img src="images/avatar/bot-1.jpg" alt="Bot" />
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
                        'd-flex flex-row row-reverse': item.role === 'user',
                      })}
                    >
                      {item.role === 'bot' && (
                        <div className="tyn-qa-avatar me-2">
                          <Media size="md">
                            <img src="images/avatar/bot-1.jpg" alt="Bot" />
                          </Media>
                        </div>
                      )}
                      <div
                        className={classNames('tyn-qa-message tyn-text-block', {
                          'text-start': item.role === 'bot',
                          'text-end': item.role === 'user',
                        })}
                      >
                        <Markdown>
                          {item.role === 'bot' && index === selectedConversation.messages.length - 1 && fullResponse
                            ? displayedResponse
                            : item.content}
                        </Markdown>
                        {item.role === 'bot' && index === selectedConversation.messages.length - 1 && !fullResponse && (suggestionTopic || suggestedQuestions) && (
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
                        )}
                      </div>
                      {item.role === 'user' && (
                        <div className="tyn-qa-avatar ms-2">
                          <Media size="md">
                            <img src={profilePic || '/images/avatar/1.jpg'} alt="User" />
                          </Media>
                        </div>
                      )}
                    </div>
                  ))}
                  {isBotTyping && (
                    <div className="tyn-qa-item d-flex flex-row">
                      <div className="tyn-qa-avatar me-2">
                        <Media size="md">
                          <img src="images/avatar/bot-1.jpg" alt="Bot" />
                        </Media>
                      </div>
                      <div className="tyn-qa-message tyn-text-block text-start">
                        <span className="typing-animation">
                          <span className="typing-dot"></span>
                          <span className="typing-dot"></span>
                          <span className="typing-dot"></span>
                        </span>
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
                  disabled={isArchivedView || isBotTyping}
                />
                <ul className="tyn-list-inline me-n2 my-1">
                  <li key="send-btn">
                    <Button
                      variant="white"
                      size="md"
                      className="btn-icon btn-pill"
                      onClick={() => handleSendMessage()}
                      disabled={isArchivedView || isBotTyping}
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