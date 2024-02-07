'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

export default function UsedPrograms() {
	const container = useRef(null)
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		let ctx = gsap.context((self) => {
			const elements = self.selector(".card")
			gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "center center",
					end: '+=2500',
					scrub: true,
					pin: true,
				}
			}).from(elements, {
				opacity: 0,
				y: 100,
				stagger: 0.2,
				ease: 'power4.out'
			})
		}, container)

		return () => ctx.revert()
	}, [])

	return (
		<section className='py-3 mb-10 lg:mb-32'>
			<div ref={container} className="container">
				<h2 className='font-display text-2xl lg:text-3xl font-medium mb-8 lg:mb-16 text-center'>Kullanılan Yazılımlar</h2>
				<div className='flex flex-col md:flex-row gap-10'>
					{programs.map((program, i) =>
						<div key={i} className='card w-full max-w-[80%] lg:max-w-full mx-auto flex items-center gap-4'>
							<Image
								src={program.img}
								width={80}
								height={80}
								alt={program.title}
								className='w-20 h-20'
							/>
							<div className='font-medium'>
								<h4 className='text-xl lg:text-2xl text-primary-500'>{program.subtitle}</h4>
								<h3 className='text-3xl lg:text-4xl text-primary-800'>{program.title}</h3>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

const programs = [
	{
		subtitle: 'Modelleme',
		img: '/software-logos/autodesk-3dsmax.png',
		title: '3ds Max',
	},
	{
		subtitle: 'Render',
		img: '/software-logos/chaos-corona.png',
		title: 'Corona',
	},
	{
		subtitle: 'Mizanpaj',
		img: '/software-logos/adobe-photoshop.png',
		title: 'Photoshop',
	}
]
