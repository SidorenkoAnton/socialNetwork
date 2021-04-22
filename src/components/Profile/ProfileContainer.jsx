import React from 'react'
import Profile from './Profile';
import * as axios from 'axios'
import { setUserProfile, getProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 16500
		}
		this.props.getProfile(userId)
	}


	render() {
		if (!this.props.isAuth) return <Redirect to='/login' />

		return (
			<div >
				<Profile {...this.props} profile={this.props.profile} />
			</div >
		)
	}
}



let mapStateToProps = (state) => ({
	state: state.profilePage,
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth

})

let profileContainerWithUserId = withRouter(ProfileContainer)
export default connect(mapStateToProps, { setUserProfile, getProfile })(profileContainerWithUserId)