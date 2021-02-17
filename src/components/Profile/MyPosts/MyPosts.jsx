import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer'


const MyPosts = (props) => {

	let postsElements = props.postsData.map(post => <Post massage={post.massage} likeCounts={post.likeCounts} />)
	let newPostElement = React.createRef()

	let addPost = () => {
		props.dispatch(addPostActionCreator())
		newPostElement.current.value = ''
	}

	let newPostText = () => {
		let newText = newPostElement.current.value
		props.dispatch(updateNewPostTextActionCreator(newText))

	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div className="">
					<textarea onChange={newPostText} ref={newPostElement} name="" id="" cols="30" rows="10" value={props.newPostText}></textarea>
				</div>
				<div className="">
					<button onClick={addPost}>add Post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>

	)
}

export default MyPosts;