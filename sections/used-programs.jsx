'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

export default function UsedPrograms() {
	const container = useRef(null)
	gsap.registerPlugin(ScrollTrigger)
	useGSAP(() => {
		const elements = document.querySelectorAll('.card')
		gsap.timeline({
			scrollTrigger: {
				trigger: container.current,
				start: "top top",
				end: "+=2000",
				scrub: true,
				pin: true,
			}
		}).from(elements, {
			opacity: 0,
			y: 100,
			stagger: 0.2,
			ease: 'power4.out'
		})
	}, { container })

	return (
		<section ref={container} className='container h-dvh flex flex-col justify-center'>
			<h2 className='font-display tracking-wide text-xl lg:text-2xl font-medium mb-5 lg:mb-10 text-center'>Kullanılan yazılımlar</h2>
			<ul className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
				{programs.map(program =>
					<li key={program.title} className='card bg-primary-200 p-4 rounded-lg w-full max-w-[80%] lg:max-w-full mx-auto flex items-center gap-4'>
						<Image
							src={program.img}
							width={80}
							height={80}
							alt={program.title}
							className='w-20 h-20 lg:w-28 lg:h-28'
						/>
						<div className='font-medium'>
							<h4 className='text-xl lg:text-2xl text-primary-500'>{program.subtitle}</h4>
							<h3 className='text-2xl lg:text-3xl text-primary-800'>{program.title}</h3>
						</div>
					</li>
				)}
			</ul>
		</section>
	)
}

const programs = [
	{
		subtitle: 'Modelleme',
		img: '/software-logos/3dsmax.avif',
		title: '3ds Max',
	},
	{
		subtitle: 'Render',
		img: '/software-logos/corona.avif',
		title: 'Corona',
	},
	{
		subtitle: 'Mizanpaj',
		img: '/software-logos/photoshop.avif',
		title: 'Photoshop',
	},
	{
		subtitle: 'Mizanpaj',
		img: '/software-logos/indesign.avif',
		title: 'InDesign',
	},
]
