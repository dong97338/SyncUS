'use client'

import Image from 'next/image'
import { useState, useCallback } from 'react'
import GetTodaysQuestionUseCase from '@/domain/use_case/GetTodaysQuestionUseCase'
import { Result } from './types'

export default function Home() {
	const [question, setQuestion] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const fetchQuestion = useCallback(async () => {
		setLoading(true)
		setError('')
		const getTodaysQuestion = new GetTodaysQuestionUseCase()
		try {
			const response = await getTodaysQuestion.getQuestion(
				false,
				1,
				new Date(),
			)
			if (response.result === Result.SUCCESS) {
				setQuestion(response.payload)
			} else {
				setError(response.message || 'Failed to fetch question')
			}
		} catch (err) {
			setError('An error occurred while fetching the question')
		} finally {
			setLoading(false)
		}
	}, [])

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{/* Other component code remains unchanged */}
			<button
				onClick={fetchQuestion}
				disabled={loading}
				className="mt-4 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-700 disabled:bg-gray-400"
			>
				{loading ? 'Loading...' : 'Get Today’s Question'}
			</button>

			{question && (
				<div className="mt-4">
					<h3>Todays Question:</h3>
					{/* <p>{question.content}</p> */}
				</div>
			)}
			{error && <p className="text-red-500">{error}</p>}
		</main>
	)
}
