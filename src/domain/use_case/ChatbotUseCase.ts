import { db } from '@/data/firebase/index'
import CodeResponse from '@/app/code_response'
import OpenAIService from '@/data/service/open_ai_service'
import { Result } from '@/app/types'
import {
	collection,
	doc,
	getDoc,
	addDoc,
	query,
	where,
	getDocs,
	setDoc,
} from 'firebase/firestore'

export default class ChatbotUseCase {
	private sessions: Map<
		number,
		{ sessionId: string; history: { role: 'user'|'assistant'|'system'; content: string }[] }
	>

	constructor() {
		this.sessions = new Map<
			number,
			{ sessionId: string; history: { role: 'user'|'assistant'|'system'; content: string }[] }
		>()
	}

	//
	async userQuery(
		history: { role: 'user'|'assistant'|'system'; content: string }[],
		userKey: number,
		teamCode: number,
		date: Date,
	): Promise<CodeResponse> {
		const open_ai_service = new OpenAIService()
    console.log('updated history', history)
		const response = await open_ai_service.getAnswer(history)

		return new CodeResponse(
			response.result,
			response.errorCode,
			response.payload,
		)
	}

	async sessionCreate(
		userInput: { role: 'user'|'assistant'|'system'; content: string }[],
		userKey: number,
		teamCode: number,
		date: Date,
	): Promise<CodeResponse> {
		const open_ai_service = new OpenAIService()
		//세션 생성
		const sessionData = userInput
		const sessionName = userInput[0].content.substring(0, 10)
		//세션 첫 질문에 대한 대답: {role: 'assistant', content: response.content}
		const response = (await open_ai_service.getAnswer(sessionData)).payload
		//히스토리에 추가
		sessionData.push(response)
		//파이어베이스에 세션 저장하면서 받아온 세션 아이디를 전역 변수에 저장
		const docRef = await addDoc(collection(db, 'session'), {
			userKey,
			sessionName,
			sessionData,
		})
		this.sessions.set(userKey, {
			sessionId: docRef.id,
			history: sessionData,
		})
		console.log('sessions', this.sessions)

		return new CodeResponse(
			Result.SUCCESS,
			'세션 생성 성공',
			{res: response.content, sessionId: docRef.id},
		)
	}

	async loadSession(
		userKey: number,
		sessionId: string,
	): Promise<CodeResponse> {
		const docRef = doc(db, 'session', sessionId)
		const sessionDoc = await getDoc(docRef)
		const sessionData = sessionDoc.data()
		const history = sessionData?.messages
		this.sessions.set(userKey, {
			sessionId,
			history,
		})
		//세션 히스토리 반환
		return new CodeResponse(Result.SUCCESS, '세션 로드 성공', sessionData)
	}

	async listSessions(userKey: number): Promise<CodeResponse> {
		const q = query(
			collection(db, 'session'),
			where('userKey', '==', userKey),
		)
		const querySnapshot = await getDocs(q)
		return new CodeResponse(
			Result.SUCCESS,
			'세션 리스팅 성공',
			querySnapshot,
		)
	}

	async updateSession(
		sessionId: string,
		userKey: number,
		sessionName: string,
		sessionData: any,
	): Promise<CodeResponse> {
		const docRef = doc(db, 'session', sessionId)
    await setDoc(docRef, {
        userKey,
        sessionName,
        sessionData,
    }, { merge: true });
		return new CodeResponse(
			Result.SUCCESS,
			'세션 업데이트 성공',
			sessionData,
		)
	}


	summarizeInitialMessage(message: string): string {
		return message.substring(0, 20)
	}
}
