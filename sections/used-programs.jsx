'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

export default function UsedPrograms() {
	const container = useRef(null)

	useGSAP(() => {
		const observer = new ResizeObserver(() => { ScrollTrigger.refresh() })
		observer.observe(document.body)
		gsap.registerPlugin(ScrollTrigger)

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
				scrub: true,
				anticipatePin: 0.5,
			}
		})

		return () => observer.disconnect()
	}, { scope: container })

	return (
		<section ref={container} className='container flex flex-col justify-center h-screen'>
			<h2 className='text-3xl lg:text-5xl uppercase font-display font-medium mb-4 lg:mb-8 text-center'>Kullanılan Yazılımlar</h2>
			<ul className='grid md:grid-cols-2 2xl:grid-cols-4 gap-4 xl:gap-6'>
				{programs.map(program =>
					<li
						key={program.title}
						className={`card p-3 rounded-[30px] grid grid-cols-[auto_1fr] grid-rows-2 gap-x-4 gap-y-1 font-medium`}
						style={{ backgroundColor: `${program.bgColor}1D` }}
					>
						<Image
							src={program.img}
							width={120}
							height={120}
							alt={program.title}
							className='row-span-full rounded-[24px] h-full'
						/>
						<h3 className='self-end text-3xl lg:text-4xl text-dark'>{program.title}</h3>
						<span className='text-xl lg:text-2xl text-primary-700 tracking-wide'>{program.subtitle}</span>
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
		bgColor: '#57a5c7',
	},
	{
		subtitle: 'Render',
		img: '/software-logos/corona.avif',
		title: 'Corona',
		bgColor: '#e3793f',
	},
	{
		subtitle: 'Mizanpaj',
		img: '/software-logos/photoshop.avif',
		title: 'Photoshop',
		bgColor: '#57a7f8',
	},
	{
		subtitle: 'Mizanpaj',
		img: '/software-logos/indesign.avif',
		title: 'InDesign',
		bgColor: '#b31e3e',
	},
]
