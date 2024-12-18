'use client'
import { useRef, useContext, createContext } from 'react'
import { PropsWithChildren } from 'react'
import { useScrollY } from '@/hooks/use-scroll-y'

interface ContextProps {
	numOfSlides: number
	currentSlide: number
}

interface WrapperProps {
	numOfSlides: number
	children: React.ReactNode

}

export const TileContext = createContext<ContextProps>({
	numOfSlides: 0,
	currentSlide: 0
})

export function TileWrapper({ numOfSlides, children }: WrapperProps) {
	const scrollY = useScrollY()
	const refContainer = useRef<HTMLDivElement>(null)
	const { current: elContainer } = refContainer
	let currentSlide = 0

	if (elContainer) {
		const { clientHeight } = elContainer
		const rect = elContainer.getBoundingClientRect()
		const screenH = window.innerHeight
		const halfH = screenH / 2
		const percentY = Math.min(
			clientHeight + halfH,
			Math.max(-screenH, -rect.top + halfH)
		) / clientHeight
		currentSlide = percentY * numOfSlides
	}

	return (
		<TileContext.Provider value={{ numOfSlides, currentSlide }}>
			<div
				ref={refContainer}
				className='relative'
				style={{ height: numOfSlides * 100 + 'vh' }}>
				{children}
			</div>
		</TileContext.Provider>
	)
}

export const TileBackground = ({ children }: PropsWithChildren) => (
	<div className='absolute h-full w-full'>{children}</div>
)

export const TileContent = ({ children }: PropsWithChildren) => (
	<div className='sticky top-0 h-screen overflow-hidden'>{children}</div>
)

interface TileProps {
	slide: number
	renderContent: (props: { progress: number }) => any
}

export function Tile({ slide, renderContent }: TileProps) {
	const { numOfSlides, currentSlide } = useContext(TileContext),
		progress = Math.max(0, currentSlide - slide),
		refContainer = useRef<HTMLDivElement>(null)
	let opacity = Math.min(1, Math.max(0, progress * 4))
	if (progress > 0.85 && slide < numOfSlides - 1) {
		opacity = Math.max(0, (1.0 - progress) * 4)
	}

	return (
		<div
			ref={refContainer}
			className='absolute top-0 w-full'
			style={{ pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined, opacity }}
		>
			{renderContent({ progress })}
		</div>
	)
}