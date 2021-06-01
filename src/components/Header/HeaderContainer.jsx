import React from 'react'
import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setAuthUser, getAndSetAuthUser, logoutUser } from './../../redux/auth-reducer'



class HeaderContainer extends React.Component {

	/* componentDidMount() {
		this.props.getAndSetAuthUser()
	} */

	render() {
		return (
			<Header {...this.props} />
		)
	}
}

const mapStateToProps = (state) => ({
	login: state.auth.login,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { getAndSetAuthUser, logoutUser })(HeaderContainer);