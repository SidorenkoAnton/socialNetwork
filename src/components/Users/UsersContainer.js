import { connect } from "react-redux"
import { toggleFollowAC, setUsersAC, setCurrentTotalUsersCountAC, setCurrentPageAC } from "../../redux/users-reducer"
import Users from "./Users"



let mapStateToProps = (state) => {
    return {
        state: state.usersPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentUsersPage: state.usersPage.currentUsersPage,
        usersOnPage: state.usersPage.usersOnPage
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentTotalUsersCount: (users) => {
            dispatch(setCurrentTotalUsersCountAC(users))
        },
        setCurrentPage: (selectedPage) => {
            dispatch(setCurrentPageAC(selectedPage))
        }
    }

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer