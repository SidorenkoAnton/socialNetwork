import { Formik, Field } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import s from './Login.module.css'




const Login = () => {

	let loginValidation = Yup.object().shape({
		email: Yup.string()
			.email('Invalid email address')
			.required('Requared'),
		password: Yup.string()
			.min(8, 'Must bee longer than 8 charecters')
			.required('Requared')
	})

	return (
		<div>
			<h2>Login</h2>
			<Formik
				initialValues={{ email: '', password: '', rememberMe: '' }}
				onSubmit={(value) => console.log(value)}
				validationSchema={loginValidation}
			>
				{({ values, handleSubmit, handleChange, isSubmitting, errors, handleBlur, touched }) => (
					<div className={s.loginForm}>
						<form onSubmit={handleSubmit}>
							<div className={s.loginForm__item}>
								<input
									type='text'
									placeholder='Login'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.login}
									name='email'
								/>
								{errors.email && touched.email ? errors.email : ''}
							</div>
							<div className={s.loginForm__item}>
								<input
									type='text'
									placeholder='password'
									onChange={handleChange}
									value={values.password}
									name='password'
								/>
								{errors.password && touched.password ? errors.password : ''}
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