import OpenAI from 'openai'
import CodeResponse from '@/app/code_response'
import { Result } from '@/app/types'
import ChatCompletionRequestMessage from 'openai'
import {Pinecone} from '@pinecone-database/pinecone'


const pinecone = new Pinecone({apiKey: process.env.PINECONE_API_KEY})
const ns = pinecone.Index('data').namespace('hook')

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
		history: { role: 'user' | 'assistant' | 'system'; content: string }[],
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
	//문자열을 입력받아 임베딩을 만들고 finecone에 업로드하는 코드
	async uploadRAG(
		history: { role: 'user' | 'assistant' | 'system'; content: string }[],
	): Promise<CodeResponse> {
		try {

			const queryEmbeddings = await this.openai.embeddings.create({
				model: "solar-embedding-1-large-query",
				input: history.map((message) => message.content),
				encoding_format: "float",
			});
			const retrievedChunks = await ns.query({vector: queryEmbeddings, topK: 7, includeMetadata: true, filter: {userId: userId}})
			const contexts = retrievedChunks.matches.map(context => context.metadata.chunk).join('\n\n')
			console.log('Contexts:', contexts)
			messages.push({role: 'system', content: `[Context]${contexts}`})
			return new CodeResponse(
				Result.SUCCESS,
				'성공적으로 업로드를 완료했습니다.',
				null,
			)
		} catch (error) {
			return new CodeResponse(
				Result.ERROR,
				'업로드 과정에서 에러가 발생했습니다.',
				error,
			)
		}
	}

	//getAnswer, finecone, solar api를 이용한 rag코드
	async getRAG(
		history: { role: 'user' | 'assistant' | 'system'; content: string }[],
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
