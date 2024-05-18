import CodeResponse from '@/app/code_response'
import { Result } from '@/app/types'

// 구매기록(결제내역, 상품 옵션, 배송지 등)을 DB에 저장, 수정, 불러오기 기능
export default class PaymentDetailUseCase {
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
