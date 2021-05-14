import { profileAPI } from "../api/userAPI"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
	posts: [
		{ id: 1, massage: 'hi man', likeCounts: 3 },
		{ id: 2, massage: 'watsap', likeCounts: 6 },
	],
	newPostText: 'it-camasutra',
	profile: null,
	status: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				massage: state.newPostText,
				likeCounts: 0,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',

			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status,
			}
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

export let setUserProfile = (profile) => {
	return { type: SET_USER_PROFILE, profile }
}

export const getProfile = (userId) => dispatch => {
	profileAPI.getProfile(userId)
		.then(response => dispatch(setUserProfile(response.data)))
}

export let setStatus = (status) => {
	return { type: SET_STATUS, status }
}

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async dispatch => {
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}




export default profileReducer;