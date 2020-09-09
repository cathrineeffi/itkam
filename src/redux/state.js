let rerenderEntireTree = () => {
    console.log('State change');
}

let state = {
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
};

export const addPost = () => {
    let newPost = {
        id: 6,
        txt: state.profilePage.newPostText,
        img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png',
        likes: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMes = {
        id: 4,
        message: state.dialogsPage.newMessage,
        my: true
    }
    state.dialogsPage.messagesData.push(newMes);
    state.profilePage.newMessage = "";
    rerenderEntireTree(state);
}

export const updateNewMessage = (newText) => {
    state.dialogsPage.newMessage = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;