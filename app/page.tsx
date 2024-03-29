import * as Section from "@/sections"
import Trailer from "@/components/trailer"
import Marquee from "@/components/marquee"
import ContactLinks from "@/components/contact-links"

export default function Home() {
	return (
		<>
			<Trailer />
			<ContactLinks />
			<Section.Hero />
			<Section.IntroText />
			<Section.Benefits />
			<Section.CompareSlider />
			<Section.Testimonials />
			<Section.UsedPrograms />
			<Section.Numbers />
			<Section.CourseContent />
			<Section.About />
			<Section.Faq />
			<Marquee>Öğrenci Çalışmaları</Marquee>
			<Section.StudentWorks />

			{/* <Section.TextRepeat />
			<Section.Test /> */}
		</>
	)
}

