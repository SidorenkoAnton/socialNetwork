import React from 'react'
import Profile from './Profile';
import { setUserProfile, getProfile } from '../../redux/profile-reducer';
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
	}

	render() {
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


export default compose(connect(mapStateToProps, { setUserProfile, getProfile }), withRouter, withAuthRedirect)(ProfileContainer)