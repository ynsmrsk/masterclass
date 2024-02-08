// @ts-nocheck
'use client'
import { useEffect } from "react"
import Image from "next/image"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import useWindowWidth from '@/hooks/use-window-width'

export default function Hero() {
	const width = useWindowWidth()

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		let ctx = gsap.context(() => {
			gsap.set([".logo", ".hero-image"], { autoAlpha: 1 })
			if (scrollY === 0) gsap.set('body', { overflowY: 'hidden' })

			let images = gsap.utils.toArray("[data-direction]")
			images.forEach(image => {
				const [x, y] = image.getAttribute("data-direction").split(" ")

				gsap.from(image, {
					x: `${x / 2}vw`,
					y: `${y / 2}vh`,
					opacity: 0,
					duration: 2,
					delay: 0.6,
					ease: 'Power2.easeOut',
					onComplete: () => gsap.set('body', { overflowY: 'auto', })
				})

				gsap.timeline({
					scrollTrigger: {
						trigger: '.hero',
						start: "top top",
						end: "bottom top",
						scrub: true,
					}
				}).to(image, {
					x: `${x * 4}vw`,
					y: `${y * 4}vh`,
					opacity: 0,
					ease: 'Power1.easeOut',
				})
			})

			const tl = gsap.timeline()

			if (scrollY === 0) {
				tl.from('.logo', {
					delay: 0.3,
					opacity: 0,
					y: width <= 768 ? 16 : 32,
					duration: 2,
					ease: 'Power2.easeOut',
				})
			}

			tl.to('.logo', {
				top: width <= 768 ? '4%' : '4.5%',
				left: width <= 768 ? '22%' : '7.5%',
				scale: width <= 768 ? 0.4 : 0.13,
				ease: 'Power1.easeOut',
				onComplete: () => {
					gsap.set(".logo", {
						backgroundColor: '#161616',
						color: '#f4efe9',
					})
				},

				scrollTrigger: {
					trigger: ".intro-text",
					scrub: true,
					start: "top bottom",
					end: 'bottom top',
					onEnterBack: () => {
						gsap.set(".logo", {
							backgroundColor: 'transparent',
							color: 'unset',
						})
					}
				}
			})
		})

		return () => ctx.revert()
	}, [width])
	return (
		<section className="hero relative w-screen h-screen overflow-hidden bg-dark text-light">
			{images.map(image =>
				<Image
					key={image.src}
					data-direction={image.direction}
					src={image.src}
					width={400}
					height={600}
					alt="Course render"
					className={`
							hero-image invisible absolute rounded
							${image.width ?? 'w-[35vw] md:w-[25vw] lg:w-[20vw]'}
							${image.position}
					`}
				/>
			)}
			<Image
				className="
					logo invisible rounded-[15px] md:rounded-[50px] px-[6vw] py-[4vw] 
					fixed z-50 left-1/2 -translate-x-1/2 top-[45%] -translate-y-1/2
				"
				src="/logo.png"
				alt="Logo"
				width={1920}
				height={1080}
				priority
			/>
		</section>
	)
}

const images = [
	{
		src: '/hero/2.jpg',
		direction: '-6 -4',
		position: 'top-[10vh] md:top-[6vh] left-[8vw] md:left-[16vw]'
	},
	{
		src: '/hero/4.jpg',
		direction: '5 -3',
		position: 'top-[5vh] md:top-[1vh] right-[10vw] md:right-[22vw]'
	},
	{
		src: '/hero/1.jpg',
		direction: '-3 4',
		position: 'bottom-[28vh] md:bottom-[14vh] left-[2vw]'
	},
	{
		src: '/hero/5.jpg',
		direction: '5 2',
		position: 'bottom-[24vh] md:bottom-[8vh] right-[2vw]'
	},
	{
		src: '/hero/3.jpg',
		direction: '-1 -5',
		position: 'bottom-[12vh] md:-bottom-[3vh] right-[30vw] md:right-[40vw]',
	},
]
