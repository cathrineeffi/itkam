import React from 'react';
import classes from './Profile.module.scss'

const Profile = () => {
    return (
        <div className="content">
            <img src="https://skinali-market.ru/upload/resize_cache/iblock/a34/1920_384_156420db5d35cfb82f16501d0f4565d1d/a3470bf8e3f38c896f37b7e76152ae5d.jpg" alt=""/>
            <div>
                <img src="https://s3-us-west-2.amazonaws.com/dailyscene-media/wp-content/uploads/snapchatheader.jpg" class="ava" width="100"/>
                <p>My Name</p>
                <div className="posts">
                    <h2>My posts</h2>
                    <div className="item">post1</div>
                    <div className="item">post2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;

