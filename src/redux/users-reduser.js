const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        /*{
            id: 0,
            name: 'LM',
            status: 'I am cute',
            followed: true
        },
        {
            id: 1,
            name: 'Anna',
            status: 'I am cute',
            followed: true
        },
        {
            id: 2,
            name: 'Maf',
            status: 'I am cute',
            followed: false
        },
        {
            id: 3,
            name: 'Dimich',
            status: 'I am cute',
            followed: true
        }*/
    ]
}

export const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return {...u, followed: true}
                    }
                    else {
                        return u;
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return {...u, followed: false}
                    }
                    else {
                        return u;
                    }
                })
            }
        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users ]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReduser;