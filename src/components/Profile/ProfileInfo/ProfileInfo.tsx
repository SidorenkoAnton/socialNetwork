import Preloader from '../../Common/Preloader/Preloader';
import React from 'react'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import { compose } from 'redux';
import { InitialStateProfileType } from '../../../redux/profile-reducer'



type ProfileInfoPropsType = {
	profile: InitialStateProfileType | null
	status: string
	updateStatus: (status: string) => void
	getStatus: (userId: number) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div >
			<div>
				<img className={s.profileImage} src="https://img5.goodfon.ru/original/1920x1200/3/29/priroda-ozero-peizazh-gornye-vershiny-gory.jpg" alt="" />
			</div>
			<div className={s.descriptionBlock} >
				<div className={s.descriptionBlock__avatar}>
					<img src={props.profile.photos.large} alt="" />
				</div>
				<ProfileStatus fullName={props.profile.fullName} status={props.status} updateStatus={props.updateStatus} />

			</div>
		</div >
	)
}


export default compose(React.memo)(ProfileInfo);