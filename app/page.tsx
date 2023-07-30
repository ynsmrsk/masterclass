// @ts-nocheck
'use client'
import { useEffect } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import * as Section from "@/sections"
import Trailer from "@/components/trailer"
import Marquee from "@/components/marquee"
import { ArrowUpRightIcon } from '@/components/icons'
import { WhatsappIcon } from "@/components/icons"

export default function Home() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		let ctx = gsap.context(() => {
			let coloredSections = gsap.utils.toArray("[data-color]")
			coloredSections.forEach((section, i) => {
				let [bgColor, color] = section.getAttribute("data-color").split(" ")
				ScrollTrigger.create({
					trigger: section,
					start: "20% bottom",
					end: "bottom 60%",
					onToggle: self => {
						// when it's enter a section from either direction (scrolling up or down), animate to its color
						if (self.isActive) {
							gsap.to("body", {
								backgroundColor: bgColor,
								color: color,
								overwrite: "auto",
								duration: 0.3,
							})
							// when it's leave the first section scrolling in reverse
							// or when it's scroll past the very last section (forward), return to the default colors
						} else if ((i === 0 && self.direction < 0) || (i === coloredSections.length - 1 && self.direction > 0)) {
							gsap.to("body", {
								backgroundColor: "#f4efe9",
								color: "#181717",
								overwrite: "auto",
								duration: 0.3
							})
						}
					}
				})
			})
		})
		return () => ctx.revert()
	}, [])

	return (
		<>
			<div className="bg-dark text-light">
				<Section.Hero />
			</div>

			<div className="bg-dark text-primary-200">
				<Section.IntroText />
			</div>

			<Trailer />

			<Section.Benefits />

			<div data-color="#f4efe9 #161616">
				<Section.CompareSlider />
			</div>

			<div className="mb-24">
				<Section.Testimonials />
			</div>

			<Marquee className="mb-24">
				<Link datatype="link" className='interactable' href="/student-works">
					<span className="inline-block underline underline-offset-[4px]">Öğrenci Çalışmaları</span>
					<ArrowUpRightIcon className="inline-block w-5 h-5 md:w-7 md:h-7 ml-1 stroke-[2.3px]" />
				</Link>
			</Marquee>

			<div data-color="#f4efe9 #161616" className="mb-24">
				<Section.UsedPrograms />
			</div>

			<section className='px-2 md:px-4'>
				<div className='container bg-dark p-8 md:py-12 md:px-24 rounded'>
					<div className='flex flex-col md:flex-row gap-12 justify-between max-w-[70%] 2xl:max-w-5xl mx-auto'>
						<div className='flex flex-col items-center gap-2 2xl:gap-5'>
							<span className='text-light text-3xl md:text-4xl 2xl:text-6xl font-semibold'>5</span>
							<span className='text-primary-400 tracking-wider md:text-lg 2xl:text-2xl font-medium'>CANLI DERS</span>
						</div>
						<div className='flex flex-col items-center gap-2 2xl:gap-5'>
							<span className='text-light text-3xl md:text-4xl 2xl:text-6xl font-semibold'>15+</span>
							<span className='text-primary-400 tracking-wider md:text-lg 2xl:text-2xl font-medium'>SAATLİK KURS</span>
						</div>
						<div className='flex flex-col items-center gap-2 2xl:gap-5'>
							<span className='text-light text-3xl md:text-4xl 2xl:text-6xl font-semibold'>200+</span>
							<span className='text-primary-400 tracking-wider md:text-lg 2xl:text-2xl font-medium'>ÖĞRENCİ</span>
						</div>
					</div>
				</div>
			</section>

			<div data-color="#f4efe9 #161616" className="mb-24">
				<Section.CourseContent />
			</div>

			<div data-color="#161616 #f4efe9">
				<Section.About />
			</div>

			<div className="py-24 md:py-48">
				<h2 className="text-center mb-10 lg:mb-16 text-3xl md:text-4xl font-medium font-display">Sıkça Sorulan Sorular</h2>
				<Section.Faq />
			</div>

			<Marquee className="hidden lg:block">
				<a className="inline-block">Öğrenci Çalışmaları</a>
			</Marquee>

			<div className="hidden lg:block">
				<Section.StudentWorks isPage={false} />
			</div>

			<Marquee>
				<div className="flex gap-8">
					<a
						datatype="link"
						className='interactable'
						href="mailto:info@immersiveimages.co"
					>
						info@immersiveimages.co
					</a>
					<a
						datatype="link"
						href="https://wa.me/p/8971866599494004/905458771883"
						target="_blank"
						rel="noreferrer"
						className="interactable flex items-center gap-2">
						<WhatsappIcon className="fill-dark w-5 h-5 md:w-8 md:h-8 inline-block" />
						<span datatype='link'>Whatsapp</span>
					</a>
				</div>
			</Marquee>
		</>
	)
}

