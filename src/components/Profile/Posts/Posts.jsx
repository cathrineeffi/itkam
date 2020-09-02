import React from 'react';
import classes from './Posts.module.scss'
import Post from "./Post/Post";

const Posts = (props) => {
    let postsElement = props.postsData.map( p => <Post txt={p.txt} img={p.img} likes={p.likes} />);
    let newPostElement = React.createRef();
    let addPost = () => {
       let text = newPostElement.current.value;
       props.addPost(text);
    }

    return (
        <div className="posts">
            <h2>My posts</h2>
            <button onClick={addPost}>Add Post</button>
            <textarea ref={newPostElement}></textarea>
            {postsElement}
        </div>
    )
}

export default Posts;

