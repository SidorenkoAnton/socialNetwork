
import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Massage from './Masage/Massage'
import { Redirect } from 'react-router-dom'





const Dialogs = (props) => {

	let state = props.dialogPage
	let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
	let massagesElements = state.massages.map(massage => <Massage massage={massage.massage} />)


	let onNewMassageChange = (e) => {
		let body = e.target.value
		props.newMassageChange(body)

	}

	let onSandMassageClick = () => {
		props.sandMassageClick()
	}

	if (!props.isAuth) return <Redirect to='/login' />

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogElements}
			</div>
			<div className={s.massages}>
				<div>{massagesElements}</div>
				<div>
					<div><input type="text" onChange={onNewMassageChange} value={state.newMassageBody} /></div>
					<div><button onClick={onSandMassageClick}>Send Massage</button></div>
				</div>

			</div>
		</div>
	)
}
export default Dialogs