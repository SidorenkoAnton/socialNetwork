import React from 'react'
import { connect } from "react-redux"
import { toggleFollowSucess, setUsers, setCurrentTotalUsersCount, setCurrentPage, TogleIsFetching, toggleIsFollowingProgress, getUsers, toggleFollow, changePage } from "../../redux/users-reducer"
import Users from "./Users"
import * as axios from 'axios'
import { userAPI } from './../../api/userAPI'




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
        return (<Users totalUsersCount={this.props.totalUsersCount}
            usersOnPage={this.props.usersOnPage}
            currentUsersPage={this.props.currentUsersPage}
            onChangePage={this.onChangePage}
            state={this.props.state}
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
        state: state.usersPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentUsersPage: state.usersPage.currentUsersPage,
        usersOnPage: state.usersPage.usersOnPage,
        followingIsProgress: state.usersPage.followingIsProgress,
        toggleFollowingProgress: state.usersPage.toggleFollowingProgress
    }

}



export default connect(mapStateToProps,
    { toggleFollowSucess, setUsers, setCurrentTotalUsersCount, setCurrentPage, TogleIsFetching, toggleIsFollowingProgress, getUsers, toggleFollow, changePage })(UsersContainer)
