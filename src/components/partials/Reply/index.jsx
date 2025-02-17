import classNames from 'classnames'
import React, { Fragment } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Image, Media } from '../../../components'
import { EmojiSmileFill, FiletypeDocx, PencilSquare, PersonVideo3, PlayFill, TelephoneForwardFill, TelephoneXFill, ThreeDots, Trash } from 'react-bootstrap-icons'
import { Button, Dropdown } from 'react-bootstrap'

const Reply = ({className, children}) => {
    const wrapClass = classNames({
        "tyn-reply": true,
        [`${className}`]: className,
    })
  return (
    <div className={wrapClass}>
        {children}
    </div>
  )
}

export default Reply

const ReplySeparator = ({className, children}) => {
  const wrapClass = classNames({
      "tyn-reply-separator": true,
      [`${className}`]: className,
  })
  return (
    <div className={wrapClass}>
        {children}
    </div>
  )
}

Reply.Separator = ReplySeparator;

const ReplyItem = ({className, incoming, outgoing, children}) => {
  const wrapClass = classNames({
      "tyn-reply-item": true,
      "incoming": incoming,
      "outgoing": outgoing,
      [`${className}`]: className,
  })
  
  return (
    <div className={wrapClass}>
        {children}
    </div>
  )
}

Reply.Item = ReplyItem;

const ReplyAvatar = ({className, avatar}) => {
  const wrapClass = classNames({
      "tyn-reply-avatar": true,
      [`${className}`]: className,
  })
  return (
    <div className={wrapClass}>
        <Media size="md" shape="circle">
          <Image src={avatar} alt="" />
        </Media>
    </div>
  )
}

Reply.Avatar = ReplyAvatar;

const ReplyGroup = ({className, children}) => {
  const wrapClass = classNames({
      "tyn-reply-group": true,
      [`${className}`]: className,
  })
  return (
    <div className={wrapClass}>
        {children}
    </div>
  )
}

Reply.Group = ReplyGroup;

const ReplyBubble = ({className, children}) => {
  const wrapClass = classNames({
      "tyn-reply-bubble": true,
      [`${className}`]: className,
  })
  return (
    <div className={wrapClass}>
        {children}
    </div>
  )
}

Reply.Bubble = ReplyBubble;

const ReplyText = ({className, children}) => {
  const wrapClass = classNames({
      "tyn-reply-text": true,
      [`${className}`]: className,
  })
  return (
    <div className={wrapClass}>
        {children}
    </div>
  )
}

Reply.Text = ReplyText;

const ReplyMedia = ({className, list}) => {
  const wrapClass = classNames({
      "tyn-reply-media": true,
      [`${className}`]: className,
  })
  return (
    <div className={wrapClass}>
        <Gallery>
            {list?.map((item,index) => 
                <Fragment key={index}>
                  {item.type === "image" &&
                      <Item
                          original={item.src}
                          thumbnail={item.src}
                          width={item.width}
                          height={item.height}
                          cropped
                      >
                          {({ ref, open }) => (
                          <a href="#" 
                              onClick={(e) => {
                                  e.preventDefault()
                                  open(e)
                              }} ref={ref} className="tyn-thumb">
                              <img src={item.thumb} className="tyn-image" alt="" /> 
                          </a>
                          )}
                      </Item>
                  }
                  {item.type === "video" &&
                      <Item content={
                        <div className="pswp__content-video">
                            <div className="ratio ratio-16x9">
                                <iframe src={item.src} title="Iframe video" ></iframe>
                            </div>
                        </div>
                      }>
                          {({ ref, open }) => (
                          <a href="#" 
                              onClick={(e) => {
                                  e.preventDefault()
                                  open(e)
                              }} ref={ref} className="tyn-video">
                              <img src={item.poster} className="tyn-image" alt="" /> 
                              <div className="tyn-video-icon">
                                <PlayFill />
                              </div>
                          </a>
                          )}
                      </Item>
                  }
                </Fragment>
            )}
        </Gallery>
    </div>
  )
}

Reply.Media = ReplyMedia;

const ReplyLink = ({className, content}) => {
  const wrapClass = classNames({
      "tyn-reply-link": true,
      "has-thumb": content.thumb,
      [`${className}`]: className,
  })
  return (
    <div className={wrapClass}>
        {content.thumb && 
          <div className="tyn-reply-link-thumb">
            <a href={content.link} target="_blank">
                <h6 className="tyn-reply-link-title">{content.title}</h6>
                <img src={content.thumb} alt="" />
            </a>
          </div>
        }
        <div className="tyn-reply-anchor">
          <a href={content.link} target="_blank">{content.link}</a>
        </div>
    </div>
  )
}

Reply.Link = ReplyLink;

const ReplyFile = ({className, content}) => {
  const wrapClass = classNames({
      "tyn-reply-file": true,
      [`${className}`]: className,
  })
  return (
    <>
    {content.map((item,index)=>
      <div key={index} className={wrapClass}>
        <a href="#" className="tyn-file">
            <Media.Group>
                <Media size="lg" className="text-bg-light">
                    {item.ext === "docx" && <FiletypeDocx/>}
                </Media>
                <Media.Col>
                    <h6 className="name">{item.name}.{item.ext}</h6>
                    <div className="meta">{item.size}</div>
                </Media.Col>
            </Media.Group>
        </a>
      </div>
    )}
    </>
  )
}

Reply.File = ReplyFile;

const ReplyCall = ({className, content, time}) => {
  const wrapClass = classNames({
      "tyn-reply-call": true,
      [`${className}`]: className,
  })
  return (
    <div className={wrapClass}>
        <a href="#" className="tyn-call">
            <Media.Group>
                <Media size="lg" className={classNames({
                  "text-bg-light": content.result === "success",
                  "text-bg-danger": content.result === "missed",
                })}>
                  {content.type === "audio" && (content.result === "success" && <TelephoneForwardFill /> || content.result === "missed" && <TelephoneXFill />) } 
                  {content.type === "video" && <PersonVideo3 />}
                </Media>
                <Media.Col>
                    <h6 className="name">
                      {content.result === "missed" && "Missed "}
                      {content.type === "audio" && "Audio Call"}
                      {content.type === "video" && "Video Call"}
                    </h6>
                    <div className="meta">{time}</div>
                </Media.Col>
            </Media.Group>
        </a>
    </div>
  )
}

Reply.Call = ReplyCall;

const ReplyTools = ({className, imoji = true}) => {
  const wrapClass = classNames({
      "tyn-reply-tools": true,
      [`${className}`]: className,
  })
  return (
        <ul className={wrapClass}>
          {imoji && <li>
              <Button variant="transparent" size="sm" className="btn-icon btn-pill" >
                  <EmojiSmileFill />
              </Button>
          </li>}
          <Dropdown drop="up-centered">
              <Dropdown.Toggle variant="transparent" size="sm" className="btn-icon btn-pill">
                  <ThreeDots />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xxs">
                  <ul className="tyn-list-links">
                      <li>
                          <a href="#">
                              <PencilSquare />
                              <span>Edit</span>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <Trash />
                              <span>Delete</span>
                          </a>
                      </li>
                  </ul>
              </Dropdown.Menu>
          </Dropdown>
        </ul>
    )
}

Reply.Tools = ReplyTools;