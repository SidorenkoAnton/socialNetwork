const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
	postsData: [
		{ id: 1, massage: 'hi man', likeCounts: 3 },
		{ id: 2, massage: 'watsap', likeCounts: 6 },
	],
	newPostText: 'it-camasutra'
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				massage: state.newPostText,
				likeCounts: 0,
			}
			state.postsData.push(newPost)
			state.newPostText = ''
			return state
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
			return state
		default:
			return state

	}

}

export let addPostActionCreator = () => {
	return { type: ADD_POST }
}

export let updateNewPostTextActionCreator = (newText) => {
	return { type: UPDATE_NEW_POST_TEXT, newText: newText }
}

export default profileReducer;