import CodeResponse from '@/app/code_response'
import { Result } from '@/app/types'

//  DB 데이터를 가공해(시공기사, 메니저, 고객) 알림톡 또는 메일 (제작, 배송 및 시공 관련 메세지 , 특이사항, AS, 문의사항 ) 전송 기능
export default class NotificationUseCase {
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
