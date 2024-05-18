import CodeResponse from '@/app/code_response'
import { Question, Result } from '@/app/types'
import QuestionModel from '@/domain/model/question_model'
import {
	doc,
	collection,
	setDoc,
	getDocs,
	query,
	where,
	limit,
	getDoc,
} from 'firebase/firestore'
import { db } from '../firebase'

export default class AnswerRepository {
	// async upload(questionData: Question): Promise<CodeResponse> {
	// 	try {
	// 		// const time = new Date()
	// 		const newQuestion = new QuestionModel(
	// 			questionData.content,
	// 		).toObject()

	// 		const docRef = doc(collection(db, 'questions'))
	// 		await setDoc(docRef, newQuestion)
	// 		return new CodeResponse(
	// 			Result.SUCCESS,
	// 			'DATA_QR_UPLOAD_SUCCESS',
	// 			docRef.id,
	// 		)
	// 	} catch (error) {
	// 		return new CodeResponse(Result.ERROR, 'DATA_QR_UPLOAD_FAIL', error)
	// 	}
	// }

	async read(userKey: string, questionKey: string): Promise<CodeResponse> {
		try {
			const answersRef = collection(db, 'answers')
			const q = query(
				answersRef,
				where('userKey', '==', userKey),
				where('questionKey', '==', questionKey),
			)

			const querySnapshot = await getDocs(q)
			if (querySnapshot.empty) {
				return new CodeResponse(
					Result.ERROR,
					'DATA_QR_READ_FAIL',
					'No matching documents!',
				)
			}

			const docData = querySnapshot.docs[0].data()

			return new CodeResponse(Result.SUCCESS, 'DATA_QR_READ_SUCCESS', {
				id: querySnapshot.docs[0].id,
				...docData,
			})
		} catch (error) {
			return new CodeResponse(Result.ERROR, 'DATA_QR_READ_FAIL', error)
		}
	}
}
