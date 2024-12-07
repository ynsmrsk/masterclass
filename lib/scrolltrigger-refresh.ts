'use client'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function ScrollTriggerRefresh() {
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      ScrollTrigger.refresh()
    })

    observer.observe(document.body)
    return () => observer.disconnect()
  }, [])

  return null
}