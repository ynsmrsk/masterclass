import * as Section from "@/sections"
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
			<ContactLinks />
			<Section.Hero />
			<Section.IntroText />
			<Section.Benefits />
			<Section.BeforeAfter />
			<Section.Brands />
			<Section.Testimonials />
			<Section.UsedPrograms />
			<Section.Numbers />
			<Section.CourseContent />
			<Section.About />
			<Section.Faq />
			<Marquee>Öğrenci Çalışmaları</Marquee>
			<StudentWorks />
		</>
	)
}


{/* <Section.TextRepeat /> */ }