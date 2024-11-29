// @ts-nocheck
'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import useWindowWidth from '@/hooks/use-window-width'

export default function Numbers() {
	const comp = useRef()
	const width = useWindowWidth()

	useEffect(() => {
		const text = new SplitType('.numbers-title')

		let ctx = gsap.context(() => {
			text.lines.forEach(line => {
				const chars = line.querySelectorAll('.char')

				chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 }))

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: line,
						start: 'center 45%',
						end: '+=1500',
						scrub: 1.5,
						pin: true,
					}
				})

				tl.from(chars, {
					opacity: 0,
					stagger: 0.03,
					transformOrigin: 'top center',
					rotationX: -60,
					z: -60,
					y: width <= 640 ? 20 : 60,
				})

				tl.to(chars, {
					opacity: 0,
					stagger: 0.03,
					transformOrigin: 'top center',
					rotationX: 60,
					z: -60,
					y: width <= 640 ? -20 : -60,
				})
			})
		}, comp)

		return () => ctx.revert()
	}, [])

	return (
		<section ref={comp} className='px-2 md:px-16'>
			{data.map((item, i) =>
				<h2 key={i} className='numbers-title leading-none text-center text-[9vw] font-display font-semibold'>
					{item}
				</h2>
			)}
		</section>
	)
}

const data = [
	'5 çevrimiçi ders',
	'10 çevrimdışı ders',
	'18+ saatlik kurs',
	'500+ öğrenci',
]
