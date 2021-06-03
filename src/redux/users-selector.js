import { createSelector } from "reselect"


export const getItemsSelector = (state) => {
    return state.usersPage.items
}

export const getItem = createSelector(getItemsSelector, (items) => {
    return items.filter(el => true)
})

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentUsersPage = (state) => {
    return state.usersPage.currentUsersPage
}

export const getFollowingIsProgress = (state) => {
    return state.usersPage.followingIsProgress
}

export const getUsersOnPage = (state) => {
    return state.usersPage.usersOnPage
}

export const getToggleFollowingProgress = (state) => {
    return state.usersPage.toggleFollowingProgress
}











