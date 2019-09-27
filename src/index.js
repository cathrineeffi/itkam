import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: 1, txt: 'post1 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png', likes: 11},
    {id: 2, txt: 'post2 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://24enota.ru/uploads/content/1055.jpg'},
    {id: 3, txt: 'post3 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png'},
    {id: 4, txt: 'post4 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png', likes: 5},
    {id: 5, txt: 'post5 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas', img: 'https://24enota.ru/uploads/content/1055.jpg'}
];
let dialogsData = [
    {id: 1, name: 'Dimich'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Maf'},
    {id: 4, name: 'LM'},
];
let messagesData = [
    {id: 1, message: 'Hoi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'How are you??'},
    {id: 4, message: 'GGGGGG'}
];

ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
