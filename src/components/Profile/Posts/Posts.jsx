import React from 'react';
import classes from './Posts.module.scss'
import Post from "./Post/Post";

const Posts = () => {
    let postsData = [
        {id: 1, txt: 'post1 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png', likes: 10},
        {id: 2, txt: 'post2 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://24enota.ru/uploads/content/1055.jpg'},
        {id: 3, txt: 'post3 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png'},
        {id: 4, txt: 'post4 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png', likes: 5},
        {id: 5, txt: 'post5 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://24enota.ru/uploads/content/1055.jpg'}
    ];

    let postsElement = postsData.map( p => <Post txt={p.txt} img={p.img} likes={p.likes} />);

    return (
        <div className="posts">
            <h2>My posts</h2>
            <textarea></textarea>
            <button>Add Post</button>
            {postsElement}
        </div>
    )
}

export default Posts;

