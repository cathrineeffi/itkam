import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addMessage, addPost, subscribe, updateNewMessage, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessage={updateNewMessage} />, document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
