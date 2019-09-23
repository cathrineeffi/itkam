import React from 'react';
import classes from './Profile.module.scss'
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <div>
                <img src="https://s3-us-west-2.amazonaws.com/dailyscene-media/wp-content/uploads/snapchatheader.jpg" class="ava" width="100"/>
                <p>My Name</p>
                <Posts/>
            </div>
        </div>
    )
}

export default Profile;

