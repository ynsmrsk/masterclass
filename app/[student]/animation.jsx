'use client'
import { useRef } from "react"
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export function Animation({ children }) {
	const container = useRef(null)

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.to(".image:not(:last-child)", {
			yPercent: -100,
			ease: "none",
			stagger: 0.5,
			scrollTrigger: {
				trigger: container.current,
				start: "top top",
				end: `+=${100 * (document.querySelectorAll(".image").length - 1)}%`,
				scrub: 1.5,
				pin: true,
			},
		})
		gsap.set(".image", {
			zIndex: (i, _target, targets) => targets.length - i
		})

		gsap.to(".mouse-wheel", {
			y: 7,
			opacity: 1,
			duration: 1,
			repeat: -1,
			ease: "power2.inOut",
			yoyo: true,
			yoyoEase: "power2.inOut"
		})

		gsap.to(".mouse", {
			opacity: 0,
			delay: 5,
			duration: 0.5
		})
	}, { scope: container })

	return <div ref={container} className="w-screen h-screen">
		<div className="mouse bg-light/80 w-7 h-11 rounded-full border-2 border-dark absolute top-1/4 left-1/2 -translate-x-1/2 z-10">
			<div className="mouse-wheel w-1 h-2 bg-dark rounded-full opacity-0 absolute top-1 left-1/2 -translate-x-1/2" />
			<span className="animate-pulse duration-1000 font-medium text-sm tracking-wide leading-none bg-light/50 rounded-lg py-1 px-1.5 absolute -left-16 top-1/2 -translate-y-1/2">kaydır</span>
		</div>
		{children}
	</div>
}
