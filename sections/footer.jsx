'use client'
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 h-screen bg-[#111] text-light flex flex-col justify-center">
      <Image
        className="pl-4 pr-6 lg:pr-10 pt-[60vh] lg:pt-[30vh]"
        src="/logo.avif"
        width={1920}
        height={1080}
        alt="Immersive Images logo"
        priority
      />
      <section className="flex items-center justify-between mt-16 px-[5vw]">
        <small className="flex gap-1 font-medium tracking-wide font-display text-primary-300">
          MADE BY
          <a href="https://emres.site" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:no-underline">YUNUS EMRE IŞIK</a>
        </small>
        <button
          onClick={() => window.scrollTo({ top: 0 })}
          className="hover:text-light transition-colors text-sm font-medium text-primary-500 cursor-pointer"
        >
          ( YUKARI GİT )
        </button>
      </section>
    </footer>
  )
}