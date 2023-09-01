export default {
	SET_USER(state, user) {
		state.isLoggedIn = !!user
		state.user = user || null
	},
	SET_ERROR(state, message) {
		state.error = message
	},
	SET_FLOW(state, flow) {
		state.error = '' // Resets error message
		state.flow = flow
	}
}
