import React from 'react';
import { ChatTextFill, PersonLinesFill, Robot, Subtract, GridFill, ChatRightTextFill, Front, SafeFill, PersonBoundingBox, DoorOpenFill, PersonFillUp, QuestionOctagonFill  } from 'react-bootstrap-icons';
import { Dropdown } from 'react-bootstrap';
import { 
    ListLinks,
    DropdownToggle, DropdownMenu
} from '../../../../components';

const data = [
    { heading: "Quick Links" },
    { text: "ChatBot", icon: <Robot />, link: "/chatbot"},
    { text: "VoiceChat", icon: <Robot />, link: "/voicechat"},
]

function Menu() {
  return (
    <Dropdown className="d-inline-flex">
        <Dropdown.Toggle as={DropdownToggle} className="tyn-appbar-link">
            <GridFill />
            <span className="d-none">Menu</span>
        </Dropdown.Toggle>
        <Dropdown.Menu as={DropdownMenu} align="end" className="dropdown-menu-auto" style={{marginTop: "10px"}}>
            <ListLinks>
                {data.map((item,index) => 
                    <React.Fragment key={index}>
                        {item.heading &&<ListLinks.Heading>{item.heading}</ListLinks.Heading>}
                        {item.divider && <ListLinks.Divider />}
                        {!item.heading &&
                            <ListLinks.RouterLink to={item.link}>
                                {item.icon}
                                <span>{item.text}</span>
                            </ListLinks.RouterLink>
                        }
                    </React.Fragment>
                )}
            </ListLinks>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default Menu