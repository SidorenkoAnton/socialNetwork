import React from 'react'
import Header from './Header'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { getAndSetAuthUser, logoutUser } from '../../redux/auth-reducer'


interface HeaderMapStateToProps {
	login: string | null
	isAuth: boolean
}



class HeaderContainer extends React.Component<HeaderPropsFromReduxType> {

	render() {
		return (
			<Header {...this.props} />
		)
	}
}

const mapStateToProps = (state: AppStateType): HeaderMapStateToProps => ({
	login: state.auth.login,
	isAuth: state.auth.isAuth,
})

let connector = connect(mapStateToProps, { getAndSetAuthUser, logoutUser })

type HeaderPropsFromReduxType = ConnectedProps<typeof connector>

export default connector(HeaderContainer);