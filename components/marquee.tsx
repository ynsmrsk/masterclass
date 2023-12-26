import gsap from "gsap"
import React, { useEffect, useRef } from "react"

export default function Marquee({ children, className }: { children: React.ReactNode, className?: string }) {
	const comp = useRef(null)
	const items = Array(11).fill(null)

	useEffect(() => {
		let ctx = gsap.context(() => {
			let currentScroll = 0
			let isScrollingDown = true

			let tween = gsap.to(".marquee__part",
				{ xPercent: -100, repeat: -1, duration: 10, ease: "linear" }
			).totalProgress(0.5)

			gsap.set(".marquee__inner", { xPercent: -50 })

			window.addEventListener("scroll", function() {
				if (window.pageYOffset > currentScroll) isScrollingDown = true
				else isScrollingDown = false
				gsap.to(tween, { timeScale: isScrollingDown ? 1 : -1 })
				currentScroll = window.pageYOffset
			})
		}, [comp])

		return () => ctx.revert()
	}, [])

	return (
		<section ref={comp} className={`${className} marquee font-medium font-display bg-primary-200 text-primary-900 border-y-[1.5px] border-primary-900 py-3 md:py-4 relative overflow-x-hidden`}>
			<div className="marquee__inner w-fit flex flex-auto antialiased">
				{items.map((_, i) =>
					<div key={i} className="marquee__part text-lg md:text-2xl shrink-0 px-6">
						{children}
					</div>
				)}
			</div>
		</section>
	)
}
