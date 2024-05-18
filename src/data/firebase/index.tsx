import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: 'khackteaml.firebaseapp.com',
	projectId: 'khackteaml',
	storageBucket: 'khackteaml.appspot.com',
	messagingSenderId: '169485729173',
	appId: '1:169485729173:web:093df2796a3395a94c4a9c',
	measurementId: 'G-PXQLVYPYFG',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

let analytics
isSupported()
	.then((isSupported) => {
		if (isSupported) {
			analytics = getAnalytics(app)
		}
	})
	.catch((error) => {
		console.error('Analytics is not supported in this environment', error)
	})

export { db, analytics }
