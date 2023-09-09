import { useState, useEffect } from 'react'

export default function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		const updateWindowWidth = () => setWindowWidth(window.innerWidth)
		window.addEventListener('resize', updateWindowWidth)
		updateWindowWidth()
		return () => window.removeEventListener('resize', updateWindowWidth)
	}, [])

	return windowWidth
}