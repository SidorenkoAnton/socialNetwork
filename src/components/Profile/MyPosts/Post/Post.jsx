import s from './Post.module.css'

const Post = (props) => {

	return (
		<div className={s.item}>
			<img src="https://i.ytimg.com/vi/TQLI5oH9oTk/maxresdefault.jpg" alt="" />
			{props.massage}
			<div>like {props.likeCounts}</div>
		</div>


	)
}

export default Post;