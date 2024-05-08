'use client'
import { useRef } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export function Animation({ children }) {
	const container = useRef(null)

	useGSAP(() => {
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
	}, { scope: container })

	return <div ref={container} className="w-screen h-screen">
		{children}
	</div>
}
