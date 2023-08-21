'use client'
import { StudentWorks } from "@/sections"
import Link from "next/link"

export default function StudentWorksPage() {

	return (
		<>
			<Link
				href="/"
				className="fixed top-2 left-2 lg:top-5 lg:left-7 z-10 text-sm lg:text-lg py-1 lg:py-[6px] rounded px-2 lg:px-3 border-[1.5px] outline-none
					border-light text-light hover:bg-light hover:text-dark transition-colors uppercase font-medium"
			>
				Immersive Images
			</Link>
			<StudentWorks />
		</>
	)
}
