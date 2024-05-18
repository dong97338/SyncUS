import CodeResponse from '@/app/code_response'
import { Result } from '@/app/types'

// 상담 / 시공 일정을 잡고 DB에 저장, 수정, 불러오기 기능
export default class SchedulingUseCase {
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
