'use client'
import { useContext, useCallback } from 'react'
import { CarouselContext } from './carousel'
import styles from './carousel.module.css'

interface Props {
	index: number
	children: JSX.Element
}

export default function CarouselItem({ children, index }: Props) {
	const { embla: emblaApi, selectedIndex } = useContext(CarouselContext)
	const isActive = index === selectedIndex
	const handleClick = useCallback(() => {
		if (emblaApi === undefined) return
		emblaApi.scrollTo(index)
	}, [emblaApi, index])

	return (
		<li className={`${styles.slide} relative ${isActive ? 'active' : ''}`}
			onClick={handleClick}>
			{children}
		</li>
	)
}