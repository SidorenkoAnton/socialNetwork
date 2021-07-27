
import React, { useEffect, useState } from 'react'
import s from './ProfileInfo.module.css'

interface ProfileStatusPropsType {
	status: string
	fullName: string
	updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<ProfileStatusPropsType> = (props) => {

	const [status, setStatus] = useState<string>(props.status)
	const [editMode, setEditMode] = useState<boolean>(false)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const toggleEditMode = () => {
		setEditMode(!editMode)
		props.updateStatus(status)
	}

	const changedStatus = (value: string) => {
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