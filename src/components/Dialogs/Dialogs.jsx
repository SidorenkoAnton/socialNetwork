
import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Massage from './Masage/Massage'
import { Redirect } from 'react-router-dom'
import { Formik } from 'formik'





const Dialogs = (props) => {

	let state = props.dialogPage
	let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
	let massagesElements = state.massages.map(massage => <Massage massage={massage.massage} />)


	/* 	let onNewMassageChange = (e) => {
			let body = e.target.value
			props.newMassageChange(body)
	
		} */

	/* let onSandMassageClick = () => {
		props.sandMassageClick()
	} */

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogElements}
			</div>
			<div className={s.massages}>
				<div>{massagesElements}</div>
				<div>
					<DialogsInputForm sendMassage={props.sendMassage} />
				</div>

			</div>
		</div>
	)
}

const DialogsInputForm = (props) => {


	return (
		<Formik
			initialValues={{}}
			onSubmit={(value) => props.sendMassage(value.massageBody)}

		>
			{({ handleSubmit, values, handleChange }) => (
				<form onSubmit={handleSubmit}>
					<textarea
						type='text'
						name='massageBody'
						onChange={handleChange}
						value={values.massageBody} />
					<button type='submit'>Send</button>
				</form>
			)}
		</Formik >
	)
}

export default Dialogs