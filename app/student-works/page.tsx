'use client'
import { StudentWorks, StudentWorksMobile } from "@/sections"
import Link from "next/link"
import useWindowWidth from "@/hooks/use-window-width"

export default function StudentWorksPage() {
	const width = useWindowWidth()

	return (
		<>
			<Link
				href="/"
				className="fixed top-5 left-7 z-10 text-lg py-[6px] rounded px-3 border-[1.5px] outline-none
					border-light text-light hover:bg-light hover:text-dark transition-colors uppercase font-medium"
			>
				Immersive Images
			</Link>
			{width <= 992
				? <StudentWorksMobile />
				: <StudentWorks />}
		</>
	)
}
