'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function StackingText() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const textLinesRef = useRef([])
  const endMarkerRef = useRef(null)

  useGSAP(() => {
    const section = sectionRef.current
    const container = containerRef.current
    const textLines = textLinesRef.current
    const endMarker = endMarkerRef.current

    // Initial state - position lines below viewport with large spacing
    gsap.set(textLines, {
      y: (index) => window.innerHeight + (index * 200), // Start below viewport with 200px spacing
    })

    // Create animation for text stacking
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        endTrigger: endMarker,
        end: 'top center',
        scrub: 1,
        onUpdate: (self) => {
          // Ensure container stays in view
          if (self.progress === 1) {
            gsap.to(container, {
              y: 0,
              duration: 0.3,
            })
          }
        },
      },
    })

    // Animate each line to its final position
    textLines.forEach((line, index) => {
      const finalSpacing = index * 10 // Slightly larger final spacing
      tl.to(
        line,
        {
          y: finalSpacing,
          duration: 1,
          ease: 'power2.inOut',
        },
        0.1 * index
      )
    })

    // Create a timeline for the pinned section
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      endTrigger: endMarker,
      end: 'top center',
      pin: true,
      anticipatePin: 0.3,
    })
  }, { scope: sectionRef })

  const textLines = [
    '5+ çevrimiçi ders',
    '10+ çevrimdışı ders',
    '18+ saatlik kurs',
    '1000+ öğrenci',
  ]

  return (
    <section
      ref={sectionRef}
      className="min-h-dvh bg-black text-white px-8 my-[50vh]"
    >
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto py-16"
      >
        <div>
          {textLines.map((text, index) => (
            <div
              key={index}
              className="relative"
            >
              <div
                ref={(el) => (textLinesRef.current[index] = el)}
                className="text-5xl md:text-[120px] font-medium font-display leading-none"
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div ref={endMarkerRef} className="h-[50vh]" />
    </section>
  )
}