'use client'
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { Testimonial as TestimonialType } from "@/types/Testimonial"

export default function Testimonial({ testimonial }: { testimonial: TestimonialType }) {
	const contentRef = useRef<HTMLParagraphElement>(null)

	const [showMore, setShowMore] = useState(false)
	const [showLink, setShowLink] = useState(false)

	useEffect(() => {
		if (contentRef.current && contentRef.current?.clientHeight < contentRef.current?.scrollHeight) {
			setShowLink(true)
		}
	}, [contentRef])

	return (
		<article className="px-4 lg:px-12 py-3 lg:py-8 flex flex-col items-start gap-4 sm:gap-8 border sm:border-2 border-primary-700 rounded-xl">
			<blockquote>
				<p
					ref={contentRef}
					className={`
							${showMore ? 'line-clamp-none' : 'line-clamp-6'} 
							mb-2 lg:text-left text-xl sm:text-2xl 2xl:text-3xl leading-normal sm:leading-normal 2xl:leading-normal
					`}
				>
					&ldquo;{testimonial.review}&rdquo;
				</p>
				<button
					className={`underline underline-offset-2 text-primary-700 hover:text-primary-900 transition sm:text-xl 2xl:text-2xl ${showLink ? '' : 'invisible'}`}
					onClick={() => setShowMore((prevState) => !prevState)}
				>
					{showMore ? 'Daha az göster' : 'Devamını oku'}
				</button>
			</blockquote>
			<a
				className="flex items-center gap-4 hover:bg-primary-200 transition p-2 -ml-2 mt-auto rounded-md"
				target="_blank"
				href={`https://www.instagram.com/${testimonial.instagram}/`}
				rel="noreferrer"
			>
				<Image className="rounded-full grayscale-[20%]" src={testimonial.image} width={60} height={60} alt='Reviewer' />
				<div className="grid font-medium">
					<cite className="text-primary-800 leading-tight text-sm sm:text-base 2xl:text-lg 2xl:leading-tight uppercase">{testimonial.student}</cite>
					<span className="text-primary-700 text-sm leading-tight 2xl:text-base 2xl:leading-tight">@{testimonial.instagram}</span>
				</div>
			</a>
		</article>
	)
}