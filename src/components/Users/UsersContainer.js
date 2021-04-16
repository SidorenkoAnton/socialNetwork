import React from 'react'
import { connect } from "react-redux"
import { toggleFollow, setUsers, setCurrentTotalUsersCount, setCurrentPage, TogleIsFetching, toggleIsFetchingFollowing } from "../../redux/users-reducer"
import Users from "./Users"
import * as axios from 'axios'
import { userAPI } from './../../api/userAPI'




class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.TogleIsFetching(true)
        userAPI.getUsers(this.props.usersOnPage, this.props.currentUsersPage)
            .then(response => {
                this.props.TogleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setCurrentTotalUsersCount(response.data.totalCount)
            }
            )
    }

    onChangePage = (selectedPage) => {
        this.props.TogleIsFetching(true)
        this.props.setCurrentPage(selectedPage)
        userAPI.getUsers(this.props.usersOnPage, selectedPage)
            .then(response => {
                this.props.TogleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (<Users totalUsersCount={this.props.totalUsersCount}
            usersOnPage={this.props.usersOnPage}
            currentUsersPage={this.props.currentUsersPage}
            onChangePage={this.onChangePage}
            state={this.props.state}
            toggleFollow={this.props.toggleFollow}
            isFetching={this.props.isFetching}
            isFetchingFollowing={this.props.isFetchingFollowing}
            toggleIsFetchingFollowing={this.props.toggleIsFetchingFollowing} />

        )



    }
}



let mapStateToProps = (state) => {
    return {
        state: state.usersPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentUsersPage: state.usersPage.currentUsersPage,
        usersOnPage: state.usersPage.usersOnPage
    }

}



export default connect(mapStateToProps,
    { toggleFollow, setUsers, setCurrentTotalUsersCount, setCurrentPage, TogleIsFetching, toggleIsFetchingFollowing })(UsersContainer)
