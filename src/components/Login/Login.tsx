import React from 'react'
import { Formik, Field } from 'formik'
import { AppStateType } from '../../redux/redux-store'
import { connect, ConnectedProps } from 'react-redux'
import * as Yup from 'yup'
import s from './Login.module.css'
/* import {AppStateType} from '../../redux/redux-store' */
import { loginUser } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'



const Login = (props: LoginPropsType) => {


	let loginValidation = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email address')
			.required('Requared'),
		password: Yup.string()
			.min(8, 'Must bee longer than 8 charecters')
			.required('Requared')
	})

	const initialValues = {
		email: '',
		password: '',
		rememberMe: false
	}

	return (
		<div>
			{props.isAuth ? (
				<Redirect to='/profile' />
			) : (
					<div>
						<h2>Login </h2>
						<Formik
							initialValues={initialValues}
							onSubmit={({ email, password, rememberMe }) => props.loginUser(email, password, rememberMe)}
							validationSchema={loginValidation}
						>
							{({ values, handleSubmit, handleChange, isSubmitting, errors, handleBlur, touched }) => (
								<div className={s.loginForm} >
									<form onSubmit={handleSubmit}>
										<div className={s.loginForm__item}>
											<input
												type='text'
												placeholder='e-mail'
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.email}
												name='email'
											/>
											{errors.email && touched.email ? errors.email : ''}
										</div>
										< div className={s.loginForm__item} >
											<input
												placeholder='password'
												type='password'
												onChange={handleChange}
												value={values.password}
												name='password'
											/>
											{errors.password && touched.password ? errors.password : ''}
										</div>
										< div className={s.loginForm__item} >
											<label>
												<input
													className={s.checkboxInput}
													type='checkbox'
													onChange={handleChange}
													/* value={isSubmitting} */
													name='rememberMe'
												/>
												<span>Remember me </span>
											</label>
										</div>
										< button > Login </button>
									</form>
								</div>
							)}
						</Formik>
					</div>
				)}
		</div>
	)
}

interface mapStateToPropsType {
	isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		isAuth: state.auth.isAuth
	}
}

const connector = connect(mapStateToProps, { loginUser })
type LoginPropsType = ConnectedProps<typeof connector>

export default connector(Login)