'use client'
import { useEffect } from "react"
import { getStudentWork } from "@/sanity/sanity-utils"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

type Props = {
	params: { student: string }
}

function GoBack() {
	const router = useRouter()
	const onClick = () => router.back()
	return <button className="block" onClick={onClick}>Go Back</button>
}

async function RenderStudentWork({ params }: Props) {
	const slug = params.student
	const work = await getStudentWork(slug)
	console.log('zort')

	return (
		<div>
			<div className="fixed top-10 left-10 z-10">
				<GoBack />
				<a href={`https://www.instagram.com/${work.instagram}`} target="_blank" rel="noreferrer">
					{work.instagram}
				</a>
				<h1>{work.studentName}</h1>
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
		</div>
	)
}

export default function StudentWork({ params }: Props) {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
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
			}
		})

		gsap.set(".image", { zIndex: (i, _target, targets) => targets.length - i })
	}, [])

	return (
		<RenderStudentWork params={params} />
	)
}
