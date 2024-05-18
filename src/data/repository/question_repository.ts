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

export default class QuestionRepository {
	async upload(questionData: Question): Promise<CodeResponse> {
		try {
			// const time = new Date()
			const newQuestion = new QuestionModel(
				questionData.content,
			).toObject()

			const docRef = doc(collection(db, 'questions'))
			await setDoc(docRef, newQuestion)
			return new CodeResponse(
				Result.SUCCESS,
				'DATA_QR_UPLOAD_SUCCESS',
				docRef.id,
			)
		} catch (error) {
			return new CodeResponse(Result.ERROR, 'DATA_QR_UPLOAD_FAIL', error)
		}
	}

	async read(questionId: string): Promise<CodeResponse> {
		try {
			const docRef = doc(db, 'questions', questionId)
			const docSnap = await getDoc(docRef)
			if (!docSnap.exists()) {
				return new CodeResponse(
					Result.ERROR,
					'DATA_QR_READ_FAIL',
					'No such document!',
				)
			}
			return new CodeResponse(Result.SUCCESS, 'DATA_QR_READ_SUCCESS', {
				id: docSnap.id,
				...docSnap.data(),
			})
		} catch (error) {
			return new CodeResponse(Result.ERROR, 'DATA_QR_READ_FAIL', error)
		}
	}
}
