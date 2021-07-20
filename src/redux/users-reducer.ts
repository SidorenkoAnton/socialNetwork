import { act } from "react-dom/test-utils"
import { userAPI } from "../api/userAPI"

const TOGGLE_FOLLOWED_SUCESS = 'TOGGLE_FOLLOWED_SUCESS'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_TOTAL_USERS_COUNT = 'SET_CURRENT_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


type InitialStateItemsType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean

}

let initialState = {
    items: [] as Array<InitialStateItemsType>,
    usersOnPage: 7 as number,
    totalUsersCount: 5 as number,
    totalUsersPage: 1 as number,
    currentUsersPage: 1 as number,
    isFetching: false as boolean,
    followingIsProgress: false as boolean,
    toggleFollowingProgress: [] as Array<number>,
}

type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case TOGGLE_FOLLOWED_SUCESS:
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed }
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingIsProgress: action.followingIsProgress,
                toggleFollowingProgress: state.followingIsProgress ? state.toggleFollowingProgress.filter(id => id != action.isFetchingId) : [...state.toggleFollowingProgress, action.isFetchingId]
            }

        default:
            return state
    }

}


type ToggleFollowSucessActionType = {
    type: typeof TOGGLE_FOLLOWED_SUCESS
    userId: number
}

export const toggleFollowSucess = (userId: number): ToggleFollowSucessActionType => {
    return { type: TOGGLE_FOLLOWED_SUCESS, userId }
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: InitialStateItemsType
}

export const setUsers = (users: InitialStateItemsType): SetUsersActionType => {
    return { type: SET_USERS, users }
}

type SetCurrentTotalUsersCountActionType = {
    type: typeof SET_CURRENT_TOTAL_USERS_COUNT
    users: InitialStateItemsType
}

export const setCurrentTotalUsersCount = (users: InitialStateItemsType): SetCurrentTotalUsersCountActionType => {
    return { type: SET_CURRENT_TOTAL_USERS_COUNT, users }
}

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    selectedPage: number
}


export const setCurrentPage = (selectedPage: number): SetCurrentPageActionType => {
    return { type: SET_CURRENT_PAGE, selectedPage }
}

type TogleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const TogleIsFetching = (isFetching: boolean): TogleIsFetchingActionType => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}

type ToggleIsFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    followingIsProgress: boolean
    isFetchingId: number
}

export const toggleIsFollowingProgress = (followingIsProgress: boolean, isFetchingId: number): ToggleIsFollowingProgressActionType => {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, followingIsProgress, isFetchingId }
}




export const getUsers = (usersOnPage: number, currentUsersPage: number) => {
    return (dispatch: any) => {
        dispatch(TogleIsFetching(true))
        userAPI.getUsers(usersOnPage, currentUsersPage)
            .then(response => {
                dispatch(TogleIsFetching(false))
                dispatch(setCurrentTotalUsersCount(response.data.totalCount))
                dispatch(setUsers(response.data.items))
            })
    }
}

export const toggleFollow = (userFollowed: boolean, userId: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        let response: any = await userAPI.toggleFollow(userFollowed, userId)
        if (response.data.resultCode === 0) {
            dispatch(toggleFollowSucess(userId))
            dispatch(toggleIsFollowingProgress(false, userId))
        }

    }
}

export const changePage = (usersOnPage: number, selectedPage: number) => {
    return async (dispatch: any) => {
        let response = await userAPI.getUsers(usersOnPage, selectedPage)
        dispatch(TogleIsFetching(false))
        dispatch(setUsers(response.data.items))
    }
}



export default usersReducer