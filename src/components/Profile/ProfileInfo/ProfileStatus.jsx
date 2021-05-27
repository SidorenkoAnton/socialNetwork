
import React from 'react'
import s from './ProfileInfo.module.css'



class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	toggleEditMode = () => {
		this.setState({
			editMode: !this.state.editMode
		})
		this.props.updateStatus(this.state.status)

	}

	changedStatus = (value) => {
		this.setState({ ...this.state, status: value })
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({ ...this.state, status: this.props.status })
		}
	}


	render() {

		return (
			<div >
				<div className={s.descriptionBlock__about}>
					<div className={s.descriptionBlock__about_item}>Статус:</div> {this.state.editMode ?
						<input onChange={(e) => this.changedStatus(e.target.value)} autoFocus={true} onBlur={this.toggleEditMode} value={this.props.profile.aboutMe} />
						: <span onDoubleClick={this.toggleEditMode}>{this.props.status ? this.props.status : 'Статус'}</span>}
					<div className={s.descriptionBlock__about_item}>Имя:</div>  {this.props.profile.fullName}
				</div>
			</div >
		)
	}
}

export default ProfileStatus;