import React from 'react';
import classes from './Profile.module.scss'
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div>
            <img src="https://skinali-market.ru/upload/resize_cache/iblock/a34/1920_384_156420db5d35cfb82f16501d0f4565d1d/a3470bf8e3f38c896f37b7e76152ae5d.jpg" alt=""/>
            <div>
                <img src="https://s3-us-west-2.amazonaws.com/dailyscene-media/wp-content/uploads/snapchatheader.jpg" class="ava" width="100"/>
                <p>My Name</p>
                <Posts/>
            </div>
        </div>
    )
}

export default Profile;

