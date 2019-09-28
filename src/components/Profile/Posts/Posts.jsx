import React from 'react';
import classes from './Posts.module.scss'
import Post from "./Post/Post";

const Posts = (props) => {
    let postsElement = props.postsData.map( p => <Post txt={p.txt} img={p.img} likes={p.likes} />);

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

