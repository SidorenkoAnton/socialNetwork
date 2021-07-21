
import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Massage from './Masage/Massage'
import { Redirect } from 'react-router-dom'
import { Formik } from 'formik'
import type { SendMassageActionType, InitialStateDialogsType, InitialStateMassagesType } from '../../redux/dialogs-reducer'

type MapStateToPropsType = {
	dialogs: Array<InitialStateDialogsType>
	massages: Array<InitialStateMassagesType>
}
type MapDispatchToProps = {
	sendMassage: (massageBody: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToProps


const Dialogs = (props: PropsType) => {


	let dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
	let massagesElements = props.massages.map(massage => <Massage massage={massage.massage} />)


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

type FormValuesType = {
	massageBody: string
}

type InputFormType = {
	sendMassage: (massageBody: string) => void
}

const DialogsInputForm = (props: InputFormType) => {


	const formInitialValues: FormValuesType = { massageBody: '' }
	return (
		<Formik
			initialValues={formInitialValues}
			onSubmit={(value) => props.sendMassage(value.massageBody)}
		>
			{({ handleSubmit, values, handleChange }) => (
				<form onSubmit={handleSubmit}>
					<textarea
						/* type='text' */
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