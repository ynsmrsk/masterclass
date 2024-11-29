'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

export default function About() {
  gsap.registerPlugin(ScrollTrigger)
  const container = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    ScrollTrigger.create({
      trigger: "#image-wrapper",
      start: "top top",
      endTrigger: "#content",
      end: "bottom center",
      pin: true,
      animation: tl,
      scrub: true,
      pinSpacing: false,
      anticipatePin: 0.5
    })

    tl.from(".selman", {
      scale: 0.65,
      scrollTrigger: {
        trigger: "#image-wrapper",
        start: "top bottom",
        end: "top top",
        scrub: true,
      }
    })

    tl.to(".selman", {
      filter: "blur(10px)",
      scrollTrigger: {
        trigger: "#content",
        start: "top bottom",
        end: "top top",
        scrub: true,
      }
    })

    tl.to("#image-wrapper", {
      filter: "brightness(0)",
      scrollTrigger: {
        trigger: "#content",
        start: "top bottom",
        end: "center top",
        scrub: true,
      }
    })

    tl.to(".selman", {
      y: -100,
      scrollTrigger: {
        trigger: "#content",
        start: "top bottom",
        end: "top top",
        scrub: true,
      }
    })
  }, { scope: container })

  return (
    <section ref={container}>
      <div id='image-wrapper' className="w-screen brightness-100 h-[115vh] bg-light">
        <Image
          src="/selman-horizontal.avif"
          alt="Selman Can"
          className='selman hidden lg:block h-full w-full object-cover will-change-transform'
          width={1920}
          height={1080}
        />
        <Image
          src="/selman-vertical.avif"
          alt="Selman Can"
          className='selman lg:hidden h-full w-full object-cover will-change-transform'
          width={768}
          height={1365}
        />
      </div>
      <section id='content' className='text-light relative min-h-dvh -mt-32'>
        <div className="container max-w-screen-sm text-balance flex flex-col gap-6">
          <h1 className='text-7xl lg:text-8xl'>Selman Can</h1>
          <p className='text-3xl'>3D görselleştirme alanında 7 yıldan fazla deneyime sahip ve aktif olarak mesleki alanın içerisindeyim.</p>
          <p className='text-3xl'>Eğitimlerimde yazılımsal sırlarımı, fotogerçekçi sunum yöntemlerimi ve çalışmalarda kullandığım vazgeçilmez püf noktalarımı paylaşıyorum.</p>
          <div className='flex flex-col sm:flex-row gap-12 mt-6 lg:mt-12'>
            <Image
              src="/autodesk-authorized-training-center.avif"
              alt="Autodesk Authorized Training Center"
              width={200}
              height={51}
            />
            <Image
              src="/autodesk-learning-partner.avif"
              alt="Autodesk Learning Partner"
              width={200}
              height={51}
            />
          </div>
        </div>
      </section>
    </section>
  )
}