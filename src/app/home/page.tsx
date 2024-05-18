import FrameComponent2 from '@/presentation/components/frame-component2'
import FrameComponent1 from '@/presentation/components/frame-component1'
import FrameComponent from '@/presentation/components/frame-component'
import ButtonRow from '@/presentation/components/button-row'

export default function home() {
	return (
		<div className="w-full h-[812px] relative rounded-11xl bg-flowkit-white overflow-hidden flex flex-col items-end justify-start pt-[53px] px-0 pb-36 box-border gap-[40px] leading-[normal] tracking-[normal]">
			<img className="w-0 h-0 relative hidden" alt="" />
			<FrameComponent2 />
			<FrameComponent1 />
			<FrameComponent />
			<img
				className="w-[297.6px] h-11 relative hidden"
				alt=""
				src="/group-6.svg"
			/>
			<ButtonRow />
		</div>
	)
}
