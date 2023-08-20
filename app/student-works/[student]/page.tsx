// @ts-nocheck
'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ArrowLeftIcon, ArrowUpRightIcon, InstagramIcon } from "@/components/icons"
import { getStudentWork } from "@/sanity/sanity-utils"

function GoBack() {
	const router = useRouter()

	const onClick = () => router.push("/student-works")
	return (
		<button
			className="flex gap-1 lg:gap-2 items-center py-1 px-3 border border-dark rounded bg-light hover:bg-dark hover:text-light transition-colors"
			onClick={onClick}
		>
			<ArrowLeftIcon className="w-[18px] h-[18px]" />
			<span className="text-sm lg:text-base mt-[2.5px] uppercase">Öğrenci Çalışmaları</span>
		</button>
	)
}

async function RenderStudentWork({ params }: { params: { student: string } }) {
	const slug = params.student
	const work = await getStudentWork(slug)

	return (
		<div>
			<div className="fixed left-2 top-4 lg:left-4 z-10 flex flex-col gap-2 items-start">
				<GoBack />
				<a
					href={`https://www.instagram.com/${work.instagram}`}
					target="_blank"
					rel="noopener noreferrer"
					className="group flex gap-2 items-center py-[6px] px-3 border border-dark rounded text-light bg-dark hover:bg-light hover:text-dark transition-colors"
				>
					<InstagramIcon className="w-5 h-5" />
					<span className="text-sm lg:text-base mt-[1px] uppercase">{work.student}</span>
					<ArrowUpRightIcon className="w-[18px] h-[18px] mt-[1px]" />
				</a>
			</div>

			<div id="container" className="w-screen h-screen absolute top-0 left-0 overflow-hidden">
				{work.images.map(image =>
					<Image
						key={image.url}
						className="image absolute left-1/2 -translate-x-1/2 will-change-transform h-screen w-auto object-cover"
						src={image.url}
						alt=""
						width={1920}
						height={1080}
					/>
				)}
			</div>

			<svg className="arrow-down-svg animate-[bounce_2s_ease-out_infinite] py-2 border border-dark fixed z-10 left-2 lg:left-4 bottom-4 h-12 bg-light rounded" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
			</svg>
		</div>
	)
}

export default function StudentWork({ params }: Props) {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(".image:not(:last-child)", {
			yPercent: -100,
			ease: "none",
			stagger: 0.5,
			scrollTrigger: {
				trigger: "#container",
				start: "top top",
				end: "+=300%",
				scrub: 1.5,
				pin: true,
			},
			onStart: () => gsap.to('.arrow-down-svg', { opacity: 0, duration: 0.5, delay: 8 }),
		})

		gsap.set(".image", { zIndex: (i, _target, targets) => targets.length - i })
	}, [])

	return <RenderStudentWork params={params} />
}
