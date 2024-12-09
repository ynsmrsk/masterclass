'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Numbers() {
	const container = useRef()

	useGSAP(() => {
		const lines = document.querySelectorAll('.line')

		lines.forEach(line => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: line,
					start: 'center 45%',
					end: '+=100%',
					scrub: 1,
					pin: true,
					anticipatePin: 0.5,
				}
			})

			tl.from(line.querySelectorAll('.char'), {
				opacity: 0,
				stagger: 0.03,
				transformOrigin: 'top center',
				rotationX: -60,
				z: -60,
				y: '10vw',
			})

			tl.to(line.querySelectorAll('.char'), {
				opacity: 0,
				stagger: 0.03,
				transformOrigin: 'top center',
				rotationX: 60,
				z: -60,
				y: '-6vw',
			})
		})
	}, { scope: container })

	return (
		<section ref={container}>
			{data.map((item, i) => (
				<h2 key={i} className='line [perspective:1000px] tracking-tighter leading-none text-center text-[12.5vw] font-medium'>
					{item.split('').map((char, i) => (
						<span key={i} className='char inline-block whitespace-pre will-change-transform'>
							{char}
						</span>
					))}
				</h2>
			))}
		</section>
	)
}

const data = [
	'5 çevrimiçi ders',
	'10 çevrimdışı ders',
	'18+ saatlik kurs',
	'1000+ öğrenci'
]