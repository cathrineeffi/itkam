const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'


let store = {
    _callSubscriber() {
        console.log('State changed');
    },
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    txt: 'post1 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas',
                    img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png',
                    likes: 11
                },
                {
                    id: 2,
                    txt: 'post2 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas',
                    img: 'https://c1.hotpng.com/preview/939/618/467/totoro-pusheen-the-cat-sticker-png-clipart.jpg'
                },
                {
                    id: 3,
                    txt: 'post3 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas',
                    img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png'
                },
                {
                    id: 4,
                    txt: 'post4 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas',
                    img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png',
                    likes: 5
                },
                {
                    id: 5,
                    txt: 'post5 sdasdasdasd sadasdasd  asdasdasdasd sadasdasdas',
                    img: 'https://c1.hotpng.com/preview/939/618/467/totoro-pusheen-the-cat-sticker-png-clipart.jpg'
                }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'LM', img: 'https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg'},
                {id: 2, name: 'Anna', img: 'http://zabavnik.club/wp-content/uploads/foto_na_avu_3_19111524.jpg'},
                {id: 3, name: 'Maf', img: 'https://i.pinimg.com/564x/5c/39/7c/5c397ca4e6c1c04b08b1e9f01dcd31b1.jpg'},
                {id: 4, name: 'Dimich', img: 'https://i.mycdn.me/image?id=838968512981&ts=00000000190000012c&plc=WEB&tkn=*HgeUJJ9phxm9HWqJX7D7VF1zf5Y&fn=sqr_288'}
            ],
            messagesData: [
                {id: 1, message: 'Hoi', my: true},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'How are you??', my: true},
                {id: 4, message: 'GGGGGG', my: true}
            ],
            newMessage: 'sdfsdfsdf'
        },
        sidebar: {
            friends: [
                {id: 1, name: 'LM', img: 'https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg'},
                {id: 2, name: 'Anna', img: 'http://zabavnik.club/wp-content/uploads/foto_na_avu_3_19111524.jpg'},
                {id: 3, name: 'Maf', img: 'https://i.pinimg.com/564x/5c/39/7c/5c397ca4e6c1c04b08b1e9f01dcd31b1.jpg'},
                {id: 4, name: 'Dimich', img: 'https://i.mycdn.me/image?id=838968512981&ts=00000000190000012c&plc=WEB&tkn=*HgeUJJ9phxm9HWqJX7D7VF1zf5Y&fn=sqr_288'}
            ]
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                txt: this._state.profilePage.newPostText,
                img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png',
                likes: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === ADD_MESSAGE) {
            let newMes = {
                id: 4,
                message: this._state.dialogsPage.newMessage,
                my: true
            }
            this._state.dialogsPage.messagesData.push(newMes);
            this._state.dialogsPage.newMessage = "";
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessage = action.newText;
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT, newText: text
})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) => ({
        type: UPDATE_NEW_MESSAGE, newText: text
})

export default store;