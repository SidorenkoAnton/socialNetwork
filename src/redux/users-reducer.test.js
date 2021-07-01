
import usersReducer, { getUsers, setCurrentPage, TogleIsFetching } from './users-reducer'


test('must be current toggle is fetching', () => {
    let action = TogleIsFetching(true)
    let state = {
        items: [],
        usersOnPage: 7,
        totalUsersCount: 5,
        totalUsersPage: 1,
        currentUsersPage: 1,
        isFetching: false,
        followingIsProgress: false,
        toggleFollowingProgress: [],

    }
    let newState = usersReducer(state, action)
    expect(newState.isFetching === true).toBe(true)
})

