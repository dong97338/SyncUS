import CodeResponse from '@/app/code_response'
import { Result } from '@/app/types'

// 구매 취소 및 환불하는 기능
export default class CancelAndRefundUseCase {
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
