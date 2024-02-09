import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"

gsap.registerPlugin(MotionPathPlugin)

export default function Swing({ children }) {
	const wrapperRef = useRef(null)
	useEffect(() => {
		const wrapper = wrapperRef.current
		const elements = gsap.utils.toArray(wrapper.children)
		elements.forEach((el) => {
			const size = 100 - el.dataset.size
			gsap.to(el, {
				motionPath: {
					path: [
						{ x: -size / 1.5, y: 0 },
						{ x: -size / 1.5, y: -size / 2 },
						{ x: 0, y: -size / 2 },
						{ x: 0, y: 0 },
					],
					curviness: 1,
				},
				duration: gsap.utils.random(el.dataset.size / 3, el.dataset.size / 2),
				delay: gsap.utils.random(0, 4),
				ease: "none",
				repeat: -1,
			})
		})
	}, [])

	return <div ref={wrapperRef}>{children}</div>
}
