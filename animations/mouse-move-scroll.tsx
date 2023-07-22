// @ts-nocheck
import { useEffect, forwardRef } from "react"
import { gsap } from "gsap"

const MouseMoveScroll = forwardRef(({ children }, holder) => {
	useEffect(() => {
		let overflowX, mapPositionX,
			overflowY, mapPositionY,
			x, y

		function onResize() {
			overflowX = holder.current.offsetWidth - window.innerWidth
			overflowY = holder.current.offsetHeight - window.innerHeight
			mapPositionX = gsap.utils.mapRange(0, window.innerWidth, overflowX / 2, overflowX / -2)
			mapPositionY = gsap.utils.mapRange(0, window.innerHeight, overflowY / 2, overflowY / -2)
		}
		onResize()

		function onMouseMove(e) {
			if (overflowX > 0 || overflowY > 0) {
				x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0
				y = e.clientY || (e.changedTouches && e.changedTouches[0].clientY) || 0
				gsap.to(holder.current, {
					duration: 3,
					overwrite: true,
					ease: "Power4.easeOut",
					x: mapPositionX(x),
					y: mapPositionY(y),
				})
			}
		}

		if (typeof window !== "undefined") {
			if (window.innerWidth > 768) {
				document.addEventListener("mousemove", onMouseMove)
				window.addEventListener("resize", onResize)
			}
		}

		return () => {
			document.removeEventListener("mousemove", onMouseMove)
			window.removeEventListener("resize", onResize)
		}
	}, [])

	return (
		<div className="relative w-screen h-screen overflow-scroll md:overflow-hidden bg-[#111]">
			<div className="w-full md:w-auto h-full md:h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				<div ref={holder} className="h-[1000vh] md:w-[250vw] md:h-[300vh] cursor-crosshair relative">
					{children}
				</div>
			</div>
		</div>
	)
})
MouseMoveScroll.displayName = 'MouseMoveScroll'

export default MouseMoveScroll
