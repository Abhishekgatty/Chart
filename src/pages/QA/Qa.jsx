



// import React, { useState, useRef } from 'react';
// import Layout from '../../layout/main';
// import { Accordion } from 'react-bootstrap'
// import {
//   PersonUp,
//   PlusLg,
//   Trash,
// } from 'react-bootstrap-icons';
// import { Button, Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const Qa = () => {
//   const [showMain] = useState(true);
//   const [file, setFile] = useState(null);
//   const [fileDate, setFileDate] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadComplete, setUploadComplete] = useState(false);
//    const[questions,setQuestions]=useState([])
//   const fileInputRef = useRef();
//   const inputRef = useRef();

//   const handleChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setFileDate(new Date());
//       setUploadComplete(false);
//       setQuestions([]) // Reset when a new file is selected
//     }
//   };

//   const handleClear = () => {
//     setFile(null);
//     setFileDate(null);
//     setUploadProgress(0);
//     setUploadComplete(false); // Reset completion state
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const handleUpload = () => {
//     if (!file) return;

//     setIsUploading(true);
//     setUploadProgress(0);

//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += 10;
//       setUploadProgress(progress);
//       if (progress >= 100) {
//         clearInterval(interval);
//         setIsUploading(false);
//         setUploadComplete(true); // Set upload as complete
//       }
//     }, 300);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files[0];
//     if (droppedFile) {
//       setFile(droppedFile);
//       setFileDate(new Date());
//     }
//   };

//   return (
//     <Layout title="Chatbot" content="tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base">
//       {/* Sidebar */}
//       <div className="tyn-aside tyn-aside-base">
//         <div className="tyn-aside-head">
//           <div className="tyn-aside-head-text">
//             <h3 className="tyn-aside-title tyn-title">Chat Archive</h3>
//             <span className="tyn-subtext">200+ Conversations</span>
//           </div>
//           <div className="tyn-aside-head-tools">
//             <ul className="tyn-list-inline gap gap-3">
//               <li>
//                 <Button variant="light" size="md" className="btn-icon btn-pill">
//                   <PlusLg />
//                 </Button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <SimpleBar className="tyn-aside-body px-3 py-2">
//           <ul className="list-unstyled">
//             {/* Chat list placeholder */}
//           </ul>
//         </SimpleBar>

//         <div className="tyn-aside-foot">
//           <Row as="ul" className="gx-3">
//             <Col as="li" xs="6">
//               <Link to="/pricing" className="btn btn-light btn-lg w-100 flex-column py-2 pt-3">
//                 <PersonUp />
//                 <span className="small text-nowrap mt-n1">Become Pro</span>
//               </Link>
//             </Col>
//             <Col as="li" xs="6">
//               <Button variant="light" size="lg" className="w-100 flex-column py-2 pt-3">
//                 <Trash />
//                 <span className="small text-nowrap mt-n1">Clear Archive</span>
//               </Button>
//             </Col>
//           </Row>
//         </div>
//       </div>

//       {/* Main Chat Area */}
//       <div className={classNames({ 'tyn-main': true, 'main-shown': showMain })} id="tynMain">
//         <div className="p-4" style={{ minHeight: '80vh' }}>
//           <div className="card p-4" style={{ minHeight: '100vh' }}>

//             {/* Upload Controls */}
//             {!uploadComplete && (  // Hide buttons when upload is complete
//               <div className="d-flex align-items-center gap-2 mb-3">
//                 <label className="btn btn-outline-primary rounded-circle mb-0">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     hidden
//                     onChange={handleChange}
//                     ref={fileInputRef}
//                   />
//                   <i className="bi bi-image"></i>
//                 </label>

//                 <button
//                   onClick={handleUpload}
//                   className="btn btn-outline-success rounded-circle"
//                   disabled={!file || isUploading}
//                 >
//                   <i className="bi bi-cloud-upload"></i>
//                 </button>

//                 <button
//                   onClick={handleClear}
//                   className="btn btn-outline-danger rounded-circle"
//                   disabled={!file}
//                 >
//                   <i className="bi bi-x"></i>
//                 </button>

//                 {/* Progress Bar */}
//                 {isUploading && (
//                   <div className="ms-auto d-flex align-items-center gap-2">
//                     <span>{uploadProgress}%</span>
//                     <div className="progress" style={{ width: '10rem', height: '12px' }}>
//                       <div
//                         className="progress-bar"
//                         role="progressbar"
//                         style={{ width: `${uploadProgress}%` }}
//                         aria-valuenow={uploadProgress}
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       ></div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* File Info Display */}
//             {file && (
//               <div className="mt-3">
//                 <div className="alert alert-primary d-inline-block px-4 py-2 rounded">
//                   <div><strong>Selected file:</strong> {file.name}</div>
//                   <div className="text-muted" style={{ fontSize: '0.9em' }}>
//                     <strong>Date:</strong> {fileDate?.toLocaleString()}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Empty Drop Zone */}
//             {!file && !uploadComplete && (
//               <div
//                 className="d-flex flex-column align-items-center p-4 border rounded text-muted text-center"
//                 style={{ minHeight: '30vh' }}
//                 onDragOver={handleDragOver}
//                 onDrop={handleDrop}
//               >
//                 <i className="bi bi-upload display-4 mb-3"></i>
//                 <span style={{ fontSize: '1.2em' }}>Drag and Drop Image Here</span>
//                 <input
//                   type="file"
//                   hidden
//                   ref={inputRef}
//                   onChange={handleChange}
//                 />
//               </div>
//             )}

//             {/* New Chat Area after Upload is Complete */}
//             {uploadComplete && (
//               <div className="mt-5 p-4 border rounded">
//               <SimpleBar style={{ maxHeight: '400px' }}>
// <Accordion defaultActiveKey="0" className="d-flex flex-column gap-2">
//         <Accordion.Item eventKey="0" className="rounded">
//             <Accordion.Button className="rounded shadow-none">
//             <h5>What kind of questions can I ask the chatbot?</h5>
//             </Accordion.Button>
//             <Accordion.Body className="tyn-text-block pt-0">
//             <p>You can ask the chatbot any question related to our products or services. Some common questions include.</p>
//             <ol>
//                 <li>How do I place an order?</li>
//                 <li>What is your return policy?</li>
//                 <li>How do I track my shipment?</li>
//                 <li>Can I change my order after it has been placed?</li>
//             </ol>
//             </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="1" className="rounded">
//             <Accordion.Button className="rounded shadow-none">
//             <h5>What is this chatbot for?</h5>
//             </Accordion.Button>
//             <Accordion.Body className="tyn-text-block pt-0">
//             <p>This chatbot is designed to provide customer service support. You can use it to get answers to common questions, find information about our products or services, and get help with any issues you may be experiencing.</p>
//             </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="2" className="rounded">
//             <Accordion.Button className="rounded shadow-none">
//             <h5>How do I use the chatbot?</h5>
//             </Accordion.Button>
//             <Accordion.Body className="tyn-text-block pt-0">
//             <p>To use the chatbot, simply type your question or request into the chat window. The chatbot will then provide a response or guide you through the process of finding the information you need.</p>
//             </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="3" className="rounded">
//             <Accordion.Button className="rounded shadow-none">
//             <h5>What if the chatbot can’t answer my question?</h5>
//             </Accordion.Button>
//             <Accordion.Body className="tyn-text-block pt-0">
//             <p>If the chatbot is unable to answer your question or provide the information you need, it will direct you to other resources such as our customer service team or website.</p>
//             </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="4" className="rounded">
//             <Accordion.Button className="rounded shadow-none">
//             <h5>Can I use the chatbot to provide feedback or make a complaint?</h5>
//             </Accordion.Button>
//             <Accordion.Body className="tyn-text-block pt-0">
//             <p>Yes, you can use the chatbot to provide feedback or make a complaint. Simply type your message into the chat window and the chatbot will guide you through the process of submitting your feedback or complaint.</p>
//             </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="5" className="rounded">
//             <Accordion.Button className="rounded shadow-none">
//             <h5>How do I know if my issue has been resolved?</h5>
//             </Accordion.Button>
//             <Accordion.Body className="tyn-text-block pt-0">
//             <p>If you have submitted a request for assistance through the chatbot, you will receive a confirmation message once your issue has been resolved. You can also check the status of your request at any time by asking the chatbot.</p>
//             </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="6" className="rounded">
//             <Accordion.Button className="rounded shadow-none">
//             <h5>Can I speak to a live agent instead of using the chatbot?</h5>
//             </Accordion.Button>
//             <Accordion.Body className="tyn-text-block pt-0">
//             <p>Yes, if you prefer to speak with a live agent instead of using the chatbot, you can do so by following the prompts provided by the chatbot. Our customer service team is available to assist you during our regular business hours.</p>
//             </Accordion.Body>
//         </Accordion.Item>
//     </Accordion>


//                   </SimpleBar>
//               </div>
//             )}

//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Qa;
















// import React, { useState, useRef } from 'react';
// import Layout from '../../layout/main';
// import { Button, Col, Row } from 'react-bootstrap';
// import {
//   PersonUp,
//   PlusLg,
//   Trash,
// } from 'react-bootstrap-icons';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import question from '../../question/questions.json';

// const Qa = () => {
//   const [showMain] = useState(true);
//   const [file, setFile] = useState(null);
//   const [fileDate, setFileDate] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadComplete, setUploadComplete] = useState(false);
//   const [questions, setQuestions] = useState([]);
//   const [checkedQuestions, setCheckedQuestions] = useState({});
//   const fileInputRef = useRef();

//   const handleChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setFileDate(new Date());
//       setUploadComplete(false);
//       setQuestions([]);
//       setCheckedQuestions({});
//     }
//   };

//   const handleClear = () => {
//     setFile(null);
//     setFileDate(null);
//     setUploadProgress(0);
//     setUploadComplete(false);
//     setQuestions([]);
//     setCheckedQuestions({});
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const handleUpload = () => {
//     if (!file) return;

//     setIsUploading(true);
//     setUploadProgress(0);

//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += 10;
//       setUploadProgress(progress);
//       if (progress >= 100) {
//         clearInterval(interval);
//         setIsUploading(false);
//         setUploadComplete(true);
//         setQuestions(question);
//       }
//     }, 300);
//   };

//   const handleCheckboxChange = (id) => {
//     setCheckedQuestions(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files[0];
//     if (droppedFile) {
//       setFile(droppedFile);
//       setFileDate(new Date());
//       setUploadComplete(false);
//       setQuestions([]);
//       setCheckedQuestions({});
//     }
//   };

//   return (
//     <Layout title="Chatbot" content="tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base">
//       {/* Sidebar */}
//       <div className="tyn-aside tyn-aside-base">
//         <div className="tyn-aside-head">
//           <div className="tyn-aside-head-text">
//             <h3 className="tyn-aside-title tyn-title">Chat Archive</h3>
//             <span className="tyn-subtext">200+ Conversations</span>
//           </div>
//           <div className="tyn-aside-head-tools">
//             <ul className="tyn-list-inline gap gap-3">
//               <li>
//                 <Button variant="light" size="md" className="btn-icon btn-pill">
//                   <PlusLg />
//                 </Button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <SimpleBar className="tyn-aside-body px-3 py-2">
//           <ul className="list-unstyled">{/* Chat list placeholder */}</ul>
//         </SimpleBar>

//         <div className="tyn-aside-foot">
//           <Row as="ul" className="gx-3">
//             <Col as="li" xs="6">
//               <Link to="/pricing" className="btn btn-light btn-lg w-100 flex-column py-2 pt-3">
//                 <PersonUp />
//                 <span className="small text-nowrap mt-n1">Become Pro</span>
//               </Link>
//             </Col>
//             <Col as="li" xs="6">
//               <Button variant="light" size="lg" className="w-100 flex-column py-2 pt-3">
//                 <Trash />
//                 <span className="small text-nowrap mt-n1">Clear Archive</span>
//               </Button>
//             </Col>
//           </Row>
//         </div>
//       </div>

//       {/* Main Chat Area */}
//       <div className={classNames({ 'tyn-main': true, 'main-shown': showMain })} id="tynMain">
//         <div className="p-4" style={{ minHeight: '80vh' }}>
//           <div className="card p-4" style={{ minHeight: '100vh' }}>

//             {/* Upload Controls */}
//             {!uploadComplete && (
//               <div className="d-flex align-items-center gap-2 mb-3">
//                 <label className="btn btn-outline-primary rounded-circle mb-0">
//                   <input
//                     type="file"
//                     hidden
//                     onChange={handleChange}
//                     ref={fileInputRef}
//                   />
//                   <i className="bi bi-image"></i>
//                 </label>

//                 <button
//                   onClick={handleUpload}
//                   className="btn btn-outline-success rounded-circle"
//                   disabled={!file || isUploading}
//                 >
//                   <i className="bi bi-cloud-upload"></i>
//                 </button>

//                 <button
//                   onClick={handleClear}
//                   className="btn btn-outline-danger rounded-circle"
//                   disabled={!file}
//                 >
//                   <i className="bi bi-x"></i>
//                 </button>

//                 {isUploading && (
//                   <div className="ms-auto d-flex align-items-center gap-2">
//                     <span>{uploadProgress}%</span>
//                     <div className="progress" style={{ width: '10rem', height: '12px' }}>
//                       <div
//                         className="progress-bar"
//                         role="progressbar"
//                         style={{ width: `${uploadProgress}%` }}
//                         aria-valuenow={uploadProgress}
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       ></div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* File Info */}
//             {file && (
//               <div className="mt-3">
//                 <div className="alert alert-primary d-inline-block px-4 py-2 rounded">
//                   <div><strong>Selected file:</strong> {file.name}</div>
//                   <div className="text-muted" style={{ fontSize: '0.9em' }}>
//                     <strong>Date:</strong> {fileDate?.toLocaleString()}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Drop Zone */}
//             {!file && !uploadComplete && (
//               <div
//                 className="d-flex flex-column align-items-center p-4 border rounded text-muted text-center"
//                 style={{ minHeight: '30vh' }}
//                 onDragOver={handleDragOver}
//                 onDrop={handleDrop}
//               >
//                 <i className="bi bi-upload display-4 mb-3"></i>
//                 <span style={{ fontSize: '1.2em' }}>Drag and Drop File Here</span>
//               </div>
//             )}

//             {/* Questions List */}
//             {uploadComplete && (
//               <div className="mt-5 p-4 border rounded">
//                 <SimpleBar style={{ maxHeight: '400px' }}>
//                   <ul className="list-group">
//                     {questions.map((q) => (
//                       <li key={q.id} className="list-group-item">
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             id={`q-${q.id}`}
//                             checked={checkedQuestions[q.id] || false}
//                             onChange={() => handleCheckboxChange(q.id)}
//                           />
//                           <label className="form-check-label" htmlFor={`q-${q.id}`}>
//                             <strong>Q{q.id}:</strong> {q.question} <em>({q.category})</em>
//                           </label>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </SimpleBar>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Qa;


import React, { useState, useRef, useEffect } from 'react';
import Layout from '../../layout/main';
import { Button, Col, Row } from 'react-bootstrap';
import { PersonUp, PlusLg, Trash } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import question from '../../question/questions.json';

const Qa = () => {
  const [showMain] = useState(true);
  const [file, setFile] = useState(null);
  const [fileDate, setFileDate] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [checkedQuestions, setCheckedQuestions] = useState({});
  const fileInputRef = useRef();
  const navigate = useNavigate();

  // Redirect to login if not logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileDate(new Date());
      setUploadComplete(false);
      setQuestions([]);
      setCheckedQuestions({});
    }
  };

  const handleClear = () => {
    setFile(null);
    setFileDate(null);
    setUploadProgress(0);
    setUploadComplete(false);
    setQuestions([]);
    setCheckedQuestions({});
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUpload = () => {
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        setUploadComplete(true);
        setQuestions(question);
      }
    }, 300);
  };

  const handleCheckboxChange = (id) => {
    setCheckedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectAll = () => {
    const allSelected = questions.every((q) => checkedQuestions[q.id]);
    const newChecked = {};
    questions.forEach((q) => {
      newChecked[q.id] = !allSelected;
    });
    setCheckedQuestions(newChecked);
  };

  const handleSubmit = () => {
    const selectedQuestions = questions.filter((q) => checkedQuestions[q.id]);
    navigate('/answer', { state: { selectedQuestions } });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setFileDate(new Date());
      setUploadComplete(false);
      setQuestions([]);
      setCheckedQuestions({});
    }
  };

  return (
    <Layout title="Chatbot" content="tyn-content-full-height tyn-chatbot tyn-chatbot-page has-aside-base">
      {/* Sidebar */}
      <div className="tyn-aside tyn-aside-base">
        <div className="tyn-aside-head">
          <div className="tyn-aside-head-text">
            <h3 className="tyn-aside-title tyn-title">Chat Archive</h3>
            <span className="tyn-subtext">200+ Conversations</span>
          </div>
          <div className="tyn-aside-head-tools">
            <ul className="tyn-list-inline gap gap-3">
              <li>
                <Button variant="light" size="md" className="btn-icon btn-pill">
                  <PlusLg />
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <SimpleBar className="tyn-aside-body px-3 py-2">
          <ul className="list-unstyled">{/* Chat list placeholder */}</ul>
        </SimpleBar>

        <div className="tyn-aside-foot">
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

      {/* Main Chat Area */}
      <div className={classNames({ 'tyn-main': true, 'main-shown': showMain })} id="tynMain">
        <div className="p-4" style={{ minHeight: '100vh', width: '100%' }}>

          <div className="card p-4" style={{ minHeight: '100vh' }}>
            {/* Upload Controls */}
            {!uploadComplete && (
              <div className="d-flex align-items-center gap-2 mb-3">
                <label className="btn btn-outline-primary rounded-circle mb-0">
                  <input
                    type="file"
                    hidden
                    onChange={handleChange}
                    ref={fileInputRef}
                  />
                  <i className="bi bi-image"></i>
                </label>

                <button
                  onClick={handleUpload}
                  className="btn btn-outline-success rounded-circle"
                  disabled={!file || isUploading}
                >
                  <i className="bi bi-cloud-upload"></i>
                </button>

                <button
                  onClick={handleClear}
                  className="btn btn-outline-danger rounded-circle"
                  disabled={!file}
                >
                  <i className="bi bi-x"></i>
                </button>

                {isUploading && (
                  <div className="ms-auto d-flex align-items-center gap-2">
                    <span>{uploadProgress}%</span>
                    <div className="progress" style={{ width: '10rem', height: '12px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${uploadProgress}%` }}
                        aria-valuenow={uploadProgress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* File Info */}
            {file && (
              <div className="mt-3">
                <div className="alert alert-primary d-inline-block px-4 py-2 rounded">
                  <div><strong>Selected file:</strong> {file.name}</div>
                  <div className="text-muted" style={{ fontSize: '0.9em' }}>
                    <strong>Date:</strong> {fileDate?.toLocaleString()}
                  </div>
                </div>
              </div>
            )}

            {/* Drop Zone */}
            {!file && !uploadComplete && (
              <div
                className="d-flex flex-column align-items-center p-4 border rounded text-muted text-center"
                style={{ minHeight: '30vh' }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <i className="bi bi-upload display-4 mb-3"></i>
                <span style={{ fontSize: '1.2em' }}>Drag and Drop File Here</span>
              </div>
            )}

            {/* Questions List */}
            {uploadComplete && (
              <div className="mt-5 p-4 border rounded">
                {/* Select/Unselect All and Submit Buttons */}
                <div className="d-flex justify-content-between mb-3">
                  <button className="btn btn-primary" onClick={handleSelectAll}>
                    {questions.every((q) => checkedQuestions[q.id]) ? 'Unselect All' : 'Select All'}
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={handleSubmit}
                    disabled={Object.values(checkedQuestions).every((v) => !v)}
                  >
                    Submit
                  </button>
                </div>

                <SimpleBar style={{ maxHeight: '400px' }}>
                  <ul className="list-group">
                    {questions.map((q) => (
                      <li key={q.id} className="list-group-item">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`q-${q.id}`}
                            checked={checkedQuestions[q.id] || false}
                            onChange={() => handleCheckboxChange(q.id)}
                          />
                          <label className="form-check-label" htmlFor={`q-${q.id}`}>
                            <strong>Q{q.id}:</strong> {q.question} <em>({q.category})</em>
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </SimpleBar>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Qa;
