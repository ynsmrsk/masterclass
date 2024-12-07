import Image from "next/image"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-screen bg-dark text-light font-display flex flex-col items-center justify-center contain-layout contain-paint">
      <Image src="/logo.avif" width={1920} height={1080} alt="Immersive Images logo" />
    </footer>
  )
}