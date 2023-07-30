import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import {
	PlayIcon,
	ArrowUpRightIcon,
	ArrowsOutIcon,
	CaretUpDownIcon
} from '@/components/icons'

function Icon({ type }: { type: string }) {
	switch (type) {
		case "link": return <ArrowUpRightIcon className="fill-zinc-900 w-11 h-11 mr-[1px]" />
		case "video": return <PlayIcon className="fill-zinc-900 w-11 h-11 ml-[1px]" />
		case "fullscreen": return <ArrowsOutIcon className="fill-zinc-900 w-11 h-11 mr-[1px]" />
		case "follow": return <CaretUpDownIcon className="fill-zinc-900 w-11 h-11 mr-[1px] rotate-90" />
		default: return null
	}
}

export default function Trailer() {
	const [cursorIcon, setCursorIcon] = useState("")
	const [interacting, setInteracting] = useState(false)
	const trailerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const trailer = trailerRef.current
		function onMouseMove(e: MouseEvent) {
			const interactable = (e.target as HTMLElement).closest(".interactable"),
				interacting = interactable !== null,
				x = e.clientX - trailer!.offsetWidth / 2,
				y = e.clientY - trailer!.offsetHeight / 2
			gsap.to(trailer, {
				x, y,
				scale: interacting ? 1 : 0.1,
				borderRadius: interacting ? "50%" : "0%",
				rotate: interacting ? 360 : 45,
				duration: 0.7,
				ease: "power3.out",
			})
			if (interacting) {
				setCursorIcon(interactable.getAttribute("datatype")!)
				setInteracting(true)
			}
			else {
				setCursorIcon("")
				setInteracting(false)
			}
		}
		document.addEventListener("mousemove", onMouseMove)
		return () => document.removeEventListener("mousemove", onMouseMove)
	})

	return (
		<div
			ref={trailerRef}
			id="trailer"
			className={`
					opacity-0 w-[120px] h-[120px] scale-[0.1] grid place-items-center bg-white fixed left-0 top-0 z-50 pointer-events-none transition-opacity
					${interacting ? "mix-blend-normal" : "mix-blend-difference"}
			`}>
			<Icon type={cursorIcon} />
		</div>
	)
}
