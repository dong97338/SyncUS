import CodeResponse from '@/app/code_response'
import { Result } from '@/app/types'

// 채널톡 구매 / 챗봇 기능(CS응대)
export default class ChatbotUseCase {
	method(): CodeResponse {
		try {
			// input:
			// output:

			return new CodeResponse(Result.SUCCESS, '성공', 'Success')
		} catch (error) {
			return new CodeResponse(Result.ERROR, '실패', error)
		}
	}
}
