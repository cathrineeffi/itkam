import React from 'react';
import classes from './Profile.module.scss'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    let postsData = [
        {id: 1, txt: 'post1 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png', likes: 10},
        {id: 2, txt: 'post2 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://24enota.ru/uploads/content/1055.jpg'},
        {id: 3, txt: 'post3 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png'},
        {id: 4, txt: 'post4 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png', likes: 5},
        {id: 5, txt: 'post5 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://24enota.ru/uploads/content/1055.jpg'}
    ];
    return (
        <div>
            <img src="https://skinali-market.ru/upload/resize_cache/iblock/a34/1920_384_156420db5d35cfb82f16501d0f4565d1d/a3470bf8e3f38c896f37b7e76152ae5d.jpg" alt=""/>
            <ProfileInfo />
            <Posts postsData={postsData} />
        </div>
    )
}

export default Profile;

