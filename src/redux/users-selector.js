
export const getItem = (state) => {
    return state.usersPage.items
}

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











