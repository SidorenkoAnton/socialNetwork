import React from 'react'
import Profile from './Profile';
import { setUserProfile, getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 16500
		}
		this.props.getProfile(userId)
		this.props.getStatus(userId)
	}

	render() {
		return (
			<div >
				<Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
			</div >
		)
	}
}



let mapStateToProps = (state) => ({
	state: state.profilePage,
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth,
	status: state.profilePage.status
})


export default compose(connect(mapStateToProps, { setUserProfile, getProfile, getStatus, updateStatus }), withRouter, withAuthRedirect)(ProfileContainer)