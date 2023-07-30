import { useState, useEffect } from 'react'

export default function useIsTouchDevice() {
    const [isTouchDevice, setIsTouchDevice] = useState(false)

    useEffect(() => {
        function handleTouchStart() {
            setIsTouchDevice(true)
            window.removeEventListener('touchstart', handleTouchStart)
        }
        window.addEventListener('touchstart', handleTouchStart)
        return () => window.removeEventListener('touchstart', handleTouchStart)
    }, [])

    return isTouchDevice
}