'use client'
import { useEffect, useRef } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export function Animation({ children }) {
	const container = useRef(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		let ctx = gsap.context(() => {
			gsap.to(".image:not(:last-child)", {
				yPercent: -100,
				ease: "none",
				stagger: 0.5,
				scrollTrigger: {
					trigger: container.current,
					start: "top top",
					end: "+=300%",
					scrub: 1.5,
					pin: true,
				},
			})
			gsap.set(".image", { zIndex: (i, _target, targets) => targets.length - i })
		}, container)

		return () => ctx.revert()
	}, [])

	return <div ref={container} className="w-screen h-screen absolute top-0 left-0 overflow-hidden">
		{children}
	</div>
}
