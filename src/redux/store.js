//import { renderEntireTree } from './../index'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'



let store = {
	_state: {
		profilePage: {
			postsData: [
				{ id: 1, massage: 'hi man', likeCounts: 3 },
				{ id: 2, massage: 'watsap', likeCounts: 6 },
			],
			newPostText: 'it-camasutra'
		},
		dialogPage: {
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
		},
		sidebar: {

		}
	},
	getState() {
		return this._state
	},

	_callSubscriber() {

	},

	subscriber(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		profileReducer(this._state.profilePage, action)
		dialogsReducer(this._state.dialogPage, action)
		sidebarReducer(this.state.sidebar, action)
		this._callSubscriber(this._state)
	}
}

export default store

