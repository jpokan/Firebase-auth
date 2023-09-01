/**
 * Authentication actions:
 * Sign Up, Log In, Log Out, Forgot Password, etc
 * 1. Email & Password flow
 * 2. Google flow
 */
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	sendEmailVerification,
	signOut
} from 'firebase/auth'

import app from '~/plugins/firebase/app.client.js'
import provider from '~/plugins/firebase/google.client.js'
const auth = getAuth(app)

export default {
	emailSignIn(context, { email, password }) {
		if (!auth.currentUser) {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					context.commit('SET_ERROR', '')
				})
				.catch((error) => {
					context.commit('SET_ERROR', 'Failed email or password')
				})
			return
		}
		console.log('User is already signed in')
	},
	emailCreateUser(context, { email, password }) {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user
				if (!user.emailVerified) {
					sendEmailVerification(auth.currentUser).then(() => {
						// Email verification sent!
						console.log('Email verification sent!')
					})
				}
			})
			.catch((error) => {
				context.commit('SET_ERROR', error.message)
			})
	},
	logout(context) {
		signOut(auth)
			.then(() => {
				// Signed out
			})
			.catch((error) => {
				// An error happened.
			})
	},
	// Social Login & SignUp
	google(context) {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential.accessToken
				// The signed-in user info.
				const user = result.user
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message
				// The email of the user's account used.
				const email = error.email
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error)
				// ...
			})
	},
	emailVerify() {
		sendEmailVerification(auth.currentUser).then(() => {
			// Email verification sent!
			// ...
		})
	}
}
