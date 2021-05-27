import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {

	return (
		<header className={s.header}>
			<div className={s.header__item}>
				<div className={s.header__logo}>
					<img src='https://webmentor.gr/wp-content/uploads/2018/11/logo300X300.png' />
				</div>
			</div>
			<div className={s.header__item}>
				<div className={s.header__login}>
					{props.isAuth ? <div><div>{props.login}</div> <button onClick={props.logoutUser}>Logout</button></div> :
						<NavLink to='/login'>
							login
					</NavLink>}
				</div>
			</div>
		</header >
	)
}

export default Header;