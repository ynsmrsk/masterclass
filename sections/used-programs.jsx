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
		const cards = container.current.querySelectorAll('.card')
		gsap.from(cards, {
			y: 50,
			opacity: 0,
			duration: 1,
			stagger: 0.2,
			ease: 'power4.out',
			scrollTrigger: {
				trigger: container.current,
				start: 'top top',
				end: '+=100%',
				pin: true,
				scrub: 1,
			}
		})
	}, { container })

	return (
		<section ref={container} className='container flex flex-col justify-center h-screen'>
			<h2 className='font-display tracking-wide text-xl lg:text-2xl font-medium mb-5 lg:mb-10 text-center'>Kullanılan yazılımlar</h2>
			<ul className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 xl:gap-6'>
				{programs.map(program =>
					<li key={program.title} className='card bg-primary-200/60 p-3 rounded-[30px] grid grid-cols-[auto_1fr] grid-rows-2 gap-x-4 gap-y-1 font-medium'>
						<Image
							src={program.img}
							width={120}
							height={120}
							alt={program.title}
							className='row-span-full rounded-[24px] h-full'
						/>
						<h3 className='self-end text-3xl lg:text-4xl text-primary-800'>{program.title}</h3>
						<h4 className='text-xl lg:text-2xl text-primary-500 tracking-wide'>{program.subtitle}</h4>
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
