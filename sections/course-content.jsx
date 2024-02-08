'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function CourseContent() {
	const container = useRef(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		let ctx = gsap.context((self) => {
			const elements = self.selector(".card")
			const distributor = gsap.utils.distribute({ base: 0.85, amount: 0.15 })

			const lastElST = ScrollTrigger.create({
				trigger: elements[elements.length - 1],
				start: `top-=${(elements.length - 1) * 30} 20%`,
			})

			elements.forEach((el, i) => {
				const scaleVal = distributor(i, elements[i], elements)
				gsap.to(el, {
					scrollTrigger: {
						trigger: el,
						start: `top-=${i * 30} 20%`,
						end: 'top top',
						scrub: true,
					},
					ease: "none",
					scale: scaleVal,
				})
				ScrollTrigger.create({
					trigger: el,
					start: `top-=${i * 30} 20%`,
					end: () => lastElST.start,
					pin: true,
					pinSpacing: false,
				})
			})
			ScrollTrigger.create({
				trigger: 'h2',
				start: "top 10%",
				end: () => lastElST.start,
				pin: true,
				pinSpacing: false,
			})
		}, container)
		return () => ctx.revert()
	}, [])

	return (
		<section ref={container} className='h-[330vh] lg:h-[450vh] mb-16 lg:mb-32'>
			<div className="container flex flex-col items-center">
				<h2 className='font-display text-3xl lg:text-5xl font-medium mb-5 lg:mb-10 text-center'>
					DERS İÇERİĞİ
				</h2>
				{programs.map(program =>
					<div
						key={program.img}
						className='card w-full h-[30vh] lg:h-[45vh] rounded-xl lg:rounded-2xl p-10 lg:p-12 border-[0.5px] border-primary-600 mb-8 bg-center bg-cover will-change-transform'
						style={{ backgroundImage: `linear-gradient(to bottom,rgba(24,23,23,0.6),rgba(24,23,23,0.1)),url("${program.img}")` }}
					>
						<h3 className='text-4xl lg:text-6xl text-light font-semibold'>
							{program.title}
						</h3>
					</div>
				)}
			</div>
		</section>
	)
}

const programs = [
	{
		img: '/course-content-bg/0.jpg',
		title: 'Bilgisayar Donanımları',
	},
	{
		img: '/course-content-bg/1.jpg',
		title: 'Temel 3ds Max Ayarları',
	},
	{
		img: '/course-content-bg/2.jpg',
		title: 'Render Motoru Bilgisi',
	},
	{
		img: '/course-content-bg/3.jpg',
		title: 'Basit & Karmaşık Materyaller',
	},
	{
		img: '/course-content-bg/4.jpg',
		title: 'İç Mekan Modelleme',
	},
	{
		img: '/course-content-bg/5.jpg',
		title: 'Aydınlatma Senaryoları',
	},
	{
		img: '/course-content-bg/6.jpg',
		title: 'Komposizyon & Kamera Yönetimi',
	},
	{
		img: '/course-content-bg/7.jpg',
		title: 'Sanatsal Anlatım',
	},
	{
		img: '/course-content-bg/8.jpg',
		title: 'Yapay Zeka Destekli Tasarım',
	},
]

