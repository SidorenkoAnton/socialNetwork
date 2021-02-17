import { act } from "react-dom/test-utils"
const SEND_MASSAGE = 'SEND-MASSAGE'
const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY'

let initialState = {
	dialogs: [
		{ id: 1, name: 'Anton' },
		{ id: 2, name: 'Vasa' },
		{ id: 3, name: 'Andrei' },
		{ id: 4, name: 'Valera' },
		{ id: 5, name: 'HrenZnaet' }
	],
	massages: [
		{ id: 1, massage: 'hi' },
		{ id: 2, massage: 'how is tour it kamasutra' },
		{ id: 3, massage: 'yo' },
	],
	newMassageBody: ''
}


const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MASSAGE:
			let body = state.newMassageBody
			state.massages.push({ id: 6, massage: body })
			state.newMassageBody = ''
			return state

		case UPDATE_NEW_MASSAGE_BODY:
			state.newMassageBody = action.body
			return state
		default:
			return state

	}
}


export let sendMassageCreator = () => {
	return { type: SEND_MASSAGE }
}

export let updateNewMassageBodyCreator = (body) => {
	return ({ type: UPDATE_NEW_MASSAGE_BODY, body: body })
}

export default dialogsReducer;



