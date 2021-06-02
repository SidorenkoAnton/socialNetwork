import React from 'react'
import { connect } from "react-redux"
import { toggleFollowSucess, setCurrentPage, TogleIsFetching, toggleIsFollowingProgress, getUsers, toggleFollow, changePage } from "../../redux/users-reducer"
import { getCurrentUsersPage, getFollowingIsProgress, getIsFetching, getItem, getToggleFollowingProgress, getTotalUsersCount, getUsersOnPage } from '../../redux/users-selector'
import Users from "./Users"




class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.usersOnPage, this.props.currentUsersPage)
    }

    onChangePage = (selectedPage) => {
        this.props.TogleIsFetching(true)
        this.props.setCurrentPage(selectedPage)
        this.props.changePage(this.props.usersOnPage, selectedPage)
    }


    render() {

        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                usersOnPage={this.props.usersOnPage}
                currentUsersPage={this.props.currentUsersPage}
                onChangePage={this.onChangePage}
                items={this.props.items}
                toggleFollowSucess={this.props.toggleFollowSucess}
                isFetching={this.props.isFetching}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                toggleFollow={this.props.toggleFollow}
            />
        )
    }
}



let mapStateToProps = (state) => {
    return {
        items: getItem(state),
        isFetching: getIsFetching(state),
        totalUsersCount: getTotalUsersCount(state),
        currentUsersPage: getCurrentUsersPage(state),
        usersOnPage: getUsersOnPage(state),
        followingIsProgress: getFollowingIsProgress(state),
        toggleFollowingProgress: getToggleFollowingProgress(state)
    }

}



export default connect(mapStateToProps,
    { toggleFollowSucess, setCurrentPage, TogleIsFetching, toggleIsFollowingProgress, getUsers, toggleFollow, changePage })(UsersContainer)
