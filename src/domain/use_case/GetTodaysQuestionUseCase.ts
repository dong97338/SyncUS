import CodeResponse from '@/app/code_response'
import { Result } from '@/app/types'
import QuestionRepository from '@/data/repository/question_repository'

// 오늘의 질문 가져오기
export default class GetTodaysQuestionUseCase {
	async getQuestion(userId: string, teamId: string): Promise<CodeResponse> {
		// 질문리스트DB에서 오늘의 질문을 가져옴
		// input: userId: number, teamId: string
		// output: qusetionId: number

		const question_repository = new QuestionRepository()
		const response = await question_repository.read()

		return new CodeResponse(
			response.result,
			response.errorCode,
			response.payload,
		)
	}
	uploadAnswer(
		questionId: string,
		userResponse: string,
		userId: string,
		isPrivate: boolean,
		teamCode: string,
		date: Date,
	): CodeResponse {
		try {
			// DB에 질문과 답변을 업로드, RAG 처리
			// input: questionId: number, userResponse: string, userId: number, isPrivate: boolean, teamCode: number, date: Date
			// output: 없음

			return new CodeResponse(Result.SUCCESS, '성공', 'Success')
		} catch (error) {
			return new CodeResponse(Result.ERROR, '실패', error)
		}
	}
	getHistory(userId: string): CodeResponse {
		try {
			// 지금까지 내가 한 답변 모아 출력
			// input: userId: number
			// output: chatList: {}

			return new CodeResponse(Result.SUCCESS, '성공', 'Success')
		} catch (error) {
			return new CodeResponse(Result.ERROR, '실패', error)
		}
	}
}
