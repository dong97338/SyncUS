'use client'

import Image from 'next/image'
import { useState, useCallback } from 'react'
import GetTodaysQuestionUseCase from '@/domain/use_case/GetTodaysQuestionUseCase'
import { Result } from './types'

export default function Page() {
	const [userId, setUserId] = useState('')
	const [teamId, setTeamId] = useState('')
	const [responseMessage, setResponseMessage] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleCreate = async () => {
		if (!userId || !teamId) {
			alert('Please enter both userId and teamId.')
			return
		}
		setIsLoading(true)
		const getTodaysQuestion = new GetTodaysQuestionUseCase()
		const response = await getTodaysQuestion.getQuestion(userId, teamId)
		setIsLoading(false)
		setResponseMessage(response.message)
	}

	return (
		<div>
			<input
				type="text"
				value={userId}
				onChange={(e) => setUserId(e.target.value)}
				placeholder="Enter User ID"
			/>
			<input
				type="text"
				value={teamId}
				onChange={(e) => setTeamId(e.target.value)}
				placeholder="Enter Team ID"
			/>
			<button onClick={handleCreate} disabled={isLoading}>
				{isLoading ? 'Loading...' : 'Create New Question'}
			</button>
			{responseMessage && <p>{responseMessage}</p>}
		</div>
	)
}
