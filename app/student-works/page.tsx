import Head from "next/head"
import Link from "next/link"
import { StudentWorks } from "@/sections"

export default function StudentWorksPage() {
	return (
		<>
			<Head>
				<title>Student Works | immersive.images</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Link href='/' className="absolute top-4 left-4 z-50 py-1 px-3 hover:bg-white text-white hover:text-dark border rounded-[3px] transition-colors font-display">
				immersive.images
			</Link>
			<StudentWorks />
		</>
	)
}
