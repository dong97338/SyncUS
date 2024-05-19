'use client'
import TeamRepository from '@/data/repository/team_repository'
import { FunctionComponent, useState, useEffect, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'

const Frame: FunctionComponent = () => {
	let teamId = 'xxxxxxxx'
	const totalBars = 4
	const [numResponses, setNumResponses] = useState(0)
	const team_repository = new TeamRepository()
	const router = useRouter()
	const [storedInput, setStoredInput] = useState('')

	const [forceUpdate, setForceUpdate] = useState(0) // Dummy state for forcing updates

	const forceComponentUpdate = () => {
		setForceUpdate((prev) => prev + 1) // Increment to trigger re-render
	}
	useEffect(() => {
		const fetchData = async () => {
			const team_response = await team_repository.read(teamId)
			setNumResponses(team_response.payload.answeredUserList.length)
		}
		console.log('numResponses updated to:', numResponses)

		fetchData()
	}, [numResponses])

	const renderStatusBar = () => {
		const bars = []
		let isActiveCount = notEnough ? numResponses : totalBars

		for (let i = 0; i < totalBars; i++) {
			const isActive = i < isActiveCount
			bars.push(
				<div
					key={i}
					className={`flex-1 relative h-1 ${
						isActive ? 'bg-blue-500' : 'bg-sub'
					}`}
				/>,
			)
		}

		return (
			<>
				{bars}
				<img
					className="w-4 relative h-4 overflow-hidden shrink-0"
					alt=""
					src="/lock-open.svg"
				/>
			</>
		)
	}

	const [notEnough, setNotEnough] = useState(true)

	const [showPopup, setShowPopup] = useState(true)
	const [showWarning, setShowWarning] = useState(false)

	const togglePopup = () => {
		setShowPopup(!showPopup)
		setNotEnough(!notEnough)
		setShowWarning(true)
	}

	const WarningPopup = () => {
		return (
			<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
				<div className="bg-white p-4 rounded-lg shadow-lg">
					<h2 className="text-lg font-bold">답변이 열렸습니다.</h2>
					<p>"우리"의 답변을 확인해보세요!</p>
					<button
						className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
						onClick={() => setShowWarning(false)}
					>
						확인
					</button>
				</div>
			</div>
		)
	}

	const PopupWindow = () => {
		const [inputValue, setInputValue] = useState('')

		const handleInputChange = (event: {
			target: { value: SetStateAction<string> }
		}) => {
			setInputValue(event.target.value)
		}

		const [answers, setAnswers] = useState<
			{ name: string; text: string }[]
		>([])
		const handleSubmit = () => {
			if (inputValue.trim()) {
				setAnswers((prevAnswers) => [
					...prevAnswers,
					{ name: '이재윤 기획자', text: inputValue },
				])
				setInputValue('') // Clear input after submission
				togglePopup()
				setNumResponses((prevCount) => prevCount + 1)
				forceComponentUpdate()
			}
		}

		const handleButtonClick = () => {
			setStoredInput(inputValue) // Store the current text in state
			togglePopup() // Toggle the visibility of the popup
		}

		return (
			<div
				className="absolute bottom-0 left-[calc(50%_-_200px)] bg-white rounded-t-xl shadow-popup z-50"
				style={{
					width: '330px',
					height: '320px',
					padding: '30px 36px',
				}}
			>
				<h2 className="text-lg font-bold">나의 대답</h2>
				<textarea
					placeholder=" 답변을 입력하세요"
					className="w-full p-2 h-32 border border-gray-400 rounded mt-4 px-0.5"
					value={inputValue} // Bind the input to the state
					onChange={handleInputChange} // Handle changes
					style={{ lineHeight: '1.5' }}
				/>
				<button
					className="w-full p-2 mt-4 bg-blue-500 text-white py-3 px-4 rounded"
					onClick={handleButtonClick}
					disabled={!inputValue.trim()}
				>
					제출하기
				</button>
			</div>
		)
	}

	const responseText = notEnough
		? `${numResponses}명이 답변했어요.`
		: '모두 답변했어요!'

	return (
		<div className="w-full relative bg-flowkit-white h-[980px] overflow-hidden text-left text-lg text-type-base font-pretendard">
			<div className="absolute top-[0px] left-[calc(50%_-_187.5px)] shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] bg-flowkit-white w-[375px] h-[70px] flex flex-row items-center justify-between pt-[0px] px-5 pb-[0px] box-border">
				<div className="flex flex-row items-center justify-start gap-[10px]">
					<img
						className="w-2 relative h-4"
						alt=""
						src="/vector-18.svg"
						onClick={() => router.push('/')}
					/>
					<div className="relative">질문</div>
				</div>
				<div className="flex-1" />{' '}
				{/* This pushes the '질문' to the left */}
			</div>
			{/* Adjusted "오늘의 질문" position to avoid overlap and improve visibility */}
			<div className="absolute top-[70px] left-[calc(50%_-_187.5px)] shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] bg-cornflowerblue-200 w-[375px] h-56 text-xs text-flowkit-white">
				<div className="absolute top-[40px] left-[calc(50%_-_37.5px)] text-lg">
					오늘의 질문
				</div>
				<div className="absolute top-[93px] left-[calc(50%_-_87.5px)] flex flex-col items-center justify-start text-center">
					<div className="relative font-medium">
						<p className="m-0">
							“피드백을 주고받을 때 어떤 방식이 가장”
						</p>
						<p className="m-0">효과적이라고 생각하나요?”</p>
					</div>
				</div>

				<div className="absolute top-[148px] left-[calc(50%_-_37.5px)]">
					{responseText}
				</div>
				<div className="absolute top-[183px] left-[calc(50%_-_117.5px)] w-[236px] flex flex-row items-center justify-center gap-[2px]">
					{renderStatusBar()}
				</div>
			</div>
			<div className="absolute top-[339px] left-[92px] flex flex-row items-center justify-start">
				<div className="w-6 h-6" />
			</div>

			<div>{showPopup && <PopupWindow />}</div>

			<div
				className={`absolute top-[304px] left-[calc(50%_-_187.5px)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-sub w-[375px] h-[606px] text-sm text-type-white-background ${
					notEnough ? 'blur' : ''
				}`}
			>
				<img
					className="absolute top-[183px] left-[50px] max-h-full w-[275px]"
					alt=""
					src="/vector-21.svg"
				/>
				<img
					className="absolute top-[345px] left-[50px] max-h-full w-[275px]"
					alt=""
					src="/vector-20.svg"
				/>
				<img
					className="absolute top-[509px] left-[50px] max-h-full w-[275px]"
					alt=""
					src="/vector-19.svg"
				/>

				<div className="absolute top-[32px] left-[50px] flex flex-col items-start justify-start gap-[23px] ">
					<div
						className="scrollable-content"
						style={{
							height: '450px',
							overflowY: 'auto',
						}}
					>
						<div className="w-72 h-[139px] flex flex-col items-start justify-start gap-[4px]">
							<div className="flex flex-row items-center justify-start gap-[8px]">
								<img
									className="w-6 relative rounded-full h-6 object-cover"
									alt=""
									src="avatar-user@2x.png"
								/>
								<div className="relative">이재윤 기획자</div>
							</div>
							<div className="w-[282px] relative text-base leading-[140%] text-type-base2 inline-block h-[107px] shrink-0 ">
								{storedInput}
							</div>
							<div className="w-[275px] h-[66px] flex flex-row items-center justify-start">
								<div className="flex-1 h-6 overflow-hidden" />
							</div>
						</div>
						<div className="w-72 h-[139px] flex flex-col items-start justify-start gap-[4px]">
							<div className="flex flex-row items-center justify-start gap-[8px]">
								<img
									className="w-6 relative rounded-full h-6 object-cover"
									alt=""
									src="/ellipse-81@2x.png"
								/>
								<div className="relative">이유정 디자이너</div>
							</div>
							<div className="w-[282px] relative text-base leading-[140%] text-type-base2 inline-block h-[107px] shrink-0 ">
								피드백을 받을 때는 구체적인 예시를 들어주는 것이
								가장 효과적이라고 생각해요. 예를 들어, 디자인의
								어떤 부분이 어떻게 개선될 수 있는지를 명확히
								설명해주면 더 이해하기 쉽고, 반영하기도
								수월해요.
							</div>
							<div className="w-[275px] h-[66px] flex flex-row items-center justify-start">
								<div className="flex-1 h-6 overflow-hidden" />
							</div>
						</div>
						<div className="flex flex-col items-start justify-start relative gap-[4px]">
							<div className="flex flex-row items-center justify-start gap-[8px] z-[0]">
								<img
									className="w-6 relative rounded-full h-6 object-cover"
									alt=""
									src="/ellipse-8-1@2x.png"
								/>
								<div className="relative">이준형 개발자</div>
							</div>
							<div className="w-[275px] relative text-base leading-[140%] text-type-base2 inline-block h-[110px] shrink-0 ">
								피드백은 직설적으로 주고받는 것이 좋다고
								생각합니다. 문제를 명확하게 짚어주고 개선할 점을
								분명히 알려주는 방식이 가장 효과적이에요.
								불필요한 오해를 줄일 수 있고, 빠르게 개선할 수
								있죠.
							</div>
							<div className="w-[275px] !m-[0] absolute top-[142px] left-[0px] flex flex-row items-center justify-start ">
								<div className="flex-1 h-6 overflow-hidden" />
							</div>
						</div>
						<div className="flex flex-col items-start justify-start relative gap-[10px]">
							<div className="flex flex-row items-center justify-start gap-[8px] z-[0]">
								<img
									className="w-6 relative rounded-full h-6 object-cover"
									alt=""
									src="/ellipse-8-2@2x.png"
								/>
								<div className="relative">이동현 개발자</div>
							</div>
							<div className="w-[275px] relative text-base leading-[140%] text-type-base2 inline-block h-[110px] shrink-0 z-[1]">
								저는 피드백을 줄 때 긍정적인 점을 먼저 언급한 후
								개선점을 이야기하는 방식이 가장 좋다고
								생각합니다. 이렇게 하면 피드백을 받는 사람이
								방어적으로 반응하지 않고, 더 수용적으로 받아들일
								수 있어요.
							</div>
							<div className="w-[275px] !m-[0] absolute top-[81px] left-[0px] h-[52px] z-[2]" />
						</div>
						<div>{showWarning && <WarningPopup />}</div>
					</div>
				</div>
				<div className="absolute top-[517px] left-[0px] w-[375px] h-[89px] text-center text-base text-flowkit-white">
					<div className="absolute top-[0px] left-[0px] bg-flowkit-white w-[375px] h-[89px] overflow-hidden">
						<div className="absolute top-[14px] left-[27px] w-[304px] h-[52px]">
							<img
								className="absolute top-[0px] left-[0px] w-[297.6px] h-11"
								alt=""
								src="/rectangle-22.svg"
							/>
							<div className="absolute top-[0px] left-[0px] rounded-xl bg-c9aff w-[304px] h-[52px] flex flex-row items-center justify-center py-3 px-0 box-border">
								<div
									className="flex-1 relative"
									onClick={() => router.push('/')}
								>
									나가기
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Frame
