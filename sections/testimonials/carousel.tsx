'use client'
import { createContext, useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel-react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Autoplay from 'embla-carousel-autoplay'
import styles from './carousel.module.css'

interface ContextValue {
	embla: EmblaCarouselType | undefined
	selectedIndex: number
}

interface Props {
	className?: string
	children: React.ReactNode
}

export const CarouselContext = createContext<ContextValue>({
	embla: undefined,
	selectedIndex: -1
})

export default function Carousel({ className, children }: Props) {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [viewportRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: 'center',
		skipSnaps: false,
	}, [ClassNames(), Autoplay()])

	const onSelect = useCallback(() => {
		if (!emblaApi) return
		setSelectedIndex(emblaApi.selectedScrollSnap())
	}, [emblaApi, setSelectedIndex])

	useEffect(() => {
		if (!emblaApi) return
		onSelect()
		emblaApi.on('select', onSelect)
	}, [emblaApi, onSelect])

	return (
		<CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
			<div ref={viewportRef} className={`${styles.viewport} w-full overflow-hidden ${className}`}>
				<ul className={`${styles.container} flex`}>
					{children}
				</ul>
			</div>
		</CarouselContext.Provider>
	)
}