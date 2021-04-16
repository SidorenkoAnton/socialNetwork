import React from 'react'
import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setAuthUser } from './../../redux/auth-reducer'


class HeaderContainer extends React.Component {

	componentDidMount() {

		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
			.then(response => {

				if (response.data.resultCode == 0) {
					this.props.setAuthUser(response.data.data)
				}
			}
			)
	}

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

export default connect(mapStateToProps, { setAuthUser })(HeaderContainer);