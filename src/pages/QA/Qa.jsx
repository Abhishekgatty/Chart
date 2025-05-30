


// import React, { useState, useRef, useEffect, useContext } from 'react';
// import Layout from '../../layout/main';
// import { Button, Col, Row } from 'react-bootstrap';
// import { PersonUp, PlusLg, Trash } from 'react-bootstrap-icons';
// import { Link, useNavigate } from 'react-router-dom';
// import classNames from 'classnames';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import question from '../../question/questions.json';
// import { AuthContext } from '../../store/AuthContext';
// import Answer from '../Answer/Answer';

// const Qa = () => {
//   const [showMain] = useState(true);
//   const [file, setFile] = useState(null);
//   const [fileDate, setFileDate] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadComplete, setUploadComplete] = useState(false);
//   const [questions, setQuestions] = useState([]);
//   const [checkedQuestions, setCheckedQuestions] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const fileInputRef = useRef();
//   const navigate = useNavigate();

//   const { sessionId, loading } = useContext(AuthContext);

//   useEffect(() => {
//     if (!loading && !sessionId) {
//       navigate('/login');
//     }
//   }, [loading, sessionId, navigate]);

//   const handleChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setFileDate(new Date());
//       setUploadComplete(false);
//       setQuestions([]);
//       setCheckedQuestions({});
//       setSubmitted(false);
//     }
//   };

//   const handleClear = () => {
//     setFile(null);
//     setFileDate(null);
//     setUploadProgress(0);
//     setUploadComplete(false);
//     setQuestions([]);
//     setCheckedQuestions({});
//     setSubmitted(false);
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

//         // Flatten and assign IDs with category info
//         const combinedQuestions = [];

//         let idCounter = 1;
//         ['long_essays', 'short_essays', 'short_answers'].forEach((categoryKey) => {
//           const categoryQuestions = question.essays[categoryKey] || [];
//           categoryQuestions.forEach((q) => {
//             combinedQuestions.push({
//               id: idCounter++,
//               question: q.question,
//               category:
//                 categoryKey === 'long_essays'
//                   ? 'Long Essays'
//                   : categoryKey === 'short_essays'
//                   ? 'Short Essays'
//                   : 'Short Answers',
//             });
//           });
//         });

//         setQuestions(combinedQuestions);
//         setCheckedQuestions({});
//         setSubmitted(false);
//       }
//     }, 300);
//   };

//   const handleCheckboxChange = (id) => {
//     setCheckedQuestions((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handleSelectAll = () => {
//     const allSelected = questions.every((q) => checkedQuestions[q.id]);
//     const newChecked = {};
//     questions.forEach((q) => {
//       newChecked[q.id] = !allSelected;
//     });
//     setCheckedQuestions(newChecked);
//   };

//   const handleSubmit = () => {
//     const selectedQuestions = questions.filter((q) => checkedQuestions[q.id]);
//     if (selectedQuestions.length === 0) return;

//     // You can navigate or do something with selectedQuestions here
//     // For now, just mark submitted true and clear questions/chat area
//     setSubmitted(true);
//     setQuestions([]);
//     setCheckedQuestions({});
//     setFile(null);
//     setFileDate(null);
//     setUploadComplete(false);
//     setUploadProgress(0);
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
//       setSubmitted(false);
//     }
//   };

//   // Helper: group questions by category
//   const groupedQuestions = questions.reduce((acc, q) => {
//     if (!acc[q.category]) acc[q.category] = [];
//     acc[q.category].push(q);
//     return acc;
//   }, {});

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
//         <div className="p-4" style={{ minHeight: '100vh', width: '100%' }}>
//           <div className="card p-4" style={{ minHeight: '100vh' }}>

//             {submitted ? (
//               <div
//   className="p-2  rounded text-center"
//   style={{ maxHeight: '1000px', overflowY: 'auto' }}
// >
//   <Answer />
// </div>

//             ) : (
//               <>
//                 {/* Upload Controls */}
//                 {!uploadComplete && (
//                   <div className="d-flex align-items-center gap-2 mb-3">
//                     <label className="btn btn-outline-primary rounded-circle mb-0">
//                       <input
//                         type="file"
//                         hidden
//                         onChange={handleChange}
//                         ref={fileInputRef}
//                       />
//                       <i className="bi bi-image"></i>
//                     </label>

//                     <button
//                       onClick={handleUpload}
//                       className="btn btn-outline-success rounded-circle"
//                       disabled={!file || isUploading}
//                     >
//                       <i className="bi bi-cloud-upload"></i>
//                     </button>

//                     <button
//                       onClick={handleClear}
//                       className="btn btn-outline-danger rounded-circle"
//                       disabled={!file}
//                     >
//                       <i className="bi bi-x"></i>
//                     </button>

//                     {isUploading && (
//                       <div className="ms-auto d-flex align-items-center gap-2">
//                         <span>{uploadProgress}%</span>
//                         <div className="progress" style={{ width: '10rem', height: '12px' }}>
//                           <div
//                             className="progress-bar"
//                             role="progressbar"
//                             style={{ width: `${uploadProgress}%` }}
//                             aria-valuenow={uploadProgress}
//                             aria-valuemin="0"
//                             aria-valuemax="100"
//                           ></div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* File Info */}
//                 {file && (
//                   <div className="mt-3">
//                     <div className="alert alert-primary d-inline-block px-4 py-2 rounded">
//                       <div><strong>Selected file:</strong> {file.name}</div>
//                       <div className="text-muted" style={{ fontSize: '0.9em' }}>
//                         <strong>Date:</strong> {fileDate?.toLocaleString()}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Drop Zone */}
//                 {!file && !uploadComplete && (
//                   <div
//                     className="d-flex flex-column align-items-center p-4 border rounded text-muted text-center"
//                     style={{ minHeight: '30vh' }}
//                     onDragOver={handleDragOver}
//                     onDrop={handleDrop}
//                   >
//                     <i className="bi bi-upload display-4 mb-3"></i>
//                     <span style={{ fontSize: '1.2em' }}>Drag and Drop File Here</span>
//                   </div>
//                 )}

//                 {/* Questions List */}
//                 {uploadComplete && questions.length > 0 && (
//                   <div className="mt-5 p-4 border rounded">
//                     <div className="d-flex justify-content-between mb-3">
//                       <button className="btn btn-primary" onClick={handleSelectAll}>
//                         {questions.every((q) => checkedQuestions[q.id]) ? 'Unselect All' : 'Select All'}
//                       </button>
//                       <button
//                         className="btn btn-success"
//                         onClick={handleSubmit}
//                         disabled={Object.values(checkedQuestions).every((v) => !v)}
//                       >
//                         Submit
//                       </button>
//                     </div>

//                     <SimpleBar style={{ maxHeight: '400px' }}>
//                       {Object.entries(groupedQuestions).map(([category, qs]) => (
//                         <div key={category} className="mb-4">
//                           <h5>{category}</h5>
//                           <ul className="list-group">
//                             {qs.map((q) => (
//                               <li key={q.id} className="list-group-item">
//                                 <div className="form-check">
//                                   <input
//                                     className="form-check-input"
//                                     type="checkbox"
//                                     id={`q-${q.id}`}
//                                     checked={checkedQuestions[q.id] || false}
//                                     onChange={() => handleCheckboxChange(q.id)}
//                                   />
//                                   <label className="form-check-label" htmlFor={`q-${q.id}`}>
//                                     {q.question}
//                                   </label>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </SimpleBar>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Qa;







// import React, { useState, useRef, useEffect, useContext } from 'react';
// import Layout from '../../layout/main';
// import { Button, Col, Row } from 'react-bootstrap';
// import { PersonUp, PlusLg, Trash } from 'react-bootstrap-icons';
// import { Link, useNavigate } from 'react-router-dom';
// import classNames from 'classnames';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import question from '../../question/questions.json';
// import { AuthContext } from '../../store/AuthContext';
// import Answer from '../Answer/Answer';

// const Qa = () => {
//   const [showMain] = useState(true);
//   const [file, setFile] = useState(null);
//   const [fileDate, setFileDate] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadComplete, setUploadComplete] = useState(false);
//   const [questions, setQuestions] = useState([]);
//   const [checkedQuestions, setCheckedQuestions] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const fileInputRef = useRef();
//   const navigate = useNavigate();

//   const { sessionId, loading } = useContext(AuthContext);

//   useEffect(() => {
//     if (!loading && !sessionId) {
//       navigate('/login');
//     }
//   }, [loading, sessionId, navigate]);

//   const handleChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setFileDate(new Date());
//       setUploadComplete(false);
//       setQuestions([]);
//       setCheckedQuestions({});
//       setSubmitted(false);
//     }
//   };

//   const handleClear = () => {
//     setFile(null);
//     setFileDate(null);
//     setUploadProgress(0);
//     setUploadComplete(false);
//     setQuestions([]);
//     setCheckedQuestions({});
//     setSubmitted(false);
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

//         // Flatten and assign IDs with category info
//         const combinedQuestions = [];

//         let idCounter = 1;
//         ['long_essays', 'short_essays', 'short_answers'].forEach((categoryKey) => {
//           const categoryQuestions = question.essays[categoryKey] || [];
//           categoryQuestions.forEach((q) => {
//             combinedQuestions.push({
//               id: idCounter++,
//               question: q.question,
//               category:
//                 categoryKey === 'long_essays'
//                   ? 'Long Essays'
//                   : categoryKey === 'short_essays'
//                   ? 'Short Essays'
//                   : 'Short Answers',
//             });
//           });
//         });

//         setQuestions(combinedQuestions);
//         setCheckedQuestions({});
//         setSubmitted(false);
//       }
//     }, 300);
//   };

//   const handleCheckboxChange = (id) => {
//     setCheckedQuestions((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handleSelectAll = () => {
//     const allSelected = questions.every((q) => checkedQuestions[q.id]);
//     const newChecked = {};
//     questions.forEach((q) => {
//       newChecked[q.id] = !allSelected;
//     });
//     setCheckedQuestions(newChecked);
//   };

//   const handleSubmit = () => {
//     const selectedQuestions = questions.filter((q) => checkedQuestions[q.id]);
//     if (selectedQuestions.length === 0) return;

//     // You can navigate or do something with selectedQuestions here
//     // For now, just mark submitted true and clear questions/chat area
//     setSubmitted(true);
//     setQuestions([]);
//     setCheckedQuestions({});
//     setFile(null);
//     setFileDate(null);
//     setUploadComplete(false);
//     setUploadProgress(0);
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
//       setSubmitted(false);
//     }
//   };

//   // Helper: group questions by category
//   const groupedQuestions = questions.reduce((acc, q) => {
//     if (!acc[q.category]) acc[q.category] = [];
//     acc[q.category].push(q);
//     return acc;
//   }, {});

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
//         <div className="p-4" style={{ minHeight: '100vh', width: '100%' }}>
//           <div className="card p-4" style={{ minHeight: '100vh' }}>

//             {submitted ? (
//               <div
//   className="p-2  rounded text-center"
//   style={{ maxHeight: '1000px', overflowY: 'auto' }}
// >
//   <Answer />
// </div>

//             ) : (
//               <>
//                 {/* Upload Controls */}
//                 {!uploadComplete && (
//                   <div className="d-flex align-items-center gap-2 mb-3">
//                     <label className="btn btn-outline-primary rounded-circle mb-0">
//                       <input
//                         type="file"
//                         hidden
//                         onChange={handleChange}
//                         ref={fileInputRef}
//                       />
//                       <i className="bi bi-image"></i>
//                     </label>

//                     <button
//                       onClick={handleUpload}
//                       className="btn btn-outline-success rounded-circle"
//                       disabled={!file || isUploading}
//                     >
//                       <i className="bi bi-cloud-upload"></i>
//                     </button>

//                     <button
//                       onClick={handleClear}
//                       className="btn btn-outline-danger rounded-circle"
//                       disabled={!file}
//                     >
//                       <i className="bi bi-x"></i>
//                     </button>

//                     {isUploading && (
//                       <div className="ms-auto d-flex align-items-center gap-2">
//                         <span>{uploadProgress}%</span>
//                         <div className="progress" style={{ width: '10rem', height: '12px' }}>
//                           <div
//                             className="progress-bar"
//                             role="progressbar"
//                             style={{ width: `${uploadProgress}%` }}
//                             aria-valuenow={uploadProgress}
//                             aria-valuemin="0"
//                             aria-valuemax="100"
//                           ></div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* File Info */}
//                 {file && (
//                   <div className="mt-3">
//                     <div className="alert alert-primary d-inline-block px-4 py-2 rounded">
//                       <div><strong>Selected file:</strong> {file.name}</div>
//                       <div className="text-muted" style={{ fontSize: '0.9em' }}>
//                         <strong>Date:</strong> {fileDate?.toLocaleString()}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Drop Zone */}
//                 {!file && !uploadComplete && (
//                   <div
//                     className="d-flex flex-column align-items-center p-4 border rounded text-muted text-center"
//                     style={{ minHeight: '30vh' }}
//                     onDragOver={handleDragOver}
//                     onDrop={handleDrop}
//                   >
//                     <i className="bi bi-upload display-4 mb-3"></i>
//                     <span style={{ fontSize: '1.2em' }}>Drag and Drop File Here</span>
//                   </div>
//                 )}

//                 {/* Questions List */}
//                 {uploadComplete && questions.length > 0 && (
//                   <div className="mt-5 p-4 border rounded">
//                     <div className="d-flex justify-content-between mb-3">
//                       <button className="btn btn-primary" onClick={handleSelectAll}>
//                         {questions.every((q) => checkedQuestions[q.id]) ? 'Unselect All' : 'Select All'}
//                       </button>
//                       <button
//                         className="btn btn-success"
//                         onClick={handleSubmit}
//                         disabled={Object.values(checkedQuestions).every((v) => !v)}
//                       >
//                         Submit
//                       </button>
//                     </div>

//                     <SimpleBar style={{ maxHeight: '400px' }}>
//                       {Object.entries(groupedQuestions).map(([category, qs]) => (
//                         <div key={category} className="mb-4">
//                           <h5>{category}</h5>
//                           <ul className="list-group">
//                             {qs.map((q) => (
//                               <li key={q.id} className="list-group-item">
//                                 <div className="form-check">
//                                   <input
//                                     className="form-check-input"
//                                     type="checkbox"
//                                     id={`q-${q.id}`}
//                                     checked={checkedQuestions[q.id] || false}
//                                     onChange={() => handleCheckboxChange(q.id)}
//                                   />
//                                   <label className="form-check-label" htmlFor={`q-${q.id}`}>
//                                     {q.question}
//                                   </label>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </SimpleBar>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Qa;




import React, { useState, useRef, useContext } from 'react';
import Layout from '../../layout/main';
import { Button, Col, Row } from 'react-bootstrap';
import { PersonUp, PlusLg, Trash } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import question from '../../question/questions.json';
import { AuthContext } from '../../store/AuthContext';
import Answer from '../Answer/Answer';

const Qa = () => {
  const [showMain] = useState(true);
  const [file, setFile] = useState(null);
  const [fileDate, setFileDate] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [checkedQuestions, setCheckedQuestions] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const fileInputRef = useRef();
  const navigate = useNavigate();

  const { sessionId, loading } = useContext(AuthContext);

  // Block rendering while loading auth state
  if (loading) {
    return <div>Loading...</div>; // Or a spinner
  }

  // Redirect to login if not authenticated
  if (!sessionId) {
    navigate('/login');
    return null;
  }

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileDate(new Date());
      setUploadComplete(false);
      setQuestions([]);
      setCheckedQuestions({});
      setSubmitted(false);
    }
  };

  const handleClear = () => {
    setFile(null);
    setFileDate(null);
    setUploadProgress(0);
    setUploadComplete(false);
    setQuestions([]);
    setCheckedQuestions({});
    setSubmitted(false);
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

        // Flatten and assign IDs with category info
        const combinedQuestions = [];

        let idCounter = 1;
        ['long_essays', 'short_essays', 'short_answers'].forEach((categoryKey) => {
          const categoryQuestions = question.essays[categoryKey] || [];
          categoryQuestions.forEach((q) => {
            combinedQuestions.push({
              id: idCounter++,
              question: q.question,
              category:
                categoryKey === 'long_essays'
                  ? 'Long Essays'
                  : categoryKey === 'short_essays'
                  ? 'Short Essays'
                  : 'Short Answers',
            });
          });
        });

        setQuestions(combinedQuestions);
        setCheckedQuestions({});
        setSubmitted(false);
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
    if (selectedQuestions.length === 0) return;

    setSubmitted(true);
    setQuestions([]);
    setCheckedQuestions({});
    setFile(null);
    setFileDate(null);
    setUploadComplete(false);
    setUploadProgress(0);
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
      setSubmitted(false);
    }
  };

  // Helper: group questions by category
  const groupedQuestions = questions.reduce((acc, q) => {
    if (!acc[q.category]) acc[q.category] = [];
    acc[q.category].push(q);
    return acc;
  }, {});

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

            {submitted ? (
              <div
                className="p-2  rounded text-center"
                style={{ maxHeight: '1000px', overflowY: 'auto' }}
              >
                <Answer />
              </div>
            ) : (
              <>
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
                {uploadComplete && questions.length > 0 && (
                  <div className="mt-5 p-4 border rounded">
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
                      {Object.entries(groupedQuestions).map(([category, qs]) => (
                        <div key={category} className="mb-4">
                          <h5>{category}</h5>
                          <ul className="list-group">
                            {qs.map((q) => (
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
                                    {q.question}
                                  </label>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </SimpleBar>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Qa;
