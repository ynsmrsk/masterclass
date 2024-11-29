'use client'
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from 'next/image'

export default function BeforeAfters() {
  gsap.registerPlugin(ScrollTrigger)
  const container = useRef()

  useGSAP(() => {
    gsap.to(".left", {
      width: '75vw',
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top center",
        end: 'bottom top',
      },
    })

    function handleMove(e) {
      const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX
      gsap.to('.left', {
        width: `${clientX / window.innerWidth * 100}%`,
        duration: 0.5,
        ease: "power3.out"
      })
    }
    container.current.addEventListener('mousemove', handleMove)
    container.current.addEventListener('touchmove', handleMove)
    return () => {
      container.current.removeEventListener('mousemove', handleMove)
      container.current.removeEventListener('touchmove', handleMove)
    }
  }, { scope: container })

  return (
    <section ref={container} className="h-screen relative">
      <div className="left absolute inset-0 overflow-hidden text-primary-200 z-10">
        <div className="w-screen h-full flex flex-col bg-cover bg-[url('/before-afters/salon-after-blurred.avif')]">
          <h2 className="text-balance mb-12 font-medium font-display px-12 mx-auto mt-auto uppercase pt-20 lg:mt-4 2xl:mt-24 text-2xl md:text-4xl md:leading-tight md:max-w-[800px] 2xl:text-5xl 2xl:leading-tight 2xl:max-w-screen-lg">Hayalindeki mimari tasarımları gerçekçi görseller ile <span className="text-orange-600">güçlendir</span></h2>
          <div
            className="marquee"
            style={{
              "--num-items": afters.length,
              "--item-width": "clamp(15rem, 2rem + 40vmin, 40rem)",
              "--gap": "1rem",
              "--speed": "45s"
            }}
          >
            <div className="marquee-track">
              {afters.map((brand, i) =>
                <div
                  key={brand}
                  className="marquee-item"
                  style={{ "--item-position": i + 1 }}
                >
                  <Image
                    src={brand}
                    alt="before render"
                    width={405}
                    height={506}
                    className="w-[clamp(15rem, 2rem + 40vmin, 40rem)] aspect-[8/10] rounded-t-lg lg:rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 text-white flex flex-col bg-cover bg-[url('/before-afters/salon-before-blurred.avif')]">
        <h2 className="text-balance mb-12 font-medium font-display px-12 mx-auto mt-auto uppercase pt-20 lg:mt-4 2xl:mt-24 text-2xl md:text-4xl md:leading-tight md:max-w-[800px] 2xl:text-5xl 2xl:leading-tight 2xl:max-w-screen-lg">Hayalindeki mimari tasarımları gerçekçi görseller ile canlandır</h2>
        <div
          className="marquee"
          style={{
            "--num-items": befores.length,
            "--item-width": "clamp(15rem, 2rem + 40vmin, 40rem)",
            "--gap": "1rem",
            "--speed": "45s"
          }}
        >
          <div className="marquee-track">
            {befores.map((brand, i) =>
              <div
                key={brand}
                className="marquee-item"
                style={{ "--item-position": i + 1 }}
              >
                <Image
                  src={brand}
                  alt="before render"
                  width={405}
                  height={506}
                  className="w-[clamp(15rem, 2rem + 40vmin, 40rem)] aspect-[8/10] rounded-t-lg lg:rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const befores = [
  '/before-afters/salon-1-before.avif',
  '/before-afters/salon-2-before.avif',
  '/before-afters/salon-3-before.avif',
  '/before-afters/salon-4-before.avif',
  '/before-afters/salon-5-before.avif',
  '/before-afters/wc-1-before.avif',
  '/before-afters/wc-2-before.avif',
  '/before-afters/wc-3-before.avif',
  '/before-afters/wc-4-before.avif',
  '/before-afters/wc-5-before.avif',
]

const afters = [
  '/before-afters/salon-1-after.avif',
  '/before-afters/salon-2-after.avif',
  '/before-afters/salon-3-after.avif',
  '/before-afters/salon-4-after.avif',
  '/before-afters/salon-5-after.avif',
  '/before-afters/wc-1-after.avif',
  '/before-afters/wc-2-after.avif',
  '/before-afters/wc-3-after.avif',
  '/before-afters/wc-4-after.avif',
  '/before-afters/wc-5-after.avif',
]