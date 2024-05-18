import CodeResponse from '@/app/code_response'
import { Result } from '@/app/types'

// 프로모션 쿠폰등을 적용하고 배송 주소지에 따른 지역별 시공 가격을 반영하고 선택 옵션들에 따라 가격을 계산하고 DB에 저장, 수정하는 기능, 가격을 DB에서 불러오기 기능
export default class PriceCalculateUseCase {
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
