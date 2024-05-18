import type { NextPage } from 'next'
import LayoutContainer from '@/presentation/components/layout-container'
import FrameComponent5 from '@/presentation/components/frame-component5'
import FrameComponent4 from '@/presentation/components/frame-component4'

export default function todaysquestion() {
	return (
		<div className="w-full relative bg-flowkit-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
			<div className="w-[98px] h-0.5 relative rounded bg-sub hidden" />
			<LayoutContainer vectorIconDebugCommit="unset" />
			<FrameComponent5 />
			<section className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-sm text-type-white-background font-body-1">
				<div className="h-[106px] w-0.5 absolute !m-[0] top-[-47px] right-[2px] rounded-xl bg-type-white-background" />
				<div className="h-6 w-6 !m-[0] absolute top-[15px] left-[92px]" />
				<div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-sub flex flex-col items-end justify-start pt-8 px-0 pb-0 box-border gap-[8.5px] max-w-full z-[1]">
					<div className="w-[362px] flex flex-row items-start justify-end py-0 px-[37px] box-border max-w-full">
						<div className="flex-1 flex flex-row items-start justify-start relative">
							<img
								className="h-px w-[275px] absolute !m-[0] top-[151px] left-[0px]"
								loading="lazy"
								alt=""
								src="/vector-19.svg"
							/>
							<img
								className="h-px w-[275px] absolute !m-[0] bottom-[153px] left-[0px]"
								loading="lazy"
								alt=""
								src="/vector-19.svg"
							/>
							<div className="flex-1 flex flex-col items-start justify-start gap-[23px] z-[1]">
								<div className="self-stretch h-[139px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border gap-[4px]">
									<div className="flex flex-row items-center justify-start gap-[8px]">
										<img
											className="h-6 w-6 relative rounded-[50%] object-cover"
											loading="lazy"
											alt=""
											src="/ellipse-81@2x.png"
										/>
										<div className="relative inline-block min-w-[89px]">
											이유정 디자이너
										</div>
									</div>
									<div className="self-stretch h-[107px] relative text-base leading-[140%] text-type-base2 inline-block shrink-0">
										{' '}
										피드백을 받을 때는 구체적인 예시를
										들어주는 것이 가장 효과적이라고
										생각해요. 예를 들어, 디자인의 어떤
										부분이 어떻게 개선될 수 있는지를 명확히
										설명해주면 더 이해하기 쉽고, 반영하기도
										수월해요.
									</div>
									<div className="w-[275px] flex flex-row items-center justify-start py-[21px] px-0 box-border">
										<div className="h-6 flex-1 overflow-hidden" />
									</div>
								</div>
								<div className="w-[275px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border relative gap-[4px]">
									<div className="flex flex-row items-center justify-start gap-[8px]">
										<img
											className="h-6 w-6 relative rounded-[50%] object-cover"
											loading="lazy"
											alt=""
											src="/ellipse-8-1@2x.png"
										/>
										<div className="relative inline-block min-w-[77px]">
											이준형 개발자
										</div>
									</div>
									<div className="self-stretch relative text-base leading-[140%] text-type-base2">
										{' '}
										피드백은 직설적으로 주고받는 것이 좋다고
										생각합니다. 문제를 명확하게 짚어주고
										개선할 점을 분명히 알려주는 방식이 가장
										효과적이에요. 불필요한 오해를 줄일 수
										있고, 빠르게 개선할 수 있죠.
									</div>
									<div className="w-[275px] !m-[0] absolute top-[142px] left-[0px] flex flex-row items-center justify-start">
										<div className="h-6 flex-1 overflow-hidden" />
									</div>
								</div>
								<div className="w-[275px] flex flex-col items-start justify-start relative gap-[10px]">
									<div className="flex flex-row items-center justify-start gap-[8px]">
										<img
											className="h-6 w-6 relative rounded-[50%] object-cover"
											loading="lazy"
											alt=""
											src="/ellipse-8-2@2x.png"
										/>
										<div className="relative inline-block min-w-[77px]">
											이동현 개발자
										</div>
									</div>
									<div className="self-stretch relative text-base leading-[140%] text-type-base2">
										저는 피드백을 줄 때 긍정적인 점을 먼저
										언급한 후 개선점을 이야기하는 방식이
										가장 좋다고 생각합니다. 이렇게 하면
										피드백을 받는 사람이 방어적으로 반응하지
										않고, 더 수용적으로 받아들일 수 있어요.
									</div>
									<div className="w-[275px] h-[] !m-[0] absolute top-[81px] left-[0px] z-[1]" />
								</div>
							</div>
						</div>
					</div>
					<div className="self-stretch flex flex-row items-start justify-end py-0 px-[50px]">
						<img
							className="h-px w-[275px] relative"
							loading="lazy"
							alt=""
							src="/vector-19.svg"
						/>
					</div>
					<FrameComponent4 />
				</div>
			</section>
		</div>
	)
}
