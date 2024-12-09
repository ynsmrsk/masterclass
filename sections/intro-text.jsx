'use client'
import { useRef } from "react"
import { useScrollY } from "@/hooks/use-scroll-y"

const texts = [
	"Sunduğum kapsamlı eğitim programı ile ezberlerden kurtul!",
	"Eğitim toplamda 15 saatten fazla süreye sahip.",
	'Gerçek bir "Görselleştirme Uzmanı" olmak için yerini ayırt!'
]

function opacityForBlock(sectionProgress, blockNumber) {
	const progress = sectionProgress - blockNumber
	if (progress >= 0 && progress < 1) return 1
	return 0.2
}

export default function IntroText() {
	const scrollY = useScrollY()
	const refContainer = useRef(null)
	const numOfBlocks = 3
	let blockProgress = 0

	if (refContainer.current) {
		const { clientHeight } = refContainer.current
		const rect = refContainer.current.getBoundingClientRect()
		const screenH = window.innerHeight
		const halfH = screenH / 2
		const percentY = Math.min(
			clientHeight + halfH,
			Math.max(-screenH, -rect.top + halfH)
		) / clientHeight
		blockProgress = Math.min(numOfBlocks - 0.5, Math.max(0.5, percentY * numOfBlocks))
	}

	return (
		<section ref={refContainer} className="intro-text relative pt-16 pb-24 xl:py-32 bg-dark text-light">
			<div className="container space-y-1 md:space-y-3 font-display font-medium text-4xl sm:text-5xl md:text-7xl xl:text-[84px] xl:max-w-5xl">
				{texts.map((text, i) => (
					<p className="ml-6 transition-all duration-400 will-change-opacity"
						key={i}
						style={{
							opacity: opacityForBlock(blockProgress, i),
							transform: `translateZ(0)`
						}}>
						{text}
					</p>
				))}
			</div>
		</section >
	)
}
