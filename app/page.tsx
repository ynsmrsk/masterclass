// @ts-nocheck
'use client'
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import * as Section from "@/sections"
import Trailer from "@/components/trailer"
import Marquee from "@/components/marquee"
import ContactLinks from "@/components/contact-links"

export default function Home() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		let ctx = gsap.context(() => {
			let coloredSections = gsap.utils.toArray("[data-color]")
			coloredSections.forEach((section, i) => {
				let [bgColor, color] = section.getAttribute("data-color").split(" ")
				ScrollTrigger.create({
					trigger: section,
					start: "10% bottom",
					end: "bottom 40%",
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
			<Section.Hero />
			<Section.IntroText />
			<Trailer />
			<Section.Benefits />
			<div data-color="#f4efe9 #161616">
				<Section.CompareSlider />
			</div>
			<div className="mb-24">
				<Section.Testimonials />
			</div>
			<div data-color="#f4efe9 #161616">
				<Section.UsedPrograms />
			</div>
			<div data-color='#161616 #f4efe9'>
				<Section.Numbers />
			</div>
			<div data-color="#f4efe9 #161616">
				<Section.CourseContent />
			</div>
			<div data-color="#161616 #f4efe9">
				<Section.About />
			</div>
			<div className="py-24 md:py-48">
				<h2 className="text-center mb-10 lg:mb-16 text-3xl md:text-4xl font-medium font-display">Sıkça Sorulan Sorular</h2>
				<Section.Faq />
			</div>
			<Marquee>Öğrenci Çalışmaları</Marquee>
			<Section.StudentWorks isPage={false} />
			<ContactLinks />
		</>
	)
}

