
const SEND_MASSAGE = 'SEND-MASSAGE'


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
			return {
				...state,
				massages: [...state.massages, { id: 6, massage: action.massageBody }],
				newMassageBody: ''
			}


		default:
			return state

	}
}


export let sendMassage = (massageBody) => {
	return { type: SEND_MASSAGE, massageBody }
}



export default dialogsReducer;



