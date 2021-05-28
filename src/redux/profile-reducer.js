const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                txt: state.newPostText,
                img: 'https://otvet.imgsmail.ru/download/263951837_910c5e9d089a3e6439947862d496f607_800.png',
                likes: 0
            }
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer;