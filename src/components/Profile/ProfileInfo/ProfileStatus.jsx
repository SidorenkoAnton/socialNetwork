
import React, { useEffect, useState } from 'react'
import s from './ProfileInfo.module.css'



const ProfileStatus = (props) => {

	const [status, setStatus] = useState(props.status)
	const [editMode, setEditMode] = useState(false)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const toggleEditMode = () => {
		setEditMode(!editMode)
		props.updateStatus(status)
	}

	const changedStatus = (value) => {
		setStatus(value)
	}

	console.log('RENDER');

	return (
		<div >
			<div className={s.descriptionBlock__about}>
				<div className={s.descriptionBlock__about_item}>Статус:</div> {editMode ?
					<input onChange={(e) => changedStatus(e.target.value)} autoFocus={true} onBlur={toggleEditMode} value={status} />
					: <span onDoubleClick={toggleEditMode}>{props.status ? props.status : 'Статус'}</span>}
				<div className={s.descriptionBlock__about_item}>Имя:</div>  {props.fullName}
			</div>
		</div >
	)

}

export default ProfileStatus;