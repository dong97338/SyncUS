import type { NextPage } from 'next'
import { useMemo, type CSSProperties } from 'react'

export type LayoutContainerType = {
	/** Style props */
	vectorIconDebugCommit?: string
}

const LayoutContainer: NextPage<LayoutContainerType> = ({
	vectorIconDebugCommit,
}) => {
	const layoutContainerStyle: CSSProperties = useMemo(() => {
		return {
			// Standard CSS properties here, debugCommit is removed
		}
	}, [])

	return (
		<header
			className="self-stretch shadow-[0px_0px_10px_rgba(0,_0,_0,_0.1)] bg-flowkit-white flex flex-row items-start justify-start pt-[54px] px-9 pb-3.5 gap-[10px] shrink-0 top-[0] z-[99] sticky text-left text-lg text-type-base font-body-1"
			style={layoutContainerStyle}
			data-debug-commit={vectorIconDebugCommit} // Custom data attribute for debugging
		>
			<div className="h-8 flex-1 flex flex-row items-center justify-start p-[4.4px] box-border">
				<img
					className="h-4 w-2 relative"
					loading="lazy"
					alt=""
					src="/vector-18.svg"
				/>
			</div>
			<div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
				<div className="relative inline-block min-w-[32px]">질문</div>
			</div>
			<div className="h-8 w-[125px] hidden" />
		</header>
	)
}

export default LayoutContainer
