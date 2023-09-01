// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyALB3z57aAD2vbYe_c0PiAcPazW9DvltCY',
	authDomain: 'jpokan-auth.firebaseapp.com',
	projectId: 'jpokan-auth',
	storageBucket: 'jpokan-auth.appspot.com',
	messagingSenderId: '305560620867',
	appId: '1:305560620867:web:ebe20a316c8854f4a4a9f6',
	measurementId: 'G-DJ09X76SE6'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
