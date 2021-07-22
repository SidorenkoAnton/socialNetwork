import React from 'react'
import s from './../Dialogs.module.css'


interface MassagePropsType {
	massage: string
}


const Massage = (props: MassagePropsType) => {
	return (
		<div className={s.massage}>
			{props.massage}
		</div>
	)
}

export default Massage