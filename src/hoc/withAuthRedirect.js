import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const withAuthRedirect = (Component) => {
	const RedirectComponent = (props) => {
		if (!props.isAuth) return <Redirect to='/login' />
		return (
			<Component {...props} />
		)
	}

	const mapStateToProps = (state) => {
		return {
			isAuth: state.auth.isAuth
		}
	}


	return connect(mapStateToProps)(RedirectComponent)
}

export default withAuthRedirect

