'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Numbers() {
	const container = useRef()
	const linesRef = useRef([])
	const charsRef = useRef({})

	useGSAP(() => {
		linesRef.current.forEach((line, lineIndex) => {
			if (!line || !charsRef.current[lineIndex]) return

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

			const chars = charsRef.current[lineIndex]

			tl.from(chars, {
				opacity: 0,
				stagger: 0.03,
				transformOrigin: 'top center',
				rotationX: -60,
				z: -60,
				y: '10vw',
			})

			tl.to(chars, {
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
			{data.map((item, lineIndex) => (
				<h2
					key={lineIndex}
					ref={el => linesRef.current[lineIndex] = el}
					className='line [perspective:1000px] tracking-tighter leading-none text-center text-[12.5vw] font-medium'
				>
					{item.split('').map((char, charIndex) => (
						<span
							key={charIndex}
							ref={el => {
								if (!charsRef.current[lineIndex]) {
									charsRef.current[lineIndex] = []
								}
								charsRef.current[lineIndex][charIndex] = el
							}}
							className='char inline-block whitespace-pre will-change-transform'
						>
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