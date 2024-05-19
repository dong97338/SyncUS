'use client'
import TeamRepository from '@/data/repository/team_repository'
import { FunctionComponent, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import './styles.css'

const Frame: FunctionComponent = () => {
	let teamId = 'xxxxxxxx'
	const totalBars = 4
	const [numResponses, setNumResponses] = useState(0)
	const team_repository = new TeamRepository()
	const router = useRouter()

	useEffect(() => {
		const fetchData = async () => {
			const team_response = await team_repository.read(teamId)
			setNumResponses(team_response.payload.answeredUserList.length)
		}

		fetchData()
	}, [])

	const renderStatusBar = () => {
		const bars = []

		for (let i = 0; i < totalBars; i++) {
			const isActive = i < 4
			bars.push(
				<div
					key={i}
					className={`flex-1 relative h-1 ${
						isActive ? 'bg-c9aff' : 'bg-sub'
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

	const [isExiting, setIsExiting] = useState(false)
	const handleNavigation = (path: string) => {
		setIsExiting(true)

		setTimeout(() => {
			router.push(path)
		}, 300)
	}

	return (
		<div className={isExiting ? 'fade-exit-active' : 'fade-exit'}>
			<div className="w-full relative rounded-[30px] bg-flowkit-white h-[812px] overflow-hidden text-left text-xs text-flowkit-white font-pretendard">
				<div className="absolute top-[378px] left-[calc(50%_-_123px)] w-[82px] h-3" />
				<img className="relative w-0 h-0" alt="" src="/union.svg" />
				<div className="absolute top-[728px] left-[calc(50%_-_183px)] shadow-[0px_-4px_10px_rgba(0,_0,_0,_0.1)] bg-flowkit-white w-[375px] flex flex-row items-center justify-center pt-0 px-5 pb-6 box-border gap-[56px] text-type-base">
					<div className="flex flex-col items-center justify-start py-2 px-0 text-c9aff">
						<div className="w-8 h-8 flex flex-col items-center justify-center p-2.5 box-border">
							<img
								className="w-[21.3px] relative h-6"
								alt=""
								src="/vector.svg"
							/>
						</div>
						<div className="relative">홈</div>
					</div>
					<div className="flex flex-col items-center justify-start py-2 px-0">
						<div className="w-8 h-8 flex flex-col items-center justify-center p-2.5 box-border">
							<img
								className="w-6 relative h-6"
								alt=""
								src="/vector-1.svg"
							/>
						</div>
						<div className="relative">리스트</div>
					</div>
					<div className="flex flex-col items-center justify-start py-2 px-0">
						<div className="w-8 h-8 flex flex-col items-center justify-center p-2.5 box-border">
							<img
								className="w-[26.7px] relative h-[23px]"
								alt=""
								src="/vector-2.svg"
							/>
						</div>
						<div className="relative">설정</div>
					</div>
				</div>
				<img
					className="absolute top-[53px] left-[calc(100%_-_123px)] w-8 h-8 object-cover"
					alt=""
					src="/group-8@2x.png"
				/>
				<img
					className="absolute top-[53px] left-[calc(100%_-_173px)] w-8 h-8"
					alt=""
					src="/group-9.svg"
				/>
				<div className="absolute top-[96px] left-[calc(50%_-_163px)] rounded-xl bg-cornflowerblue-100 flex flex-row items-start justify-start py-1.5 px-3.5">
					<div className="relative font-semibold">기획자</div>
				</div>
				<div className="absolute top-[134px] left-[calc(50%_-_163px)] text-lg tracking-[-0.02em] font-semibold text-gray">
					<p className="[margin-block-start:0] [margin-block-end:7px]">
						이재윤님,
					</p>
					<p className="m-0">좋은 아침입니다 :)</p>
				</div>
				<div className="absolute top-[585px] left-[calc(50%_-_163px)] text-base tracking-[-0.02em] font-semibold text-gray">
					어떻게 하면 좋을지 물어봐요
				</div>
				<div className="absolute top-[223px] left-[calc(50%_-_178.5px)] w-[358px] h-[309px]">
					<div className="absolute top-[0px] left-[calc(50%_-_168px)] shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] rounded-xl bg-cornflowerblue-100 w-[335px] h-[309px]">
						<div className="absolute top-[24px] left-[20px]">
							오늘의 질문
						</div>
						<div className="absolute top-[85px] left-[10px] rounded-[10px] w-[317px] h-[62px] text-center text-lg">
							<div className="absolute top-[0px] left-[10px] font-medium inline-block w-[297px]">
								“피드백을 주고받을 때 어떤 방식이 가장
								효과적이라고 생각하나요?”
							</div>
						</div>
						<div className="absolute top-[176px] left-[calc(50%_-_117.5px)] rounded-xl w-[236px] flex flex-col items-center justify-end py-2 px-0 box-border gap-[6px]">
							<div className="relative">'모두 답변했어요!'</div>
							<div className="self-stretch flex flex-row items-center justify-center gap-[2px]">
								{renderStatusBar()}
							</div>
						</div>
						<div className="absolute top-[158.5px] left-[calc(50%_-_97px)] box-border w-[193px] h-px border-t-[1px] border-solid border-flowkit-white" />
					</div>
					<div className="absolute top-[229px] left-[calc(50%_-_179px)] w-[358px] h-20 overflow-hidden text-base">
						<img
							className="absolute top-[14px] left-[27px] w-[297.6px] h-11"
							alt=""
							src="/group-6.svg"
						/>
						<div
							className="absolute top-[10px] left-[27px] rounded-xl bg-cornflowerblue-200 w-[304px] h-[52px] flex flex-row items-center justify-center py-3 px-8 box-border"
							onClick={() => router.push('/todaysquestion')}
						>
							<div className="flex-1 relative font-medium">
								대답하기
							</div>
							<div className="w-5 h-5 flex flex-row items-center justify-center p-[6.3px] box-border">
								<img
									className="w-[4.7px] relative h-[9.4px]"
									alt=""
									src="/vector-8.svg"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute top-[616px] left-[calc(50%_-_167.5px)] rounded-xl bg-cornflowerblue-200 w-[335px] h-[52px] flex flex-row items-center justify-center py-3 px-8 box-border text-base">
					<div
						className="flex-1 relative font-medium"
						onClick={() => router.push('/chat')}
					>
						질문하기
					</div>
					<div className="w-5 h-5 flex flex-row items-center justify-center p-[6.3px] box-border">
						<img
							className="w-[4.7px] relative h-[9.4px]"
							alt=""
							src="/vector-81.svg"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Frame
