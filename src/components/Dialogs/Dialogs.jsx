import { NavLink } from 'react-router-dom'
import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Massage from './Masage/Massage'
import { updateNewMassageBodyCreator, sendMassageCreator } from './../../redux/dialogs-reducer'




const Dialogs = (props) => {




	let onNewMassageChange = (e) => {
		let body = e.target.value
		props.dispatch(updateNewMassageBodyCreator(body))
	}

	let onSandMassageClick = () => {
		props.dispatch(sendMassageCreator())
	}


	let dialogElements = props.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
	let massagesElements = props.dialogPage.massages.map(massage => <Massage massage={massage.massage} />)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogElements}
			</div>
			<div className={s.massages}>
				<div>{massagesElements}</div>
				<div>
					<div><input type="text" onChange={onNewMassageChange} value={props.dialogPage.newMassageBody} /></div>
					<div><button onClick={onSandMassageClick}>Send Massage</button></div>
				</div>

			</div>
		</div>
	)
}
export default Dialogs