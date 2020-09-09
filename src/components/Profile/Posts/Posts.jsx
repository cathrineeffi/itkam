import React from 'react';
import classes from './Posts.module.scss'
import Post from "./Post/Post";

const Posts = (props) => {
    let postsElement = props.profilePage.postsData.map( p => <Post txt={p.txt} img={p.img} likes={p.likes} />);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className="posts">
            <h2>My posts</h2>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText} />
            <button onClick={addPost}>Add Post</button>
            {postsElement}
        </div>
    )
}

export default Posts;

