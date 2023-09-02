'use client'
import { StudentWorks } from "@/sections"
import Link from "next/link"

export default function StudentWorksPage() {
	return (
		<>
			<Link
				href="/"
				className="
					fixed z-10 top-2 left-2 lg:top-5 lg:left-7 text-sm lg:text-lg py-1 lg:py-[6px] px-2 lg:px-3 
					rounded-sm border-[1.5px] outline-none border-light bg-dark/20 hover:bg-light
					font-medium text-light hover:text-dark transition-colors 
				">
				Immersive Images
			</Link>
			<StudentWorks />
		</>
	)
}
