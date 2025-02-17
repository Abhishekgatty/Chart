import React, {useState, useEffect, useRef} from 'react';
import Layout from '../../layout/main'
import { ChatRightTextFill, PersonUp, PlusLg, SendFill, Trash, XLg } from 'react-bootstrap-icons';
import { Button, Row, Col } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import { Media } from '../../components';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useNavigate, useSearchParams } from 'react-router-dom';
import chatbot from '../../store/chatbot'
import classNames from 'classnames';

function Chatbot() {

    let [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [chatbotData] = useState(chatbot);
    const [selected, setSelected] = useState();

    const [showMain, setShowMain] = useState(searchParams.get('id') !== null && true);

    const chatWindow = useRef(null);
  
  // grabs the id of the url and loads the corresponding data
    useEffect(() => {
        const id = searchParams.get('id');
        if (id !== undefined || null || "") {
            let selectedChatbot = chatbotData.find((item) => item.id === id);
            setSelected(selectedChatbot);
        };
        if (id == undefined || null || "") {
            navigate(`/chatbot?id=${chatbotData[0].id}`)
        }
    }, [searchParams, chatbotData]);

    useEffect(() => {
        if (chatWindow.current) {
            const scrollElement = chatWindow.current.contentWrapperEl;
            scrollElement.scrollTop = scrollElement.scrollHeight;
        }
    }, [selected])


  return (
    <Layout title="Chatbot" content="tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base">
      <div className="tyn-aside tyn-aside-base">
        <div className="tyn-aside-head">
            <div className="tyn-aside-head-text">
                <h3 className="tyn-aside-title tyn-title">Chat Archive</h3>
                <span className="tyn-subtext">200+ Conversations </span>
            </div>
            <div className="tyn-aside-head-tools">
                <ul className="tyn-list-inline gap gap-3">
                    <li><Button variant="light" size="md" className="btn-icon btn-pill"><PlusLg></PlusLg></Button></li>
                </ul>
            </div>
        </div>
        <SimpleBar className="tyn-aside-body">
            <ul className="tyn-aside-list">
              {chatbotData.map((item,index)=>{
                return(
                  <li key={index} className={classNames({"tyn-aside-item":true, "active":item.id == selected?.id})} 
                    onClick={(ev) => {
                        ev.preventDefault();
                        if(!ev.target.closest('.tyn-aside-item-option')){
                            navigate(`/chatbot?id=${item.id}`);
                            setShowMain(true);
                        }
                    }}>
                    <Media.Group>
                        <Media size="sm">
                            <ChatRightTextFill />
                        </Media>
                        <Media.Col>
                            <div className="content">{item.title}</div>
                        </Media.Col>
                    </Media.Group>
                  </li>
                )
              })}
            </ul>
        </SimpleBar>
        <div className="tyn-aside-foot">
            <div className="w-100">
                <Row as="ul" className="gx-3">
                    <Col as="li" xs="6">
                        <Link to="/pricing" className="btn btn-light btn-lg w-100 flex-column py-2 pt-3">
                            <PersonUp />
                            <span className="small text-nowrap mt-n1">Become Pro</span>
                        </Link>
                    </Col>
                    <Col as="li" xs="6">
                        <Button variant="light" size="lg" className="w-100 flex-column py-2 pt-3">
                            <Trash />
                            <span className="small text-nowrap mt-n1">Clear Archive</span>
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
      </div>
        <div className={classNames({
            "tyn-main tyn-main-boxed tyn-main-boxed-lg":true,
            "main-shown": showMain
        })} id="tynMain">
            <ul className="tyn-list-inline d-md-none translate-middle-x position-absolute start-50 z-1">
                <li>
                    <Button variant="white" className="btn-icon btn-pill" onClick={()=>{
                        setShowMain(false);
                    }}>
                        <XLg />
                    </Button>
                </li>
            </ul>
            <SimpleBar ref={chatWindow} className="tyn-chat-body m-4 rounded-3" id="tynBotBody">
                <div className="tyn-qa" id="tynBotReply">
                {selected?.chats?.map((item,index)=> {
                    return(
                    <div key={index} className={classNames({
                        "tyn-qa-item":true,
                        "rounded-bottom-3": selected.chats.length == index + 1,
                    })}>
                        <div className="tyn-qa-avatar">
                            <Media size="md">
                                {item.who === "human" &&<img src="images/avatar/1.jpg" alt="" />}
                                {item.who === "bot" &&<img src="images/avatar/bot-1.jpg" alt="" />}
                            </Media>
                        </div>
                        <div className="tyn-qa-message tyn-text-block">
                            <Markdown
                                children={item.content}
                                components={{
                                code(props) {
                                    const {children, className, node, inline, ...rest} = props
                                    const match = /language-(\w+)/.exec(className || '')
                                    const [copied, setCopied] = useState(false);
                                    return !inline && match ? (
                                        <div className="tyn-code-block">
                                            <h6 className="tyn-code-block-title tyn-overline">{match[1]}</h6> 
                                            <CopyToClipboard className="tyn-copy" text={children} onCopy={() => {setCopied(true); setTimeout(() => {setCopied(false)}, 1000);}}>
                                                <button>{copied ? "Copied" : "Copy"}</button>
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
                                    )
                                }
                                }}
                            />
                        </div>
                    </div>
                    )
                })}
                </div>
            </SimpleBar>
            <div className="tyn-chat-form border-0 ps-3 pe-4 py-3 bg-white mb-4 mx-4 rounded-3">
                <div className="tyn-chat-form-enter">
                    <div className="tyn-chat-form-input" id="tynBotInput" placeholder="text" contentEditable></div>
                    <ul className="tyn-list-inline me-n2 my-1">
                        <li><Button variant="white" size="md" className="btn-icon btn-pill"><SendFill /></Button></li>
                    </ul>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Chatbot