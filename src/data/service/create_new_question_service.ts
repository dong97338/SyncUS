import CodeResponse from '@/app/code_response'
import { Question, Result } from '@/app/types'
import TeamRepository from '../repository/team_repository'
import AnswerRepository from '../repository/answer_repository'
import UserRepository from '../repository/user_repository'
import QuestionRepository from '../repository/question_repository'
import OpenAI from 'openai'

const apiKey = process.env.NEXT_PUBLIC_SOLAR_API_KEY
const openai = new OpenAI({
	apiKey: apiKey,
	baseURL: 'https://api.upstage.ai/v1/solar',
	dangerouslyAllowBrowser: true,
})
//add
export default class CreateNewQuestion {
	static create(userId: string, teamId: string) {
		throw new Error('Method not implemented.')
	}
	async create(userId: string, teamId: string): Promise<CodeResponse> {
		try {
			const team_repository = new TeamRepository()
			const team_response = await team_repository.read(teamId)
			console.log(team_response)
			if (
				team_response.payload.headcount ==
				team_response.payload.answeredUserList.length
			) {
				const answer_repository = new AnswerRepository()
				const responses = await Promise.all(
					team_response.payload.answeredUserList.map(
						(userId: string) =>
							answer_repository.read(
								userId,
								team_response.payload.questionKey,
							),
					),
				)

				const user_repository = new UserRepository()
				const userNames = await Promise.all(
					team_response.payload.answeredUserList.map(
						async (tmpuserId: string) => {
							const user_response = await user_repository.read(
								tmpuserId,
							)
							return {
								userKey: tmpuserId,
								userName: user_response.payload.name,
							}
						},
					),
				)

				const userNamesMap = userNames.reduce(
					(acc, { userKey, userName }) => {
						acc[userKey] = userName
						return acc
					},
					{},
				)

				const combinedResponse = responses
					.map((response) => {
						const { userKey, content } = response.payload
						const userName = userNamesMap[userKey]
						return `${userName}: ${content}\n`
					})
					.join('')

				const question_repository = new QuestionRepository()
				const question_response_1 = await question_repository.read(
					team_response.payload.questionKey,
				)

				let prompt =
					question_response_1.payload.content +
					combinedResponse +
					'여기에 프롬프트 입력'

				console.log(prompt)
				const chatCompletion = await openai.chat.completions.create({
					model: 'solar-1-mini-chat',
					messages: [
						{
							role: 'user',
							content: prompt,
						},
					],
					stream: true,
				})

				let response = ''
				for await (const chunk of chatCompletion) {
					response += chunk.choices[0]?.delta?.content || ''
				}

				console.log(response)
				let questionData: Question = {
					content: response,
				}

				const question_response = await question_repository.upload(
					questionData,
				)
				console.log(question_response)
				console.log(teamId)
				console.log(question_response.payload.id)
				const team_response_2 =
					await team_repository.updateLastQuestionId(
						teamId,
						question_response.payload,
					)
				return new CodeResponse(
					Result.SUCCESS,
					'SOLAR_API_SUCCESS',
					response,
				)
			} else {
				return new CodeResponse(Result.SUCCESS, 'NOT_ALL_ANSWERED', '')
			}
		} catch (error) {
			return new CodeResponse(
				Result.ERROR,
				'CREATE_NEW_QUESTION_ERROR',
				error,
			)
		}
	}
}
