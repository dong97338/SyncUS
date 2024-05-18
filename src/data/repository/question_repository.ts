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
} from 'firebase/firestore'
import { db } from '../firebase'

export default class QuestionRepository {
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

	async readRandomQuestion(): Promise<CodeResponse> {
		try {
			const allDocs = await getDocs(collection(db, 'questions'))
			const docCount = allDocs.size
			if (docCount === 0) {
				throw new Error('No documents found')
			}
			const randomIndex = Math.floor(Math.random() * docCount)
			let randomDoc
			let i = 0
			allDocs.forEach((doc) => {
				if (i === randomIndex) {
					randomDoc = {
						...doc.data(),
						id: doc.id,
					}
				}
				i++
			})

			return new CodeResponse(
				Result.SUCCESS,
				'DATA_QR_READ_SUCCESS',
				randomDoc,
			)
		} catch (error) {
			return new CodeResponse(Result.ERROR, 'DATA_QR_READ_FAIL', error)
		}
	}
}
