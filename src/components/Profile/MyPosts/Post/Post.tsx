import React from 'react'
import s from './Post.module.css'

interface PostPropsType {
	massage: string
	likeCounts: number
	key: number
}

const Post = (props: PostPropsType) => {

	return (
		<div className={s.item}>
			<img src="https://i.ytimg.com/vi/TQLI5oH9oTk/maxresdefault.jpg" alt="" />
			{props.massage}
			<div>like {props.likeCounts}</div>
		</div>


	)
}

export default Post;