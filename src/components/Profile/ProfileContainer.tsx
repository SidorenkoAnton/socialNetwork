import React from 'react'
import Profile from './Profile';
import { setUserProfile, getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
/* import { RouteComponentProps } from 'react-router' */
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store'
import { InitialStateProfileType } from '../../redux/profile-reducer'

interface MathParamType {
	userId?: any
}

interface OwnPropsType extends RouteComponentProps<MathParamType> {

}

type PropsType = OwnPropsType & ProfileContainerPropsFromReduxType

class ProfileContainer extends React.Component<PropsType> {

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


interface mapStateToPropsType {
	profile: null | InitialStateProfileType
	isAuth: boolean
	status: string
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth,
	status: state.profilePage.status
})

const connector = connect(mapStateToProps, { setUserProfile, getProfile, getStatus, updateStatus })
export type ProfileContainerPropsFromReduxType = ConnectedProps<typeof connector>


export default compose(connect(mapStateToProps, { setUserProfile, getProfile, getStatus, updateStatus }), withRouter, withAuthRedirect)(ProfileContainer)