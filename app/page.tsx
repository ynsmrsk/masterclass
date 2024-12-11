import ContactLinks from "@/components/contact-links"
import { getStudentWorks } from "@/sanity/sanity-utils"
import About from "@/sections/about"
import BeforeAfters from "@/sections/before-afters"
import Benefits from "@/sections/benefits"
import Brands from "@/sections/brands"
import CourseContent from "@/sections/course-content"
import Faq from "@/sections/faq"
import Footer from "@/sections/footer"
import Hero from "@/sections/hero"
import IntroText from "@/sections/intro-text"
import Numbers from "@/sections/numbers"
import Works from "@/sections/student-works"
import Testimonials from "@/sections/testimonials"
import UsedPrograms from "@/sections/used-programs"

async function StudentWorks() {
  const data = await getStudentWorks()
  return <Works data={data} />
}

export default function Home() {
  return (
    <main>
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
        <h2 className="text-light uppercase font-display font-medium text-3xl lg:text-5xl mb-2 lg:mb-12 text-center relative z-10">Öğrenci Çalışmaları</h2>
        <StudentWorks />
      </div>
      <Footer />
    </main>
  )
}

