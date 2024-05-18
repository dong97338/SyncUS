import CodeResponse from '@/app/code_response'
import { Result } from '@/app/types'

// 컬러옵션에 대한 시공사례/제품사진/상품 이미지를 DB에서 불러오는 기능
export default class ColorOptionUseCase {
	loadAll(): CodeResponse {
		try {
			// input:
			// output:

			return new CodeResponse(Result.SUCCESS, '성공', 'Success')
		} catch (error) {
			return new CodeResponse(Result.ERROR, '실패', error)
		}
	}
}
