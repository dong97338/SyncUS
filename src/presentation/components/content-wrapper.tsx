import type { NextPage } from 'next'

const ContentWrapper: NextPage = () => {
	return (
		<div className="flex-1 flex flex-col items-end justify-start gap-[16px] max-w-full text-left text-sm text-flowkit-white font-body-1">
			<div className="flex flex-row items-start justify-end py-0 px-[3px]">
				<div className="rounded-t-sm rounded-br-none rounded-bl-sm bg-c9aff flex flex-row items-start justify-start p-2.5">
					<div className="h-10 relative leading-[20px] inline-block">
						<p className="m-0">
							지금 현재 유정이가 바쁜 상태 어떻게 하면 좀 적절한
						</p>
						<p className="m-0">
							위로 방법은 무엇이고, 잘 수행하게 어떻게 할까?
						</p>
					</div>
				</div>
			</div>
			<div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2px] text-label-color-light-primary">
				<div className="h-[30px] w-[30px] relative shrink-0 flex items-center justify-center">
					<img
						className="h-full w-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[0px] [transform:scale(1.387)]"
						loading="lazy"
						alt=""
						src="/frame-156751@2x.png"
					/>
				</div>
				<div className="flex-1 rounded-t-sm rounded-br-none rounded-bl-sm bg-flowkit-white flex flex-row items-start justify-start pt-2.5 px-3 pb-1.5 box-border relative gap-[10px] min-w-[202px]">
					<div className="flex-1 relative leading-[20px]">
						유정이가 바쁜 상황에서는 유정이가 스트레스를 덜 받도록
						작은 위로를 제공하는 것이 중요합니다. 유정, 네가 잘 해낼
						거라고 믿어. 잠깐이라도 휴식을 취하면서 재충전하는 것도
						잊지 마. 같은 격려의 말을 전할 수 있어요. 또한, 유정이가
						우선순위를 정하는 데 도움이 될 수 있도록 가장 중요한
						일이 무엇인지 말해주면, 내가 나머지를 도울게.라는 제안을
						통해 유정이가 더 효율적으로 일을 처리할 수 있도록 도울
						수 있을 것 같아요.
					</div>
					<img
						className="h-[18px] w-[18px] absolute !m-[0] right-[54px] bottom-[-18px] overflow-hidden shrink-0"
						loading="lazy"
						alt=""
					/>
					<img
						className="h-[18px] w-[18px] absolute !m-[0] right-[12px] bottom-[-18px] overflow-hidden shrink-0"
						loading="lazy"
						alt=""
					/>
				</div>
			</div>
		</div>
	)
}

export default ContentWrapper
