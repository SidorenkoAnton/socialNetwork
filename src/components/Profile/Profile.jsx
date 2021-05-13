import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
	if (!props.isAuth) return <Redirect to='/login' />
	return (
		<div >
			<ProfileInfo profile={props.profile} getStatus={props.getStatus} status={props.status} updateStatus={props.updateStatus} />
			<MyPostsContainer />
		</div >
	)
}

export default Profile;