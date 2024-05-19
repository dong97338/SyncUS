import type { NextPage } from 'next'
import { ReactNode, type CSSProperties } from 'react'

export type FrameComponent1Type = {
	/** Style props */
	divColor?: CSSProperties['color']
	toggle: ReactNode // Adjust the type to ReactNode
	sessionName: string
}

const FrameComponent1: NextPage<FrameComponent1Type> = ({
	toggle,
	sessionName,
}) => {
	return (
		<section className="w-full flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full">
			<div className="cursor-pointer [border:none] py-[15px] px-4 bg-text-1 self-stretch overflow-hidden flex flex-row items-center justify-between">
				<div className="flex items-center">{toggle}</div>
				<span className="text-center">{sessionName}</span>
				<img
					className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
					alt=""
					src="/icon-1.svg"
				/>
			</div>
		</section>
	)
}

export default FrameComponent1
