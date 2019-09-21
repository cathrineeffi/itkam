import React from 'react';
import classes from './Posts.module.scss'
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className="posts">
            <h2>My posts</h2>
            <textarea></textarea>
            <button>Add Post</button>
            <Post txt="post1 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas" img="https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png" likes="10" />
            <Post txt="post2 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas" img="https://24enota.ru/uploads/content/1055.jpg"/>
            <Post txt="post3 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas" img="https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png"/>
            <Post txt="post4 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas" img="https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png" likes="5" />
            <Post txt="post5 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas" img="https://24enota.ru/uploads/content/1055.jpg"/>
        </div>
    )
}

export default Posts;

