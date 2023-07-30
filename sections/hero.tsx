// @ts-nocheck
import { useEffect } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import useWindowWidth from '@/hooks/use-window-width'
import Image from "next/image"
import { WhatsappIcon, InstagramIcon, BehanceIcon } from "@/components/icons"

export default function Hero() {
	const width = useWindowWidth()

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		let ctx = gsap.context(() => {
			gsap.set([".logo"], { autoAlpha: 1, delay: 0.3 })
			gsap.set([".hero-image"], { autoAlpha: 1 })
			if (scrollY === 0) gsap.set('body', { overflow: 'hidden' })

			let boxes = gsap.utils.toArray("[data-direction]")
			boxes.forEach(box => {
				const [x, y] = box.getAttribute("data-direction").split(" ")
				gsap.from(box, {
					x: `${x / 2}vw`,
					y: `${y / 2}vh`,
					opacity: 0,
					duration: 2,
					delay: 0.6,
					ease: 'Power2.easeOut',
					onComplete: () => gsap.set('body', { overflow: 'auto', })
				})
				gsap.timeline({
					scrollTrigger: {
						trigger: '.hero',
						start: "top top",
						end: "bottom top",
						scrub: true,
					}
				}).to(box, {
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
		<section className="hero relative w-screen h-screen overflow-hidden">
			{images.map((image, i) =>
				<Image
					key={i}
					className={`hero-image invisible rounded ${image.width ?? 'w-[35vw] md:w-[25vw] lg:w-[20vw]'} absolute ${image.position}`}
					data-direction={image.direction}
					src={image.src} width={400} height={600} alt=""
				/>
			)}
			<Image
				className="logo invisible rounded-[15px] md:rounded-[30px] px-[6vw] py-[4vw] z-50 fixed left-1/2 -translate-x-1/2 top-[45%] -translate-y-1/2"
				src="/logo.png" alt=""
				width={1920}
				height={1080}
			/>
			<div className="fixed z-50 bottom-8 left-3 md:left-6">
				<div className="inline-flex items-center rounded-[3px] bg-dark mb-2">
					<a href="https://www.instagram.com/zselmancan/" target="_blank" rel='noreferrer' className="py-[3px] md:py-[6px] pl-2 md:pl-3 pr-1 md:pr-2">
						<InstagramIcon className="fill-white w-5 h-5 md:w-6 md:h-6" />
					</a>
					<a href="https://www.behance.net/zahitselman" target="_blank" rel='noreferrer' className="py-[3px] md:py-[6px] pl-1 md:pl-2 pr-2 md:pr-3">
						<BehanceIcon className="fill-white w-5 h-5 md:w-6 md:h-6" />
					</a>
				</div>
				<a href="https://wa.me/p/8971866599494004/905458771883" target="_blank" rel="noreferrer" className="flex items-center gap-2 py-[3px] md:py-[6px] px-2 md:px-3 rounded-[3px] bg-light border md:border-[1.5px] border-dark">
					<WhatsappIcon className="fill-dark w-5 h-5 md:w-7 md:h-7 inline-block" />
					<span className="text-dark text-sm md:text-lg 2xl:text-xl mt-[1px]">İletişime Geç</span>
				</a>
			</div>
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
