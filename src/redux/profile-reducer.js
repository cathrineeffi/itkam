import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    profile: {},
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
    newPostText: 'it-kamasutra.com',
    isFetching: true
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileAPI.getProfile(userId).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUserProfile(data));
        })
    }
}

export default profileReducer;