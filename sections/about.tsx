import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"

export default function About() {
	const comp = useRef(null)
	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.timeline({
				scrollTrigger: {
					start: "top 70%",
					end: "bottom 20%",
					trigger: comp.current,
				}
			}).from(['h2', 'h3'], {
				duration: 1,
				opacity: 0,
				y: 10,
				delay: 0.3,
				ease: "power4.out",
			}).from("span", {
				duration: 2,
				y: 200,
				ease: "power4.out",
				skewY: 4,
				delay: -1,
				stagger: {
					amount: 0.4,
				},
			})
		}, comp)
		return () => ctx.revert()
	}, [])
	return (
		<section className='pb-6 lg:py-8 mb-8 lg:mb-32 flex flex-col lg:flex-row-reverse lg:h-screen'>
			<div className="relative lg:shrink-0">
				<Image
					className="
                        object-cover object-[center_-50px] sm:object-[center_-100px] md:object-[center_-200px] lg:object-center 
                        h-[350px] screen-500:h-[550px] lg:aspect-auto lg:h-full w-full lg:w-[45vw]
                        border-solid lg:border-t lg:border-b lg:border-l lg:rounded-l-md border-primary-800
                    "
					src="/profile.jpg"
					width={3888}
					height={5184}
					alt="Selman Can Profile"
				/>
			</div>
			<div ref={comp} className='container lg:justify-self-end flex flex-col lg:items-end py-10 lg:py-20 whitespace-nowrap'>
				<div className='mb-3 lg:mb-10'>
					<h2 className='text-5xl lg:text-7xl font-display font-semibold'>Selman Can</h2>
					<h3 className="text-xl lg:text-2xl lg:text-right font-medium text-primary-400">İç mimar & 3D görselleştirme uzmanı</h3>
				</div>
				<div className='space-y-4 lg:space-y-8'>
					{aboutMeTextLines.map((paragraphs, i) =>
						<div key={i} className="flex flex-col justify-center items-center">
							{paragraphs.map((line, i) =>
								<p className='h-6 sm:h-8 xl:h-12 w-full lg:w-screen relative overflow-hidden p-2' key={i}>
									<span className="text-xl sm:text-2xl xl:text-3xl absolute inset-0 lg:text-right flex items-center lg:justify-end text-primary-600 font-medium">{line}</span>
								</p>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

const aboutMeTextLines = [
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

// <h1 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }} className="split-text text-[9vw] leading-none">immersive.images</h1>
