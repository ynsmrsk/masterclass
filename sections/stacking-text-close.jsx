'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const StackingText = () => {
  const sectionRef = useRef(null)
  const textLinesRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const textLines = textLinesRef.current

    // Initial state - position lines below viewport with large spacing
    gsap.set(textLines, {
      y: (index) => window.innerHeight + (index * 300), // Start below viewport with 300px spacing
    })

    // Create animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 40%',
        end: '+=1200',
        scrub: 1,
      },
    })

    // Animate each line to its final position
    textLines.forEach((line, index) => {
      const finalSpacing = index * 24 // Final spacing between lines
      tl.to(
        line,
        {
          y: finalSpacing,
          duration: 1,
          ease: 'power2.inOut',
        },
        0.1 * index // Slight delay between each line's animation
      )
    })

    return () => {
      tl.kill()
    }
  }, [])

  const textLines = [
    '5 çevrimiçi ders',
    '10 çevrimdışı ders',
    '20+ saatlik kurs',
    '1000+ öğrenci',
    'kişisel mentörlük',
    '5 çevrimiçi ders',
    '10 çevrimdışı ders',
  ]

  return (
    <section
      ref={sectionRef}
      className="min-h-[250vh] bg-black text-white px-8"
    >
      <div className="h-[50vh]"></div>
      <div className="max-w-6xl mx-auto">
        <div>
          {textLines.map((text, index) => (
            <div
              key={index}
              className="relative"
            >
              <div
                ref={(el) => (textLinesRef.current[index] = el)}
                className="text-5xl md:text-8xl font-semibold font-display leading-none uppercase"
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StackingText