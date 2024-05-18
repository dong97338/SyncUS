'use client'

import '@ahaui/css/dist/index.min.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import ChatbotUseCase from '@/domain/use_case/ChatbotUseCase' // Ensure the path is correct
import { CodeResponse, Result } from '@/app/types'
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

	const userKey = 1 // Example userKey, replace with actual logic
	const teamCode = 1 // Example teamCode, replace with actual logic

	const chatbotUseCase = new ChatbotUseCase()

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

	const handleLoadSession = async (sessionId: string) => {
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

	return (
		<main className="flex w-full min-h-screen flex-col items-center justify-between p-4">
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
						<SidebarMenu.Item eventKey="+ New Chat" onClick={()=>{setSessionName('새로운 채팅'),setResponse([])}}>
							+ New Chat
						</SidebarMenu.Item>

						{sessions.map((session) => (
							<SidebarMenu.Item
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
				<ul>
					{response.map((item, index) => (
						<BubbleChat
							key={index}
							text={item.content}
							type={item.role === 'user' ? 'inbound' : 'outbound'}
							avatar={() =>
								item.role != 'user' && (
									<img
										className="size-12"
										src="/frame-156751@2x.png"
									/>
								)
							}
						/>
					))}
				</ul>
			</div>

			<div className="w-full max-w-md mx-auto mt-8">
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
				<button
					onClick={handleNewChat}
					className="w-full p-2 mt-4 bg-green-500 text-white rounded"
				>
					+ New Chat
				</button>
			</div>

			<div className="w-full max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded">
				<h3 className="text-xl font-semibold">Sessions:</h3>
				<ul>
					{sessions.map((session) => (
						<li key={session.id}>
							<button
								onClick={() => handleLoadSession(session.id)}
							>
								{session.sessionName}
							</button>
						</li>
					))}
				</ul>
				{/* <FrameComponent2 />
        <FrameComponent3 /> */}
			</div>
		</main>
	)
}
