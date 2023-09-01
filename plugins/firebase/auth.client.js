import app from '~/plugins/firebase/app.client.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import Cookie from 'js-cookie'

export default ({ store }) => {
	function init() {
		const auth = getAuth(app)
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				/* Remove cookie and user state */
				// Cookie.remove('idToken')
				store.commit('auth/SET_USER', null)
				// Set default flow to "login" when user is not found
				store.commit('auth/SET_FLOW', 'login')
				return
			}
			// Setup logged in user state
			store.commit('auth/SET_USER', {
				name: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
				emailVerified: user.emailVerified
			})
			store.commit('auth/SET_FLOW', null)

			/* Add cookie and user state */
			// user
			// 	.getIdToken()
			// 	.then((token) => {
			// 		Cookie.set('idToken', token, { secure: true, expires: 3 })
			// 	})
			// 	.catch((error) => {
			// 		console.log(error)
			// 	})
		})
	}

	init()
}
