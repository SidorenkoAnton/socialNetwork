import Preloader from '../../Common/Preloader/Preloader';
import React from 'react'
import s from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {
	state = {
		editMode: false,
	}

	toggleEditMode = () => {
		console.log(this);
		this.setState({
			editMode: !this.state.editMode
		})
	}

	render() {


		return (
			<div >
				<div className={s.descriptionBlock__about}>
					<div className={s.descriptionBlock__about_item}>Статус:</div> {this.state.editMode ?
						<input autoFocus={true} onBlur={this.toggleEditMode} value={this.props.profile.aboutMe} />
						: <span onDoubleClick={this.toggleEditMode}>{this.props.profile.aboutMe ? this.props.profile.aboutMe : 'Статус'}</span>}
					<div className={s.descriptionBlock__about_item}>Имя:</div>  {this.props.profile.fullName}
				</div>
			</div >
		)
	}
}

export default ProfileStatus;