import { Formik } from 'formik'
import React from 'react'
import s from './Login.module.css'






const Login = () => {
	return (
		<div>
			<h2>Login</h2>
			<Formik
				initialValues={{ email: '', password: '', rememberMe: '' }}
				onSubmit={(value) => console.log(JSON.stringify(value))}
			>
				{({ values, handleSubmit, handleChange, isSubmitting }) => (
					<div className={s.loginForm}>
						<form onSubmit={handleSubmit}>
							<div className={s.loginForm__item}>
								<input
									type='text'
									placeholder='Login'
									onChange={handleChange}
									value={values.login}
									name='email'
								/>
							</div>
							<div className={s.loginForm__item}>
								<input
									type='text'
									placeholder='password'
									onChange={handleChange}
									value={values.password}
									name='password'
								/>
							</div>
							<div className={s.loginForm__item}>
								<label>
									<input
										className={s.checkboxInput}
										type='checkbox'
										onChange={handleChange}
										value={isSubmitting}
										name='rememberMe'
									/><span>Remember me</span>
								</label>
							</div>
							<button>Login</button>
						</form>
					</div>
				)}
			</Formik>
		</div>
	)
}

export default Login