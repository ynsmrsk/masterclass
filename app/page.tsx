import ContactLinks from "@/components/contact-links"
import { getStudentWorks } from "@/sanity/sanity-utils"

import Hero from "@/sections/hero"
import IntroText from "@/sections/intro-text"
import Benefits from "@/sections/benefits"
import BeforeAfters from "@/sections/before-afters"
import Brands from "@/sections/brands"
import Testimonials from "@/sections/testimonials"
import UsedPrograms from "@/sections/used-programs"
import Numbers from "@/sections/numbers"
import CourseContent from "@/sections/course-content"
import About from "@/sections/about"
import Faq from "@/sections/faq"
import Works from "@/sections/student-works"
import Footer from "@/sections/footer"

async function StudentWorks() {
  const data = await getStudentWorks()
  return <Works data={data} />
}

export default function Home() {
  return (
    <div>
      <ContactLinks />
      <Hero />
      <div className="relative z-20 mb-[40vh] lg:mb-[70vh] shadow-[0px_70px_90px_rgba(0,0,0,0.8)] bg-light">
        <IntroText />
        <Benefits />
        <BeforeAfters />
        <Brands />
        <Testimonials />
        <UsedPrograms />
        <Numbers />
        <Faq />
        <CourseContent />
        <About />
        <StudentWorks />
      </div>
      <Footer />
    </div>
  )
}

