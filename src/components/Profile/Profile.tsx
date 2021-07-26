import s from './Profile.module.css'
import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';
import { ProfileContainerPropsFromReduxType } from './ProfileContainer'



const Profile = (props: ProfileContainerPropsFromReduxType) => {
	if (!props.isAuth) return <Redirect to='/login' />
	return (
		<div >
			<ProfileInfo profile={props.profile} getStatus={props.getStatus} status={props.status} updateStatus={props.updateStatus} />
			<MyPostsContainer />
		</div >
	)
}

export default Profile;