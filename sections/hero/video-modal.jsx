'use client'
import { useEffect, useRef } from 'react'

export default function VideoModal({ isOpen, onClose }) {
  const dialogRef = useRef()

  useEffect(() => {
    isOpen
      ? dialogRef.current?.showModal()
      : dialogRef.current?.close()
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-dark/80 overflow-visible backdrop:backdrop-blur-2xl bg-transparent w-screen md:w-5/6 aspect-video [&[open]]:animate-fadein"
      onClick={(e) => { if (e.target === dialogRef.current) onClose() }}
    >
      <button
        onClick={onClose}
        className="absolute top-3 -right-12 text-light bg-light/10 rounded-lg p-1 hover:bg-light/20 transition-colors"
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
      <iframe
        className="w-full h-full rounded-2xl"
        src="https://www.youtube.com/embed/JkgXoLMWcjk?rel=0&controls=0&autoplay=1&modestbranding=1"
        title="immersive.images kurs tanıtım filmi"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ pointerEvents: 'all' }}
      />
    </dialog>
  )
}