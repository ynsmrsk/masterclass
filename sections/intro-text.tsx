'use client'
import { useRef, useContext } from "react"
import { ScrollContext } from "@/utils/scroll-provider"

const texts = [
	"Sunduğum kapsamlı eğitim programı ile ezberlerden kurtul!",
	"Eğitim toplamda 15 saatten fazla süreye sahip.",
	'Gerçek bir "Görselleştirme Uzmanı" olmak istiyorsan, Yerini Ayırt!'
]

function opacityForBlock(sectionProgress: number, blockNumber: number) {
	const progress = sectionProgress - blockNumber
	if (progress >= 0 && progress < 1) return 1
	return 0.25
}

export default function IntroText() {
	const { scrollY } = useContext(ScrollContext),
		refContainer = useRef<HTMLDivElement>(null),
		numOfBlocks = 3
	let blockProgress = 0

	if (refContainer.current) {
		const { clientHeight, offsetTop } = refContainer.current,
			screenH = window.innerHeight,
			halfH = screenH / 1.8,
			percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
		blockProgress = Math.min(numOfBlocks - 0.5, Math.max(0.5, percentY * numOfBlocks))
	}

	return (
		<section ref={refContainer} className="intro-text pt-16 pb-24 xl:py-32 bg-dark text-primary-200">
			<div className="container space-y-1 md:space-y-3 font-display font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[84px] xl:max-w-5xl flex flex-col justify-center">
				{texts.map((text, i) => (
					<p className="ml-6 transition-opacity duration-600"
						key={i}
						style={{ opacity: opacityForBlock(blockProgress, i) }}>
						{text}
					</p>
				))}
			</div>
		</section>
	)
}
