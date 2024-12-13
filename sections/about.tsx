'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

export default function About() {
  const container = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    ScrollTrigger.create({
      trigger: "#image-wrapper",
      start: "top top",
      endTrigger: "#content",
      end: "bottom center",
      pin: true,
      animation: tl,
      scrub: true,
      anticipatePin: 0.5,
      pinSpacing: false
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

    tl.to(".blur-overlay", {
      backdropFilter: "blur(12px)",
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
    <section className={'mb-32 sm:mb-0'} ref={container}>
      <div id='image-wrapper' className="brightness-100 w-screen h-[115vh] bg-light">
        <div className="blur-overlay absolute inset-0 z-10" />
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
      <section id='content' className='container relative -mt-32 -mb-32 lg:translate-x-20 text-light min-h-screen text-balance flex flex-col'>
        <h1 className='text-[66px] leading-none font-medium'>Selman Can</h1>
        <h2 className='text-2xl mb-6'>İç mimar & 3D görselleştirme uzmanı</h2>
        <p className='text-2xl mb-4 text-primary-300'><b>Selman CAN</b>, 3D görselleştirme alanında 9 yıldan fazla deneyime sahip ve aktif
          olarak mesleki alanın içindedir.</p>
        <p className='text-2xl mb-4 text-primary-300'>
          Kursta yazılımsal sırlarını, fotogerçekçi sunum yöntemlerini ve projelerinde kullandığı vazgeçilmez püf noktaları
          paylaşıyor.
        </p>
        <p className='text-2xl mb-4 text-primary-300'>
          <b>immersive.images<strong><sup><span style={{ fontFamily: 'system-ui' }} className='text-2xl'>&reg;</span></sup></strong></b>, Autodesk'in <b>Yetkili Eğitim Merkezi (<b>ATC<strong><sup><span style={{ fontFamily: 'system-ui' }} className='text-2xl'>&reg;</span></sup></strong></b>)</b>
          ünvanını alarak 3ds Max eğitimlerini lisanslı bir şekilde vermeye başladı.
          ABD'nin önde gelen yazılım şirketi Autodesk, <b>Selman CAN’ı</b> Öğrenme Partneri (Learning Partner) ailesine dahil etti.
        </p>
        <p className='text-2xl mb-4 text-primary-300'>
          Autodesk’in yetkili eğitmeni <b>Selman CAN</b> ile <b>immersive.images<strong><sup><span style={{ fontFamily: 'system-ui' }} className='text-2xl'>&reg;</span></sup></strong></b>
          tarafından düzenlenecek <p></p> 3ds Max eğitimleri, sektördeki profesyonellere
          ve öğrencilere yönelik önemli bir gelişim fırsatı sunuyor.
        </p>
        <div className='flex gap-8 md:gap-12 mt-10'>
          <Image
            src="/autodesk-authorized-training-center.avif"
            alt="Autodesk Authorized Training Center"
            width={180}
            height={41}
          />
          <Image
            src="/autodesk-learning-partner.avif"
            alt="Autodesk Learning Partner"
            width={180}
            height={41}
          />
        </div>
      </section>
    </section>
  )
}