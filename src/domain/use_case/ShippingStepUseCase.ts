import CodeResponse from '@/app/code_response'
import { Result } from '@/app/types'

// 메니저가 제작, 배송 및 시공 단계를 DB에 저장, 수정, 불러오기 기능 (자동화 필요)
export default class ShippingStepUseCase {
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
