// import React, { useEffect, useState } from 'react';
// import { Person, Gear, Unlock, Power, CheckCircleFill, MoonFill } from 'react-bootstrap-icons';
// import { Dropdown } from 'react-bootstrap';
// import { useLayout, useLayoutUpdate } from '../../../provider/Theme';
// import { 
//     Image,
//     DropdownToggle, 
//     DropdownMenu,
//     Media
// } from '../../../../components';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import classNames from 'classnames';
// import { getProfilePic } from '../../api/user'; // Adjust path as needed

// const data = [
//     { text: "Profile", icon: <Person />, link: "/profile?tab=profile-intro" },
//     { text: "Settings", icon: <Gear />, link: "/profile?tab=profile-edit" },
//     { text: "Change Password", icon: <Unlock />, link: "/profile?tab=profile-security" },
//     { divider: true },
//     { text: "Logout", icon: <Power />, link: "/login" },
// ];

// function Profile() {
//     const [searchParams] = useSearchParams();
//     const [activeLink, setActiveLink] = useState(searchParams.get('tab'));
//     const [profilePic, setProfilePic] = useState(null);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//     const layout = useLayout();
//     const layoutUpdate = useLayoutUpdate();

//     useEffect(() => {
//         const sessionId = localStorage.getItem('sessionId');
//         console.log('Profile (AppBar) - Session ID:', sessionId); // Log sessionId
//         if (sessionId) {
//             fetchProfilePic(sessionId);
//         } else {
//             console.warn('Profile (AppBar) - No sessionId found in localStorage');
//             setProfilePic('/images/avatar/4.jpg');
//             setError('No session found. Please log in.');
//         }
//     }, []);

//     useEffect(() => {
//         setActiveLink(searchParams.get('tab'));
//     }, [searchParams]);

//     const fetchProfilePic = async (sessionId) => {
//         try {
//             console.log('Profile (AppBar) - Fetching profile picture with sessionId:', sessionId);
//             const imageUrl = await getProfilePic(sessionId);
//             console.log('Profile (AppBar) - Successfully fetched profile picture URL:', imageUrl);
//             setProfilePic(imageUrl);
//             setError(null);
//         } catch (err) {
//             console.error('Profile (AppBar) - Failed to fetch profile picture:', {
//                 message: err.message,
//                 status: err.response?.status,
//                 data: err.response?.data,
//                 sessionId: sessionId
//             });
//             setError(err.message || 'Failed to load profile picture.');
//             setProfilePic('/images/avatar/4.jpg'); // Fallback
//         }
//     };

//     console.log('Profile (AppBar) - Rendering with profilePic:', profilePic); // Log current state

//     return (
//         <Dropdown className="d-inline-flex">
//             <Dropdown.Toggle as={DropdownToggle} autoClose="outside">
//                 <Media size="lg" shape="circle">
//                     <Image src={profilePic || '/images/avatar/4.jpg'} /> {/* Removed staticImage */}
//                 </Media>
//             </Dropdown.Toggle>

//             <Dropdown.Menu as={DropdownMenu} align="end" style={{ marginTop: "10px" }}>
//                 <div className="dropdown-gap">
//                     <Media.Group>
//                         <Media size="lg">
//                             <Image src={profilePic || '/images/avatar/4.jpg'} /> {/* Removed staticImage */}
//                         </Media>
//                         <Media.Col>
//                             <Media.Row>
//                                 <h6 className="name">Guest User</h6>
//                                 <div className="indicator varified">
//                                     <CheckCircleFill />
//                                 </div>
//                             </Media.Row>
//                             <Media.Row>
//                                 <p className="content">Liked that disco music</p>
//                             </Media.Row>
//                         </Media.Col>
//                     </Media.Group>
//                 </div>
//                 <div className="dropdown-gap">
//                     <div className="d-flex gap gap-2">
//                         <MoonFill />
//                         <div>
//                             <h6>Darkmode</h6>
//                             <ul className="d-flex align-items-center gap gap-3">
//                                 <li className="inline-flex">
//                                     <div className="form-check">
//                                         <input 
//                                             className="form-check-input" 
//                                             checked={layout.theme === 'dark'} 
//                                             onChange={() => layoutUpdate.theme('dark')} 
//                                             type="radio" 
//                                             name="themeMode" 
//                                             id="dark"
//                                         />
//                                         <label className="form-check-label small" htmlFor="dark">
//                                             On
//                                         </label>
//                                     </div>
//                                 </li>
//                                 <li className="inline-flex">
//                                     <div className="form-check">
//                                         <input 
//                                             className="form-check-input" 
//                                             checked={layout.theme === 'light'} 
//                                             onChange={() => layoutUpdate.theme('light')} 
//                                             type="radio" 
//                                             name="themeMode" 
//                                             id="light"
//                                         />
//                                         <label className="form-check-label small" htmlFor="light">
//                                             Off
//                                         </label>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <ul className="tyn-list-links">
//                     {data.map((item, index) => (
//                         <React.Fragment key={index}>
//                             {item.divider && <li className="dropdown-divider"></li>}
//                             {!item.divider && !item.heading && (
//                                 <li>
//                                     <button 
//                                         className={classNames({ 'active': item.link.includes(activeLink) })} 
//                                         onClick={() => navigate(item.link)}
//                                     >
//                                         {item.icon}
//                                         <span>{item.text}</span>
//                                     </button>
//                                 </li>
//                             )}
//                         </React.Fragment>
//                     ))}
//                 </ul>
//                 {error && (
//                     <div className="dropdown-gap text-danger small text-center">
//                         {error}
//                     </div>
//                 )}
//             </Dropdown.Menu>
//         </Dropdown>
//     );
// }

// export default Profile;




// import React, { useEffect, useState } from 'react';
// import { Person, Gear, Unlock, Power, CheckCircleFill, MoonFill } from 'react-bootstrap-icons';
// import { Dropdown } from 'react-bootstrap';
// import { useLayout, useLayoutUpdate } from '../../../provider/Theme';
// import { 
//     Image,
//     DropdownToggle, 
//     DropdownMenu,
//     Media
// } from '../../../../components';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import classNames from 'classnames';
// // Removed getProfilePic import since not used
// import { useUserData } from '../../../../store/user'; // Adjust path as needed

// function Profile() {
//     const [searchParams] = useSearchParams();
//     const [activeLink, setActiveLink] = useState(searchParams.get('tab'));
//     // Fixed default profile picture, no fetching
//     const [profilePic] = useState('/images/avatar/4.jpg'); 
//     const navigate = useNavigate();
//     const layout = useLayout();
//     const layoutUpdate = useLayoutUpdate();
//     const sessionId = localStorage.getItem('sessionId');
//     const { userData, loading: userLoading, error: userError } = useUserData(sessionId); // Fetch user data

//     useEffect(() => {
//         setActiveLink(searchParams.get('tab'));
//     }, [searchParams]);

//     // Removed fetchProfilePic and error state completely

//     // Menu items based on session presence
//     const menuItems = sessionId ? [
//         { text: "Profile", icon: <Person />, link: "/profile?tab=profile-intro" },
//         { text: "Settings", icon: <Gear />, link: "/profile?tab=profile-edit" },
//         { text: "Change Password", icon: <Unlock />, link: "/profile?tab=profile-security" },
//         { divider: true },
//         { text: "Logout", icon: <Power />, link: "/login", action: () => {
//             localStorage.removeItem('sessionId');
//             navigate('/login', { replace: true });
//             window.location.reload(); // force reload to clear state and history
//         }},
//     ] : [
//         { text: "Login", icon: <Power />, link: "/login" },
//     ];

//     return (
//         <Dropdown className="d-inline-flex">
//             <Dropdown.Toggle as={DropdownToggle} autoClose="outside">
//                 <Media size="lg" shape="circle">
//                     <Image src={profilePic} />
//                 </Media>
//             </Dropdown.Toggle>

//             <Dropdown.Menu as={DropdownMenu} align="end" style={{ marginTop: "10px" }}>
//                 <div className="dropdown-gap">
//                     <Media.Group>
//                         <Media size="lg">
//                             <Image src={profilePic} />
//                         </Media>
//                         <Media.Col>
//                             <Media.Row>
//                                 <h6 className="name">
//                                     {userLoading ? 'Loading...' : userError || !sessionId ? 'Guest User' : userData?.name || 'Guest User'}
//                                 </h6>
//                                 <div className="indicator varified">
//                                     <CheckCircleFill />
//                                 </div>
//                             </Media.Row>
//                             <Media.Row>
//                                 <p className="content">Liked that disco music</p>
//                             </Media.Row>
//                         </Media.Col>
//                     </Media.Group>
//                 </div>

//                 <div className="dropdown-gap">
//                     <div className="d-flex gap gap-2">
//                         <MoonFill />
//                         <div>
//                             <h6>Darkmode</h6>
//                             <ul className="d-flex align-items-center gap gap-3">
//                                 <li className="inline-flex">
//                                     <div className="form-check">
//                                         <input 
//                                             className="form-check-input" 
//                                             checked={layout.theme === 'dark'} 
//                                             onChange={() => layoutUpdate.theme('dark')} 
//                                             type="radio" 
//                                             name="themeMode" 
//                                             id="dark"
//                                         />
//                                         <label className="form-check-label small" htmlFor="dark">
//                                             On
//                                         </label>
//                                     </div>
//                                 </li>
//                                 <li className="inline-flex">
//                                     <div className="form-check">
//                                         <input 
//                                             className="form-check-input" 
//                                             checked={layout.theme === 'light'} 
//                                             onChange={() => layoutUpdate.theme('light')} 
//                                             type="radio" 
//                                             name="themeMode" 
//                                             id="light"
//                                         />
//                                         <label className="form-check-label small" htmlFor="light">
//                                             Off
//                                         </label>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>

//                 <ul className="tyn-list-links">
//                     {menuItems.map((item, index) => (
//                         <React.Fragment key={index}>
//                             {item.divider && <li className="dropdown-divider"></li>}
//                             {!item.divider && (
//                                 <li>
//                                     {item.action ? (
//                                         <button
//                                             className={classNames({ 'active': item.link.includes(activeLink) })}
//                                             onClick={item.action}
//                                         >
//                                             {item.icon}
//                                             <span>{item.text}</span>
//                                         </button>
//                                     ) : (
//                                         <button
//                                             className={classNames({ 'active': item.link.includes(activeLink) })}
//                                             onClick={() => navigate(item.link)}
//                                         >
//                                             {item.icon}
//                                             <span>{item.text}</span>
//                                         </button>
//                                     )}
//                                 </li>
//                             )}
//                         </React.Fragment>
//                     ))}
//                 </ul>
//             </Dropdown.Menu>
//         </Dropdown>
//     );
// }

// export default Profile;




// import React, { useEffect, useState } from 'react';
// import { Person, Gear, Unlock, Power, CheckCircleFill, MoonFill } from 'react-bootstrap-icons';
// import { Dropdown } from 'react-bootstrap';
// import { useLayout, useLayoutUpdate } from '../../../provider/Theme';
// import {
//     Image,
//     DropdownToggle,
//     DropdownMenu,
//     Media
// } from '../../../../components';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import classNames from 'classnames';
// import { getProfilePic } from '../../api/user';

// function Profile() {
//     const [searchParams] = useSearchParams();
//     const [activeLink, setActiveLink] = useState(searchParams.get('tab'));
//     const [profilePic, setProfilePic] = useState('/images/avatar/4.jpg');
//     const [error, setError] = useState(null);
//     const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('sessionId'));
//     const navigate = useNavigate();
//     const layout = useLayout();
//     const layoutUpdate = useLayoutUpdate();

//     useEffect(() => {
//         if (isLoggedIn) {
//             const sessionId = localStorage.getItem('sessionId');
//             if (sessionId) {
//                 fetchProfilePic(sessionId);
//             }
//         } else {
//             setProfilePic('/images/avatar/4.jpg');
//         }
//     }, [isLoggedIn]);

//     useEffect(() => {
//         setActiveLink(searchParams.get('tab'));
//     }, [searchParams]);

//     const fetchProfilePic = async (sessionId) => {
//         try {
//             const imageUrl = await getProfilePic(sessionId);
//             setProfilePic(imageUrl);
//             setError(null);
//         } catch (err) {
//             setProfilePic('/images/avatar/4.jpg');
//             setError('Could not load profile picture.');
//         }
//     };

//     const handleMenuClick = (text, link) => {
//         if (text === 'Logout') {
//             localStorage.removeItem('sessionId');
//             setIsLoggedIn(false); // ✅ Triggers UI update
//             setProfilePic('/images/avatar/4.jpg');
//             navigate('/login');
//         } else {
//             navigate(link);
//         }
//     };

//     const menuItems = isLoggedIn
//         ? [
//             { text: "Profile", icon: <Person />, link: "/profile?tab=profile-intro" },
//             { text: "Settings", icon: <Gear />, link: "/profile?tab=profile-edit" },
//             { text: "Change Password", icon: <Unlock />, link: "/profile?tab=profile-security" },
//             { divider: true },
//             { text: "Logout", icon: <Power />, link: "/login" },
//         ]
//         : [
//             { text: "Login", icon: <Power />, link: "/login" }
//         ];

//     return (
//         <Dropdown className="d-inline-flex">
//             <Dropdown.Toggle as={DropdownToggle} autoClose="outside">
//                 <Media size="lg" shape="circle">
//                     <Image src={profilePic} />
//                 </Media>
//             </Dropdown.Toggle>

//             <Dropdown.Menu as={DropdownMenu} align="end" style={{ marginTop: "10px" }}>
//                 <div className="dropdown-gap">
//                     <Media.Group>
//                         <Media size="lg">
//                             <Image src={profilePic} />
//                         </Media>
//                         <Media.Col>
//                             <Media.Row>
//                                 <h6 className="name">{isLoggedIn ? 'Guest User' : 'Guest'}</h6>
//                                 {isLoggedIn && (
//                                     <div className="indicator varified">
//                                         <CheckCircleFill />
//                                     </div>
//                                 )}
//                             </Media.Row>
//                             <Media.Row>
//                                 <p className="content">
//                                     {isLoggedIn ? 'Liked that disco music' : 'Please log in'}
//                                 </p>
//                             </Media.Row>
//                         </Media.Col>
//                     </Media.Group>
//                 </div>

//                 {isLoggedIn && (
//                     <div className="dropdown-gap">
//                         <div className="d-flex gap gap-2">
//                             <MoonFill />
//                             <div>
//                                 <h6>Darkmode</h6>
//                                 <ul className="d-flex align-items-center gap gap-3">
//                                     <li className="inline-flex">
//                                         <div className="form-check">
//                                             <input
//                                                 className="form-check-input"
//                                                 checked={layout.theme === 'dark'}
//                                                 onChange={() => layoutUpdate.theme('dark')}
//                                                 type="radio"
//                                                 name="themeMode"
//                                                 id="dark"
//                                             />
//                                             <label className="form-check-label small" htmlFor="dark">
//                                                 On
//                                             </label>
//                                         </div>
//                                     </li>
//                                     <li className="inline-flex">
//                                         <div className="form-check">
//                                             <input
//                                                 className="form-check-input"
//                                                 checked={layout.theme === 'light'}
//                                                 onChange={() => layoutUpdate.theme('light')}
//                                                 type="radio"
//                                                 name="themeMode"
//                                                 id="light"
//                                             />
//                                             <label className="form-check-label small" htmlFor="light">
//                                                 Off
//                                             </label>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 <ul className="tyn-list-links">
//                     {menuItems.map((item, index) => (
//                         <React.Fragment key={index}>
//                             {item.divider && <li className="dropdown-divider"></li>}
//                             {!item.divider && (
//                                 <li>
//                                     <button
//                                         className={classNames({ 'active': item.link.includes(activeLink) })}
//                                         onClick={() => handleMenuClick(item.text, item.link)}
//                                     >
//                                         {item.icon}
//                                         <span>{item.text}</span>
//                                     </button>
//                                 </li>
//                             )}
//                         </React.Fragment>
//                     ))}
//                 </ul>

//                 {error && (
//                     <div className="dropdown-gap text-danger small text-center">
//                         {error}
//                     </div>
//                 )}
//             </Dropdown.Menu>
//         </Dropdown>
//     );
// }

// export default Profile;



import React, { useEffect, useState, useContext } from 'react';
import {
  Person, Gear, Unlock, Power, CheckCircleFill, MoonFill,
} from 'react-bootstrap-icons';
import { Dropdown } from 'react-bootstrap';
import {
  Image, DropdownToggle, DropdownMenu, Media,
} from '../../../../components';
import { useSearchParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { getProfilePic } from '../../api/user';
import { useLayout, useLayoutUpdate } from '../../../provider/Theme';
import { AuthContext } from '../../../store/AuthContext'; // Adjust the path if needed

function Profile() {
  const [searchParams] = useSearchParams();
  const [activeLink, setActiveLink] = useState(searchParams.get('tab'));
  const [profilePic, setProfilePic] = useState('/images/avatar/4.jpg');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const layout = useLayout();
  const layoutUpdate = useLayoutUpdate();
  const { sessionId, logout } = useContext(AuthContext);

  const isLoggedIn = !!sessionId;

  useEffect(() => {
    if (sessionId) {
      fetchProfilePic(sessionId);
    } else {
      setProfilePic('/images/avatar/4.jpg');
    }
  }, [sessionId]);

  useEffect(() => {
    setActiveLink(searchParams.get('tab'));
  }, [searchParams]);

  const fetchProfilePic = async (sessionId) => {
    try {
      const imageUrl = await getProfilePic(sessionId);
      setProfilePic(imageUrl);
      setError(null);
    } catch (err) {
      console.error('Profile Pic Fetch Error:', err);
      setProfilePic('/images/avatar/4.jpg');
      setError('Failed to load profile picture.');
    }
  };

  const handleMenuClick = (text, link) => {
    if (text === 'Logout') {
      logout();            // Context logout
      navigate('/login');  // Redirect
    } else {
      navigate(link);
    }
  };

  const menuItems = isLoggedIn
    ? [
        { text: 'Profile', icon: <Person />, link: '/profile?tab=profile-intro' },
        { text: 'Settings', icon: <Gear />, link: '/profile?tab=profile-edit' },
        { text: 'Change Password', icon: <Unlock />, link: '/profile?tab=profile-security' },
        { divider: true },
        { text: 'Logout', icon: <Power />, link: '/login' },
      ]
    : [
        { text: 'Login', icon: <Power />, link: '/login' },
      ];

  return (
    <Dropdown className="d-inline-flex">
      <Dropdown.Toggle as={DropdownToggle} autoClose="outside">
        <Media size="lg" shape="circle">
          <Image src={profilePic} />
        </Media>
      </Dropdown.Toggle>

      <Dropdown.Menu as={DropdownMenu} align="end" style={{ marginTop: '10px' }}>
        <div className="dropdown-gap">
          <Media.Group>
            <Media size="lg">
              <Image src={profilePic} />
            </Media>
            <Media.Col>
              <Media.Row>
                <h6 className="name">{isLoggedIn ? 'Guest User' : 'Guest'}</h6>
                {isLoggedIn && (
                  <div className="indicator varified">
                    <CheckCircleFill />
                  </div>
                )}
              </Media.Row>
              <Media.Row>
                <p className="content">{isLoggedIn ? 'Liked that disco music' : 'Please log in'}</p>
              </Media.Row>
            </Media.Col>
          </Media.Group>
        </div>

        {isLoggedIn && (
          <div className="dropdown-gap">
            <div className="d-flex gap gap-2">
              <MoonFill />
              <div>
                <h6>Darkmode</h6>
                <ul className="d-flex align-items-center gap gap-3">
                  <li className="inline-flex">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        checked={layout.theme === 'dark'}
                        onChange={() => layoutUpdate.theme('dark')}
                        type="radio"
                        name="themeMode"
                        id="dark"
                      />
                      <label className="form-check-label small" htmlFor="dark">
                        On
                      </label>
                    </div>
                  </li>
                  <li className="inline-flex">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        checked={layout.theme === 'light'}
                        onChange={() => layoutUpdate.theme('light')}
                        type="radio"
                        name="themeMode"
                        id="light"
                      />
                      <label className="form-check-label small" htmlFor="light">
                        Off
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <ul className="tyn-list-links">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.divider && <li className="dropdown-divider"></li>}
              {!item.divider && (
                <li>
                  <button
                    className={classNames({ active: item.link.includes(activeLink) })}
                    onClick={() => handleMenuClick(item.text, item.link)}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </button>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>

        {error && (
          <div className="dropdown-gap text-danger small text-center">
            {error}
          </div>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Profile;


// import React, { useEffect, useState } from 'react';
// import Layout from '../../layout/main'
// import { Container, Nav, Tab } from 'react-bootstrap';

// import { useSearchParams } from 'react-router-dom';

// import ProfileHead from './ProfileHead'
// import ProfileIntro from './ProfileIntro'
// import ProfileEdit from './ProfileEdit'
// import ProfileSecurity from './ProfileSecurity'

// function Profile() {
//     let [searchParams, setSearchParams] = useSearchParams();
//     const [activeKey,setActiveKey] = useState(searchParams.get('tab') !== null ? searchParams.get('tab') : 'profile-edit');
//     useEffect(() => {
//         setActiveKey(searchParams.get('tab'));
//     }, [searchParams])
    
//   return (
//     <Layout title="Profile" content="tyn-content-page" footer={true}>
//       <div className="tyn-main tyn-content-inner">
//         <Container>
//             <div className="tyn-profile">
//                 <ProfileHead />
//                 <Tab.Container defaultActiveKey={activeKey} activeKey={activeKey}>
//                     <div className="tyn-profile-nav">
//                         <Nav as="ul" variant="tabs nav-tabs-line" className="w-100">
//                             <Nav.Item as="li">
//                                 <Nav.Link onClick={()=> {setActiveKey('profile-intro'); setSearchParams({ 'tab': 'profile-intro' });}} as="button" eventKey="profile-intro">
//                                     Intro
//                                 </Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item as="li">
//                                 <Nav.Link onClick={()=> {setActiveKey('profile-edit'); setSearchParams({ 'tab': 'profile-edit' });}} as="button" eventKey="profile-edit">
//                                     Edit Profile
//                                 </Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item as="li">
//                                 <Nav.Link onClick={()=> {setActiveKey('profile-security'); setSearchParams({ 'tab': 'profile-security' });}} as="button" eventKey="profile-security">
//                                     Change Password
//                                 </Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                     </div>
//                     <div className="tyn-profile-details">
//                         <Tab.Content className="tab-content">
//                             <Tab.Pane eventKey="profile-intro">
//                                 <ProfileIntro />
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="profile-edit">
//                                 <ProfileEdit />
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="profile-security">
//                                 <ProfileSecurity />
//                             </Tab.Pane>
//                         </Tab.Content>
//                     </div>
//                 </Tab.Container>
//             </div>
//         </Container>
//       </div>
//     </Layout>
//   )
// }

// export default Profile