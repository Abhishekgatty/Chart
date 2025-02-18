import React from 'react';
import { Media } from '../../components';
import { useUserData } from '../../store/user';

const ProfileHead = () => {
    const { userData, loading, error } = useUserData();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="tyn-profile-head">
            {/* Profile Cover */}
            {/* Uncomment this section if you want to display the cover image */}
            {/* <div className="tyn-profile-cover">
                <img className="tyn-profile-cover-image" src={userData.cover} alt="" />
            </div> */}

            {/* Profile Info */}
            <div className="tyn-profile-info">
                <Media.Group className="align-items-start">
                    {/* Profile Avatar */}
                    <Media size="4xl" bordered className="tyn-profile-avatar">
                        <img src={userData.avatar} alt="" />
                    </Media>

                    {/* Profile Name and Username */}
                    <Media.Col>
                        <Media.Row>
                            <h4 className="name">{userData.name} <br /><span className="username">@{userData.userName}</span></h4>
                        </Media.Row>
                    </Media.Col>
                </Media.Group>
            </div>
        </div>
    );
};

export default ProfileHead;