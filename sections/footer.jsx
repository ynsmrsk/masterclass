import Image from "next/image"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 h-screen bg-[#111] text-light font-display flex flex-col items-center justify-center">
      <Image
        className="pl-4 pr-6 lg:pr-10 pt-[50vh] lg:pt-[25vh]"
        src="/logo.avif"
        width={1920}
        height={1080}
        alt="Immersive Images logo"
        priority
      />
    </footer>
  )
}