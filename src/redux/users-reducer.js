const TOGGLE_FOLLOWED = 'TOGGLE-FOLLOWED'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_TOTAL_USERS_COUNT = 'SET_CURRENT_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'



let initialState = {
    items: [],
    usersOnPage: 7,
    totalUsersCount: 5,
    totalUsersPage: 1,
    currentUsersPage: 4,
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOWED:
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed, location: { ...user.location } }
                    }
                    else return user
                }),
            }

        case SET_USERS:
            return {
                ...state,
                items: [...action.users]
            }
        case SET_CURRENT_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentUsersPage: action.selectedPage
            }
        default:
            return state
    }

}


export const toggleFollowAC = (userId) => {
    return { type: TOGGLE_FOLLOWED, userId }
}


export const setUsersAC = (users) => {
    return { type: SET_USERS, users }
}

export const setCurrentTotalUsersCountAC = (users) => {
    return { type: SET_CURRENT_TOTAL_USERS_COUNT, users }
}

export const setCurrentPageAC = (selectedPage) => {
    return { type: SET_CURRENT_PAGE, selectedPage }
}







export default usersReducer