'use client'

import '@ahaui/css/dist/index.min.css'
import Image from 'next/image'
import { useState, useEffect, ChangeEvent } from 'react'
import ChatbotUseCase from '@/domain/use_case/ChatbotUseCase' // Ensure the path is correct
import FrameComponent1 from '@/presentation/components/frame/frame-component1'
import FrameComponent2 from '@/presentation/components/frame/frame-component2'
import FrameComponent3 from '@/presentation/components/frame/frame-component3'
import ContentWrapper from '@/presentation/components/frame/content-wrapper'
import { SidebarMenu } from '@ahaui/react'
import './../globals.css'
import { BubbleChat } from '@ahaui/react'
import { ListBulletIcon } from '@heroicons/react/24/outline'

export default function Home() {
	const [userInput, setUserInput] = useState('')
	const [response, setResponse] = useState([])
	const [sessions, setSessions] = useState([])
	const [selectedSession, setSelectedSession] = useState(null)
	const [sessionName, setSessionName] = useState('')
	const [isSidebarVisible, setIsSidebarVisible] = useState(false) // State for sidebar visibility
	const [current, setCurrent] = useState('+ New Chat')
	const [exampleQuestions, setExampleQuestions] = useState([
		'협업할 때 선호하는 커뮤니케이션 방식은 무엇인가요?',
		'우리 디자이너는 어떤 피드백을 주면 좋아할까요?',
		'팀원들과의 의견 충돌이 있을 때 어떻게 해결할까요?',
	])

	const userKey = 1 // Example userKey, replace with actual logic
	const teamCode = 1 // Example teamCode, replace with actual logic

	const chatbotUseCase = new ChatbotUseCase()

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUserInput(event.target.value)
	}

	const handleSubmit = async () => {
		const newUserMessage = { role: 'user', content: userInput }
		setResponse((prev) => [...prev, newUserMessage]) // Update state with user input

		let updatedResponse = [...response, newUserMessage]
		if (selectedSession) {
			const result = await chatbotUseCase.userQuery(
				updatedResponse,
				userKey,
				teamCode,
				new Date(),
			)
			const botMessage = result.payload
			updatedResponse = [...updatedResponse, botMessage]
			setResponse((prev) => [...prev, botMessage])

			await chatbotUseCase.updateSession(
				selectedSession,
				userKey,
				sessionName,
				updatedResponse,
			)
		} else {
			const result = await chatbotUseCase.sessionCreate(
				updatedResponse,
				userKey,
				teamCode,
				new Date(),
			)
			setResponse((prev) => [...prev, result.payload])
		}
	}

	const handleNewChat = async () => {
		setSelectedSession(null)
		setUserInput('')
		setResponse([])
	}

	const handleLoadSession = async (sessionId) => {
		const result = await chatbotUseCase.loadSession(userKey, sessionId)
		setSelectedSession(sessionId)
		setResponse(result.payload.sessionData)
		setSessionName(result.payload.sessionName)
	}

	const fetchSessions = async () => {
		const result = await chatbotUseCase.listSessions(userKey)
		setSessions(
			result.payload.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
		)
	}

	useEffect(() => {
		fetchSessions()
	}, [])

	const toggleSidebar = () => {
		setIsSidebarVisible((prev) => !prev)
	}

	const handleExampleQuestionClick = (question) => {
		setUserInput(question)
	}

	return (
		<main className="w-full min-h-screen flex-col items-center p-4">
			{isSidebarVisible && (
				<div className="fixed overflow-hidden left-0 top-0 h-screen bg-white text-white w-64 z-10">
					<div className="h-32" />

					<SidebarMenu
						size="small"
						current={current}
						onSelect={setCurrent}
						style={{
							width: 360,
						}}
					>
						<SidebarMenu.Item
							eventKey="+ New Chat"
							onClick={() => {
								handleNewChat()
								setSessionName('새로운 채팅')
							}}
						>
							+ New Chat
						</SidebarMenu.Item>

						{sessions.map((session) => (
							<SidebarMenu.Item
								key={session.id} // Added key prop here
								eventKey={session.sessionName}
								onClick={() => handleLoadSession(session.id)}
							>
								{session.sessionName}
							</SidebarMenu.Item>
						))}
					</SidebarMenu>
				</div>
			)}
			<FrameComponent1
				toggle={
					<ListBulletIcon
						onClick={toggleSidebar}
						className="size-8 z-0"
					/>
				}
				sessionName={sessionName}
			/>
			<div className="w-full max-w-md mx-auto mt-8 p-4 text-xs">
				{response.map((item, index) => (
					<BubbleChat
						key={index}
						text={item.content}
						type={item.role === 'user' ? 'inbound' : 'outbound'}
						avatar={() =>
							item.role !== 'user' && (
								<img
									className="size-12"
									src="/frame-156751@2x.png"
									alt="Avatar" // Added alt attribute for accessibility
								/>
							)
						}
					/>
				))}
				{!selectedSession && (
					<div className="flex flex-col mt-4">
						<img
							className="size-12"
							src="/frame-156751@2x.png"
							alt="Avatar" // Added alt attribute for accessibility
						/>
						<p className="text-center mb-8">
							<span className="text-blue-500">SyncUp</span>은 팀에
							대해 궁금한 정보를 제공해요. 팀원들이 남긴 답변을
							바탕으로 답변해요.
						</p>
						{exampleQuestions.map((question, index) => (
							<button
								key={index}
								onClick={() =>
									handleExampleQuestionClick(question)
								}
								className="mb-2 p-2 bg-blue-500 text-white rounded"
							>
								{question}
							</button>
						))}
					</div>
				)}
			</div>

			<div className="fixed bottom-0 left-0 w-full p-4 bg-white shadow-md">
				<input
					type="text"
					value={userInput}
					onChange={handleInputChange}
					placeholder="Enter your question"
					className="w-full p-2 border border-gray-300 rounded mb-4"
				/>
				<button
					onClick={handleSubmit}
					className="w-full p-2 bg-blue-500 text-white rounded"
				>
					Submit
				</button>
			</div>
		</main>
	)
}
