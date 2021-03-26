import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
	return (
		<div >
			<div>
				<img src="https://img5.goodfon.ru/original/1920x1200/3/29/priroda-ozero-peizazh-gornye-vershiny-gory.jpg" alt="" />
			</div>
			<div className={s.descriptionBlock} >ava+discription</div>
		</div >
	)
}

export default ProfileInfo;