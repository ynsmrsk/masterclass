'use client'
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { CaretUpDownIcon } from "@/components/icons"
import useIsTouchDevice from "@/hooks/use-is-touch-device"
import Image from "next/image"

export default function CompareSlider() {
	const refLeft = useRef<HTMLDivElement>(null),
		refContainer = useRef<HTMLDivElement>(null),
		refMoveHint = useRef<HTMLDivElement>(null)

	const isTouchDevice = useIsTouchDevice()

	useEffect(() => {
		const left = refLeft.current,
			container = refContainer.current,
			moveHint = refMoveHint.current

		const handleMove = (e: MouseEvent | TouchEvent) => {
			const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX
			gsap.to(left, {
				width: `${clientX / window.innerWidth * 100}%`,
				duration: 0.7,
				ease: "power3.out"
			})
			gsap.to(moveHint, {
				opacity: isTouchDevice ? 1 : 0,
				left: `${clientX}px`,
				duration: 0.7,
				ease: "power3.out"
			})
		}
		const handleLeave = () => {
			gsap.to(left, {
				width: "50vw",
				duration: 0.7,
				ease: "power3.out"
			})
			gsap.to(moveHint, {
				left: "50%",
				opacity: 1,
				duration: 0.7,
				ease: "power3.out"
			})
		}
		if (!container) return
		container.addEventListener('mousemove', handleMove)
		container.addEventListener('touchmove', handleMove)
		container.addEventListener('mouseleave', handleLeave)
		return () => {
			container.removeEventListener('mousemove', handleMove)
			container.removeEventListener('touchmove', handleMove)
			container.removeEventListener('mouseleave', handleLeave)
		}
	}, [isTouchDevice])

	return (
		<div ref={refContainer} datatype="follow" className="interactable h-screen cursor-none relative">
			<div ref={refMoveHint} className="w-12 h-12 lg:w-16 lg:h-16 rounded-full grid place-items-center bg-light absolute left-1/2 top-1/2 -translate-x-1/2 z-30">
				<CaretUpDownIcon className="fill-dark w-6 lg:w-8 h-6 lg:h-8 mx-auto my-auto rotate-90" />
			</div>
			<div ref={refLeft} style={{ width: '50vw' }} className="h-full relative overflow-hidden z-10">
				<Image
					className="object-cover w-screen max-w-[100vw] h-full"
					src="/saloon-night.jpg" width={1920} height={1080} alt=""
				/>
			</div>
			<div>
				<Image
					className="object-cover w-screen h-full absolute inset-0"
					src="/saloon-day.jpg" width={1920} height={1080} alt=""
				/>
			</div>
		</div>
	)
}
