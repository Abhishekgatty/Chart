import React, { useEffect, useState } from 'react';
import { Person, Gear, Unlock, Power, CheckCircleFill, MoonFill} from 'react-bootstrap-icons';
import { Dropdown } from 'react-bootstrap';
import { useLayout, useLayoutUpdate } from '../../../provider/Theme';
import { 
    Image,
    DropdownToggle, DropdownMenu,
    Media
} from '../../../../components';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const data = [
    { text: "Profile", icon: <Person />, link: "/profile?tab=profile-intro"},
    { text: "Settings", icon: <Gear />, link: "/profile?tab=profile-edit"},
    { text: "Change Password", icon: <Unlock />, link: "/profile?tab=profile-security"},
    { divider: true},
    { text: "Logout", icon: <Power />, link: "/login"},
]

function Profile() {
    let [searchParams] = useSearchParams();
    const [activeLink, setActiveLink] = useState(searchParams.get('tab'));
  const navigate = useNavigate();
  const layout = useLayout();
  const layoutUpdate = useLayoutUpdate();

  useEffect(() => {
    setActiveLink(searchParams.get('tab'))
  }, [searchParams])
  

  return (
    <Dropdown className="d-inline-flex">
        <Dropdown.Toggle as={DropdownToggle} autoClose="outside">
            <Media size="lg" shape="circle">
                <Image staticImage src='/images/avatar/3.jpg' />
            </Media>
        </Dropdown.Toggle>

        <Dropdown.Menu as={DropdownMenu} align="end" style={{marginTop: "10px"}}>
            <div className="dropdown-gap">
                <Media.Group>
                    <Media size="lg">
                        <Image staticImage src='/images/avatar/3.jpg' />
                    </Media>
                    <Media.Col>
                        <Media.Row>
                            <h6 className="name">Marie George</h6>
                            <div className="indicator varified">
                                <CheckCircleFill />
                            </div>
                        </Media.Row>
                        <Media.Row>
                            <p className="content">Liked that disco music</p>
                        </Media.Row>
                    </Media.Col>
                </Media.Group>
            </div>
            <div className="dropdown-gap">
                <div className="d-flex gap gap-2">
                    <MoonFill />
                    <div>
                        <h6>Darkmode</h6>
                        <ul className="d-flex align-items-center gap gap-3">
                            <li className="inline-flex">
                                <div className="form-check">
                                    <input className="form-check-input" checked={layout.theme === 'dark'} onChange={() => layoutUpdate.theme('dark')} type="radio" name="themeMode" id="dark"/>
                                    <label className="form-check-label small" htmlFor="dark">
                                        On
                                    </label>
                                </div>
                            </li>
                            <li className="inline-flex">
                                <div className="form-check">
                                    <input className="form-check-input" checked={layout.theme === 'light'} onChange={() => layoutUpdate.theme('light')} type="radio" name="themeMode" id="light"/>
                                    <label className="form-check-label small" htmlFor="light">
                                        Off
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul className="tyn-list-links">
                {data.map((item, index) => 
                    <React.Fragment key={index}>
                        {item.divider && <li className="dropdown-divider"></li>}
                        {!item.divider && !item.heading &&
                            <li><button className={classNames({'active': item.link.includes(activeLink)})} onClick={()=> navigate(item.link)}>
                                {item.icon}
                                <span>{item.text}</span>
                            </button></li>
                        }
                    </React.Fragment>
                )}
            </ul>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default Profile