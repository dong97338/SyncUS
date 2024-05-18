import CodeResponse from '@/app/code_response'
import { Result } from '@/app/types'

// 사용자 인증 관련 기능
export default class AuthUseCase {
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
