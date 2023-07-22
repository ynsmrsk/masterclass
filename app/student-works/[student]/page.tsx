'use client'
// @ts-nocheck
import { useEffect } from "react"
import { getStudentWork } from "@/sanity/sanity-utils"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

function GoBack() {
	const router = useRouter()
	const onClick = () => router.back()
	return <button className="block" onClick={onClick}>Go Back</button>
}

async function StudentWork({ params }: { params: { student: string } }) {
	const slug = params.student
	const work = await getStudentWork(slug)

	return (
		<div>
			<GoBack />
			<a href={`https://www.instagram.com/${work.instagram}`} target="_blank" rel="noreferrer">
				{work.instagram}
			</a>
			<h1>{work.studentName}</h1>
			<div className="cards h-screen grid place-items-center bg-blue-500">
				{work.images.map(image =>
					<Image
						key={image.url}
						className="card col-span-full row-span-full h-[300px] w-[300px] border-2 border-red-500"
						src={image.url}
						alt=""
						width={1920}
						height={1080}
					/>
				)}
			</div>
		</div>
	)
}

export default function StudentWorkInteractive({ params }: { params: { student: string } }) {
	gsap.registerPlugin(ScrollTrigger)
	useEffect(() => {
		const stagger = 0.5;
		gsap.set(".card", {
			y: (index) => 10 * index,
			zIndex: (index, target, targets) => targets.length - index,
			scale: (index) => 1 - index * 0.05
		});
		const tl = gsap.timeline({
			defaults: { ease: "none" },
			scrollTrigger: {
				trigger: ".cards",
				start: "top top",
				end: "bottom top",
				scrub: true,
				pin: true,
				markers: true
			}
		});
		tl.to(".card", {
			scale: 1,
			stagger: stagger
		});
		tl.to(
			".card",
			{
				yPercent: -75,
				opacity: 0,
				stagger: stagger
			},
			stagger
		);
	}, [])

	return (
		<StudentWork params={params} />
	)
}
