import { profileAPI } from "../api/userAPI"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


type InitialStatePostsType = {
	id: number
	massage: string
	likeCounts: number
}

type InitialStateProfileType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: {
		github: string
		vk: string
		facebook: string
		instagram: string
		twitter: string
		website: string
		youtube: string
		mainLink: string
	}
	photos: {
		small: string
		large: string
	}
}

let initialState = {
	posts: [
		{ id: 1, massage: 'hi man', likeCounts: 3 },
		{ id: 2, massage: 'watsap', likeCounts: 6 },
	] as Array<InitialStatePostsType>,
	newPostText: 'it-camasutra' as string,
	profile: null as InitialStateProfileType | null,
	status: '' as string
}

type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: any) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				massage: action.massageBody,
				likeCounts: 0,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
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

type AddPostActionType = {
	type: typeof ADD_POST
	massageBody: string
}

export let addPost = (massageBody: string): AddPostActionType => {
	return { type: ADD_POST, massageBody }
}

type updateNewPostTextActionCreatorActionType = {
	type: typeof UPDATE_NEW_POST_TEXT
	newText: string
}

export let updateNewPostTextActionCreator = (newText: string): updateNewPostTextActionCreatorActionType => {
	return { type: UPDATE_NEW_POST_TEXT, newText }
}

type SetUserProfileActionType = {
	type: typeof SET_USER_PROFILE
	profile: InitialStateProfileType
}

export let setUserProfile = (profile: InitialStateProfileType): SetUserProfileActionType => {
	return { type: SET_USER_PROFILE, profile }
}



export const getProfile = (userId: number) => (dispatch: any) => {
	profileAPI.getProfile(userId)
		.then(response => dispatch(setUserProfile(response.data)))
}

export let setStatus = (status: string) => {
	return { type: SET_STATUS, status }
}

export const getStatus = (userId: number) => async (dispatch: any) => {
	let response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}




export default profileReducer;