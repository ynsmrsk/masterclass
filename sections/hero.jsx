'use client'
import { useScrollY } from "@/hooks/use-scroll-y"
import { useRef, useState } from "react"

export default function Hero() {
  const refContainer = useRef()
  const dialogRef = useRef()
  const videoRef = useRef()
  const scrollY = useScrollY()
  const [isPlaying, setIsPlaying] = useState(true)
  const [videoProgress, setVideoProgress] = useState(0)
  const [isControlsVisible, setIsControlsVisible] = useState(true)
  let controlsTimeout = useRef(null)

  const scrollProgress = refContainer.current
    ? Math.min(1, Math.max(0, scrollY / refContainer.current.clientHeight))
    : 0

  const handleTimeUpdate = () => {
    const video = videoRef.current
    const progressValue = (video.currentTime / video.duration) * 100
    setVideoProgress(progressValue)
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    videoRef.current.currentTime = 0
  }

  const handleMouseMove = () => {
    setIsControlsVisible(true)
    
    if (controlsTimeout.current) {
      clearTimeout(controlsTimeout.current)
    }
    
    controlsTimeout.current = setTimeout(() => {
      setIsControlsVisible(false)
    }, 3000)
  }

  return (
    <header
      ref={refContainer}
      className="min-h-screen grid [&>*]:col-span-full [&>*]:row-span-full place-items-center sticky top-0"
      style={{ filter: `brightness(${1 - scrollProgress * 0.85})` }}
    >
      <video
        className="object-cover w-full h-full min-h-0 overlay brightness-50"
        src="/trailer.mp4"
        muted loop playsInline
        autoPlay
        style={{ transform: `translateY(-${scrollProgress * 20}vh)` }}
      />
      <div
        className="w-full pb-20 px-4 text-white text-center will-change-transform flex flex-col items-center"
        style={{ transform: `translateY(${scrollProgress * 5}vh)` }}
      >
        <h1 className="mb-6 text-4xl lg:text-6xl xl:text-[80px] drop-shadow-lg text-balance max-w-screen-2xl">Estetik ve Fotogerçekçiliği Birleştiren Mimari Görselleştirme Kursu</h1>
        <p className="text-xl lg:text-2xl tracking-wider drop-shadow-lg max-w-screen-lg text-balance">Çevrimiçi gerçekleşen canlı eğitimler ile profesyonel <br /> mimari tasarımlar üretmeyi adım adım öğren</p>
        <div className="flex gap-4 items-center mt-10">
          <a
            className="px-6 py-1 bg-white text-black tracking-wide rounded-full flex items-center gap-1 hover:bg-opacity-75 transition-colors"
            href='https://wa.me/p/8971866599494004/905458771883'
            target="_blank"
            rel="noopener noreferrer"
          >
            Bilgi al
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M19.077 4.928c-2.082-2.083-4.922-3.134-7.904-2.894-4.009.322-7.523 3.11-8.699 6.956-.84 2.748-.487 5.617.881 7.987L2.059 21.28a.551.551 0 0 0 .67.691l4.504-1.207a10 10 0 0 0 4.773 1.216h.004c4.195 0 8.071-2.566 9.412-6.541 1.306-3.876.34-7.823-2.345-10.511m-2.179 10.626c-.208.583-1.227 1.145-1.685 1.186-.458.042-.887.207-2.995-.624-2.537-1-4.139-3.601-4.263-3.767-.125-.167-1.019-1.353-1.019-2.581s.645-1.832.874-2.081a.92.92 0 0 1 .666-.312c.166 0 .333 0 .478.006.178.007.375.016.562.431.222.494.707 1.728.769 1.853s.104.271.021.437-.125.27-.249.416c-.125.146-.262.325-.374.437-.125.124-.255.26-.11.509.146.25.646 1.067 1.388 1.728.954.85 1.757 1.113 2.007 1.239.25.125.395.104.541-.063s.624-.728.79-.978.333-.208.562-.125 1.456.687 1.705.812.416.187.478.291.062.603-.146 1.186" /></svg>
          </a>
          <button
            className="shimmer-button"
            onClick={() => {
              dialogRef.current.showModal();
              videoRef.current.play();
            }}
          >
            <div class="fancy" />
            <span class="text">Filmi İzle</span>
            <svg width="14" height="14" fill="#fff" viewBox="0 0 1024 1024"><path d="M213.333 189.227v645.546a42.667 42.667 0 0 0 66.006 35.712l493.397-322.773a42.667 42.667 0 0 0 0-71.424L279.339 153.515a42.667 42.667 0 0 0-66.006 35.712" /></svg>
          </button>
        </div>
      </div>
      <dialog 
        className="bg-dark"
        ref={dialogRef}
        onClose={() => {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          setIsPlaying(false);
          setVideoProgress(0);
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsControlsVisible(false)}
      >
        <div className="h-screen flex flex-col justify-center">
          <div className="relative">
        <video
          ref={videoRef}
          src="/film.mp4"
          poster="/poster.avif"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnd}
          onClick={() => {
            if (isPlaying) videoRef.current.pause()
            else videoRef.current.play()
            setIsPlaying(!isPlaying)
          }}
        />
        <div 
          className={`absolute bottom-4 left-4 right-4 flex items-center gap-4 text-white transition-opacity duration-300 ${
            isControlsVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={() => {
              if (isPlaying) {
                videoRef.current.pause()
              } else {
                videoRef.current.play()
              }
              setIsPlaying(!isPlaying)
            }}
            className="p-2 hover:bg-white/10 rounded-full"
          >
            {isPlaying 
              ? <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              : <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            }
          </button>
          <div 
            className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left
              const percentage = (x / rect.width) * 100
              const time = (percentage / 100) * videoRef.current.duration
              videoRef.current.currentTime = time
            }}
          >
            <div 
              className="h-full bg-white" 
              style={{ width: `${videoProgress}%` }}
            />
          </div>
        </div>
        <button
          className="absolute top-6 right-6 z-50 text-white tracking-wider font-medium flex gap-2 items-center drop-shadow-lg"
          onClick={() => dialogRef.current.close()}>
          <span>Kapat</span>
          <span className="text-sm flex items-center gap-1">[ <span className="text-xs">X</span> ]</span>
        </button>
          </div>
</div>
      </dialog>

    </header>
  )
}
