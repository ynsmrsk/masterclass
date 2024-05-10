import * as Section from "@/sections"
import Trailer from "@/components/trailer"
import Marquee from "@/components/marquee"
import ContactLinks from "@/components/contact-links"
import { getStudentWorks } from "@/sanity/sanity-utils"

async function StudentWorks() {
	const data = await getStudentWorks()
	return <Section.StudentWorks data={data} isPage={false} />
}

export default function Home() {
	return (
		<>
			<Trailer />
			<ContactLinks />
			<Section.Hero />
			<Section.IntroText />
			<Section.Benefits />
			<Section.CompareSlider />
			<Section.Brands />
			<Section.Testimonials />
			<Section.UsedPrograms />
			<Section.Numbers />
			<Section.CourseContent />
			<Section.About />
			<Section.Faq />
			{/* <Section.TextRepeat /> */}
			<Marquee>Öğrenci Çalışmaları</Marquee>
			<StudentWorks />
		</>
	)
}

