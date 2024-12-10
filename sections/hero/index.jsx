'use client'
import { useScrollY } from "@/hooks/use-scroll-y"
import { useRef, useState, useMemo } from "react"
import dynamic from 'next/dynamic'

const VideoModal = dynamic(() => import('./video-modal'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-dark/80 backdrop-blur-xl" />
})

export default function Hero() {
  const refContainer = useRef()
  const [showTrailer, setShowTrailer] = useState(false)
  const scrollY = useScrollY()

  const scrollProgress = refContainer.current
    ? Math.min(1, Math.max(0, scrollY / refContainer.current.clientHeight))
    : 0

  return (
    <header
      ref={refContainer}
      className="h-screen bg-dark grid [&>*]:col-span-full [&>*]:row-span-full place-items-center sticky top-0 z-10"
      style={{ filter: `brightness(${1 - scrollProgress * 0.85})` }}
    >
      <video
        className="object-cover w-screen h-screen min-h-0 overlay brightness-50"
        src="/film/trailer.mp4"
        poster="/film/trailer-poster.avif"
        muted loop playsInline
        autoPlay
        style={{ transform: `translateY(-${scrollProgress * 20}vh)` }}
      />
      <div
        className="w-full pb-20 px-4 text-white text-center will-change-transform flex flex-col items-center"
        style={{ transform: `translateY(${scrollProgress * 5}vh)` }}
      >
        <h1 className="mb-6 leading-none text-4xl md:text-5xl lg:text-6xl xl:text-[86px] 2xl:text-[100px] drop-shadow-lg tracking-tight max-w-screen-2xl md:text-balance">Estetik ve Fotogerçekçiliği Birleştiren Mimari Görselleştirme Kursu</h1>
        <p className="text-xl md:text-2xl 2xl:text-3xl tracking-wider drop-shadow-lg max-w-screen-lg px-4 md:text-balance">Çevrimiçi gerçekleşen canlı eğitimler ile profesyonel mimari tasarımlar üretmeyi adım adım öğren</p>
        <div className="flex gap-4 items-center mt-10">
          <a
            className="font-medium py-2.5 px-8 rounded-full flex items-center gap-1.5 bg-white text-black tracking-wide hover:bg-opacity-75 transition-colors"
            href='https://wa.me/905378668977'
            target="_blank"
            rel="noreferrer"
          >
            BİLGİ AL
          </a>
          <button
            className="font-medium py-2.5 pl-6 pr-8 rounded-full flex items-center gap-2 outline-none border border-light text-light hover:bg-light/20 transition-colors"
            onClick={() => setShowTrailer(true)}
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
            </svg>
            FİLMİ İZLE
          </button>
        </div>
      </div>

      {showTrailer && <VideoModal isOpen={showTrailer} onClose={() => setShowTrailer(false)} />}
    </header>
  )
}