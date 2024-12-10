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

  function openDialog() {
    setShowTrailer(true)
  }

  function closeDialog() {
    setShowTrailer(false)
  }

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
            className="px-6 py-1 bg-white text-black tracking-wide rounded-full flex items-center gap-1 hover:bg-opacity-75 transition-colors"
            href='https://wa.me/905378668977'
            target="_blank"
            rel="noreferrer"
          >
            Bilgi al
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M19.077 4.928c-2.082-2.083-4.922-3.134-7.904-2.894-4.009.322-7.523 3.11-8.699 6.956-.84 2.748-.487 5.617.881 7.987L2.059 21.28a.551.551 0 0 0 .67.691l4.504-1.207a10 10 0 0 0 4.773 1.216h.004c4.195 0 8.071-2.566 9.412-6.541 1.306-3.876.34-7.823-2.345-10.511m-2.179 10.626c-.208.583-1.227 1.145-1.685 1.186-.458.042-.887.207-2.995-.624-2.537-1-4.139-3.601-4.263-3.767-.125-.167-1.019-1.353-1.019-2.581s.645-1.832.874-2.081a.92.92 0 0 1 .666-.312c.166 0 .333 0 .478.006.178.007.375.016.562.431.222.494.707 1.728.769 1.853s.104.271.021.437-.125.27-.249.416c-.125.146-.262.325-.374.437-.125.124-.255.26-.11.509.146.25.646 1.067 1.388 1.728.954.85 1.757 1.113 2.007 1.239.25.125.395.104.541-.063s.624-.728.79-.978.333-.208.562-.125 1.456.687 1.705.812.416.187.478.291.062.603-.146 1.186" /></svg>
          </a>
          <button
            className="flex items-center gap-2 px-6 py-1 outline-none bg-dark text-light rounded-full border-[1px] border-light hover:bg-light/10 transition-colors"
            onClick={openDialog}
          >
            <span>Filmi İzle</span>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
            </svg>
          </button>
        </div>
      </div>

      {showTrailer && <VideoModal isOpen={showTrailer} onClose={closeDialog} />}
    </header>
  )
}