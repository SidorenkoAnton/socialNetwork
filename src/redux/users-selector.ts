import { createSelector } from "reselect"
import { AppStateType } from './redux-store'

export const getItemsSelector = (state: AppStateType) => {
    return state.usersPage.items
}

export const getItem = createSelector(getItemsSelector, (items) => {
    return items.filter(el => true)
})

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentUsersPage = (state: AppStateType) => {
    return state.usersPage.currentUsersPage
}

export const getFollowingIsProgress = (state: AppStateType) => {
    return state.usersPage.followingIsProgress
}

export const getUsersOnPage = (state: AppStateType) => {
    return state.usersPage.usersOnPage
}

export const getToggleFollowingProgress = (state: AppStateType) => {
    return state.usersPage.toggleFollowingProgress
}











