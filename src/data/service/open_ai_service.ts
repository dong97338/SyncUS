import OpenAI from 'openai'
import CodeResponse from '@/app/code_response'
import { Result } from '@/app/types'
import ChatCompletionRequestMessage from 'openai'

export default class OpenAIService {
	private openai: OpenAI

	constructor() {
		this.openai = new OpenAI({
			apiKey: process.env.NEXT_PUBLIC_SOLAR_API_KEY,
      baseURL: 'https://api.upstage.ai/v1/solar',
			dangerouslyAllowBrowser: true,
		})
	}

	async getAnswer(
		history: { role: 'user'|'assistant'; content: string }[],
	): Promise<CodeResponse> {
try {
  const response = await this.openai.chat.completions.create({
    model: 'solar-1-mini-chat',
    messages: history, // Wrap history in an array
  })
  return new CodeResponse(
    Result.SUCCESS,
    '성공적으로 답변을 받아왔습니다.',
    response.choices[0].message,
  )
} catch (error) {
			return new CodeResponse(
				Result.ERROR,
				'답변을 받아오는 과정에서 에러가 발생했습니다.',
				error,
			)
		}
	}
}
