import React from 'react';
import classes from './Profile.module.scss'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <img src="https://skinali-market.ru/upload/resize_cache/iblock/a34/1920_384_156420db5d35cfb82f16501d0f4565d1d/a3470bf8e3f38c896f37b7e76152ae5d.jpg" alt=""/>
            <ProfileInfo />
            <Posts postsData={props.postsData} />
        </div>
    )
}

export default Profile;

