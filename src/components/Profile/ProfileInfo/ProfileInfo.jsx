import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}


	return (
		<div >
			<div>
				<img src="https://img5.goodfon.ru/original/1920x1200/3/29/priroda-ozero-peizazh-gornye-vershiny-gory.jpg" alt="" />
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

export default ProfileInfo;