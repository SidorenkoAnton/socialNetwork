const { updateStatus, setStatus, default: profileReducer } = require("./profile-reducer")


test('status should be update', () => {
	let state = {
		status: ''
	}
	let action = setStatus('testStatus')
	let nuewState = profileReducer(state, action)
	expect(nuewState.status).toBe('testStatus')
})
