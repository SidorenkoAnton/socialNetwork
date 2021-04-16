const TOGGLE_FOLLOWED = 'TOGGLE-FOLLOWED'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_TOTAL_USERS_COUNT = 'SET_CURRENT_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FETCHING_FOLLOWING = 'TOGGLE_IS_FETCHING_FOLLOWING'



let initialState = {
    items: [],
    usersOnPage: 7,
    totalUsersCount: 5,
    totalUsersPage: 1,
    currentUsersPage: 1,
    isFetching: false,
    isFetchingFollowing: []
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FETCHING_FOLLOWING:
            return {
                ...state,
                isFetchingFollowing: [state.isFetchingFollowing.filter(el => el == action.isFetchingId), action.isFetchingId]
            }
        default:
            return state
    }

}


export const toggleFollow = (userId) => {
    return { type: TOGGLE_FOLLOWED, userId }
}


export const setUsers = (users) => {
    return { type: SET_USERS, users }
}

export const setCurrentTotalUsersCount = (users) => {
    return { type: SET_CURRENT_TOTAL_USERS_COUNT, users }
}

export const setCurrentPage = (selectedPage) => {
    return { type: SET_CURRENT_PAGE, selectedPage }
}

export const TogleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}

export const toggleIsFetchingFollowing = (isFetchingId) => {
    return { type: TOGGLE_IS_FETCHING_FOLLOWING, isFetchingId }
}









export default usersReducer