import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { Formik } from 'formik'
import { PropsFromReduxType } from './MyPostsContainer'



const MyPosts = (props: PropsFromReduxType) => {
	let postsElements = props.posts.map(post => <Post key={post.id} massage={post.massage} likeCounts={post.likeCounts} />)
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<ProfilePostInputForm addPost={props.addPost} />
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>

	)
}

type ProfilePostInputFormPropsType = {
	addPost: (massageBody: string) => void
}

const ProfilePostInputForm = (props: ProfilePostInputFormPropsType) => {

	const FormikInitialValue = { profilePostInput: '' }
	type FormikInitialValueType = typeof FormikInitialValue
	return (
		<Formik
			initialValues={FormikInitialValue as FormikInitialValueType}
			onSubmit={(value) => props.addPost(value.profilePostInput)}
			validate={(values) => console.log(values)}
		>
			{({ values, handleSubmit, handleChange }) => (
				<form onSubmit={handleSubmit}>
					<div className="">
						<textarea onChange={handleChange}
							name="profilePostInput"
							cols={30}
							rows={10}
						/>
					</div>
					<div className="">
						<button >add Post</button>
					</div>
				</form>
			)}
		</Formik >
	)
}

export default MyPosts;