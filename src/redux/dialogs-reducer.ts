import { number } from "yup"
import { array, string } from "yup/lib/locale"

const SEND_MASSAGE = 'SEND-MASSAGE'


export type InitialStateDialogsType = {
	id: number
	name: string
}
export type InitialStateMassagesType = {
	id: number
	massage: string
}

let initialState = {
	dialogs: [
		{ id: 1, name: 'Anton' },
		{ id: 2, name: 'Vasa' },
		{ id: 3, name: 'Andrei' },
		{ id: 4, name: 'Valera' },
		{ id: 5, name: 'HrenZnaet' }
	] as Array<InitialStateDialogsType>,
	massages: [
		{ id: 1, massage: 'hi' },
		{ id: 2, massage: 'how is tour it kamasutra' },
		{ id: 3, massage: 'yo' },
	] as Array<InitialStateMassagesType>,
	newMassageBody: ''
}

type InitialStateType = typeof initialState


const dialogsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SEND_MASSAGE:
			return {
				...state,
				massages: [...state.massages, { id: 6, massage: action.massageBody }],
				newMassageBody: ''
			}
		default:
			return state

	}
}
export type SendMassageActionType = {
	type: typeof SEND_MASSAGE
	massageBody: string
}

export let sendMassage = (massageBody: string): SendMassageActionType => {
	return { type: SEND_MASSAGE, massageBody }
}




export default dialogsReducer;



