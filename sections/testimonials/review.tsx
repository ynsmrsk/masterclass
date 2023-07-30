import Image from "next/image"
import { useEffect, useState, useRef } from "react"

interface Props {
	by: string,
	quote: string,
	image: string,
	igUsername: string,
}

export default function Review({ item }: { item: Props }) {
	const contentRef = useRef<HTMLParagraphElement>(null)

	const [showMore, setShowMore] = useState(false)
	const [showLink, setShowLink] = useState(false)

	useEffect(() => {
		if (contentRef.current && contentRef.current?.clientHeight < contentRef.current?.scrollHeight) {
			setShowLink(true)
		}
	}, [contentRef])

	return (
		<div className="px-4 lg:px-12 py-3 lg:py-8 flex flex-col items-start gap-4 sm:gap-8 border sm:border-2 border-primary-700 rounded-md">
			<div>
				<p
					ref={contentRef}
					className={`
                        ${showMore ? 'line-clamp-none' : 'line-clamp-6'} 
                        mb-2 lg:text-left text-lg sm:text-2xl 2xl:text-3xl leading-normal sm:leading-normal 2xl:leading-normal
                    `}
				>
					&ldquo;{item.quote}&rdquo;
				</p>
				<button
					className={`underline underline-offset-2 text-primary-700 sm:text-xl 2xl:text-2xl ${showLink ? '' : 'hidden'}`}
					onClick={() => setShowMore((prevState) => !prevState)}
				>
					{showMore ? 'Daha az göster' : 'Devamını oku'}
				</button>
			</div>
			<a
				className="flex items-center gap-4"
				target="_blank"
				href={`https://www.instagram.com/${item.igUsername}/`}
				rel="noreferrer"
			>
				<Image className="rounded grayscale-[20%]" src={item.image} width={44} height={44} alt='Reviewer' />
				<div className="flex flex-col font-medium">
					<span className="text-primary-800 leading-tight text-sm sm:text-base 2xl:text-lg 2xl:leading-tight uppercase">{item.by}</span>
					<span className="text-primary-600 text-sm leading-tight 2xl:text-base 2xl:leading-tight">@{item.igUsername}</span>
				</div>
			</a>
		</div>
	)
}
