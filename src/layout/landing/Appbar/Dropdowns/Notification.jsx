import { AppIndicator, Check2Circle, XCircle,Telephone } from 'react-bootstrap-icons';
import { Dropdown, Nav, Button } from 'react-bootstrap';
import { 
    Image,
    DropdownToggle, DropdownMenu,
    Media
} from '../../../../components';


function Notification() {
  return (
    <Dropdown autoClose="outside" className="d-inline-flex">
        <Dropdown.Toggle as={DropdownToggle} className="tyn-appbar-link">
            <AppIndicator />
            <span className="d-none">Notifications</span>
        </Dropdown.Toggle>

        <Dropdown.Menu as={DropdownMenu} align="end" className="dropdown-menu-rg" style={{marginTop: "10px"}}>
            <div className="dropdown-head">
                <div className="title"><h6>Notifications</h6></div>
                <Nav variant="tabs" defaultActiveKey="all" className="nav-tabs-line">
                    <Nav.Item>
                        <Nav.Link eventKey="unread">Unread</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="all">All</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className="dropdown-gap">
                <Media.List className="gap gap-3">
                    <Media.List.Item>
                        <NotificationMessage who={{name :"Phillip Burke", avatar : "images/avatar/1.jpg"}} when="10 hours ago" />
                    </Media.List.Item>
                    <Media.List.Item>
                        <NotificationCall who={{name :"Romy Schulte", avatar : "images/avatar/2.jpg"}} when="2 days ago" />
                    </Media.List.Item>
                    <Media.List.Item>
                        <NotificationRequest who={{name :"Thomas Poulain", avatar : "images/avatar/3.jpg"}} when="1 weeks ago" />
                    </Media.List.Item>
                    <Media.List.Item>
                        <NotificationMessage who={{name :"Gabriel Schmitz", avatar : "images/avatar/4.jpg"}} when="1 months ago" />
                    </Media.List.Item>
                </Media.List>
            </div>
        </Dropdown.Menu>
    </Dropdown>
  )
}


function NotificationMessage({who, when}) {
    return (
      <Media.Group>
          <Media shape="circle">
              {who.avatar && <Image staticImage src={who.avatar} />}
          </Media>
          <Media.Col>
              <Media.Row>
                  <span className="message"><strong>{who.name}</strong> Sent message</span>
              </Media.Row>
              <Media.Row>
                  <span className="meta">{when}</span>
              </Media.Row>
          </Media.Col>
      </Media.Group>
    )
  }
  
  function NotificationRequest({who, when}) {
    return (
      <Media.Group className="align-items-start">
          <Media shape="circle">
              {who.avatar && <Image staticImage src={who.avatar} />}
          </Media>
          <Media.Col>
              <Media.Row>
                  <span className="message"><strong>{who.name}</strong> Added You</span>
              </Media.Row>
              <Media.Row>
                  <span className="meta">{when}</span>
              </Media.Row>
              <Media.Row>
                  <ul className="tyn-btn-inline gap gap-3 pt-1">
                      <li>
                          <Button size="md" variant="primary">
                              <Check2Circle />
                              <span>Accept</span>
                          </Button>
                      </li>
                      <li>
                          <Button size="md" variant="light">
                              <XCircle />
                              <span>Reject</span>
                          </Button>
                      </li>
                  </ul>
              </Media.Row>
          </Media.Col>
      </Media.Group>
    )
  }
  
  function NotificationCall({who, when}) {
    return (
      <Media.Group className="align-items-start">
          <Media shape="circle">
              {who.avatar && <Image staticImage src={who.avatar} />}
          </Media>
          <Media.Col>
              <Media.Row>
                  <span className="message">Missed call from <strong>{who.name}</strong></span>
              </Media.Row>
              <Media.Row>
                  <span className="meta">{when}</span>
              </Media.Row>
              <Media.Row>
                  <ul className="tyn-btn-inline gap gap-3 pt-1">
                      <li>
                          <Button size="md" variant="light">
                              <Telephone />
                              <span>Call back</span>
                          </Button>
                      </li>
                  </ul>
              </Media.Row>
          </Media.Col>
      </Media.Group>
    )
  }

export default Notification