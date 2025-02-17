import React from 'react'
import { Media } from '../../components'
import user from '../../store/user'

const ProfileHead = () => {
  return (
    <div className="tyn-profile-head">
        <div className="tyn-profile-cover">
            <img className="tyn-profile-cover-image" src={user.cover} alt="" />
        </div>
        <div className="tyn-profile-info">
            <Media.Group className="align-items-start">
                <Media size="4xl" bordered className="tyn-profile-avatar">
                    <img src={user.avatar} alt="" />
                </Media>
                <Media.Col>
                    <Media.Row>
                        <h4 className="name">{user.name} <span className="username">@{user.handle}</span></h4>
                    </Media.Row>
                </Media.Col>
            </Media.Group>
        </div>
    </div>
  )
}

export default ProfileHead