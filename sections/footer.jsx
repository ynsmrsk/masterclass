import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-light font-display h-screen flex flex-col items-center justify-center overflow-hidden fixed bottom-0 w-full">
      <Image src="/logo.avif" width={1920} height={1080} alt="Immersive Images logo" />
    </footer>
  )
}