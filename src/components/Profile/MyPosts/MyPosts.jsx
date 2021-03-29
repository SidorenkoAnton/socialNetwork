import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'



const MyPosts = (props) => {
	let postsElements = props.state.posts.map(post => <Post massage={post.massage} likeCounts={post.likeCounts} />)
	let newPostElement = React.createRef()

	let onAddPost = () => {
		props.addPost()
		newPostElement.current.value = ''
	}


	let onNewPostText = () => {
		let newText = newPostElement.current.value
		props.updateNewPostText(newText)

	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div className="">
					<textarea onChange={onNewPostText} ref={newPostElement} name="" id="" cols="30" rows="10" value={props.newPostText}></textarea>
				</div>
				<div className="">
					<button onClick={onAddPost}>add Post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>

	)
}

export default MyPosts;