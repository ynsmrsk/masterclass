'use client'
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function About() {
	const container = useRef(null)

	useGSAP(() => {
		gsap.timeline({
			scrollTrigger: {
				start: "top 70%",
				end: "bottom 20%",
				trigger: container.current,
				toggleActions: "play none none reverse",
			}
		}).from("span", {
			duration: 1.5,
			y: 200,
			ease: "power4.out",
			skewY: 6,
			stagger: {
				amount: 0.6,
			},
		})
	}, { scope: container })
	return (
		<section ref={container} className="bg-primary-300 py-4">
			{paragraphs.map((paragraph, i) =>
				<ul key={i} className="flex flex-col justify-center items-center bg-red-500">
					{paragraph.map((line, i) =>
						<li key={i} className='h-6 sm:h-8 xl:h-12 w-full lg:w-screen relative overflow-hidden p-2'>
							<span className="text-xl sm:text-2xl xl:text-3xl absolute inset-0 flex items-center text-dark font-medium">{line}</span>
						</li>
					)}
				</ul>
			)}
		</section>
	)
}

const paragraphs = [
	[
		'3D görselleştirme alanında 7 yıldan',
		'fazla deneyime sahip ve aktif olarak',
		'mesleki alanın içerisindeyim.',
	],
	[
		'Eğitimlerimde yazılımsal sırlarımı,',
		'fotogerçekçi sunum yöntemlerimi ve',
		'çalışmalarda kullandığım vazgeçilmez',
		'püf noktalarımı paylaşıyorum.',
	]
]