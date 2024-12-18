import { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import SmoothScroller from "@/components/lenis"
import ScrollTriggerRefresh from '@/components/scrolltrigger-refresh'

export const metadata: Metadata = {
	title: 'immersive.images çevrimiçi eğitim',
	description: 'Foto-gerçekçi mimari görselleştirme kursu - Autodesk 3dsmax & Corona Renderer',
	metadataBase: new URL('https://immersiveimages.co'),
	themeColor: '#111',
}

const fontDisplay = localFont({
	src: '../public/fonts/ClashDisplay-Variable.ttf',
	variable: '--font-display'
})

const fontBody = localFont({
	src: '../public/fonts/ClashGrotesk-Variable.ttf',
	variable: '--font-body'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="tr">
			<body className={`${fontBody.variable} ${fontDisplay.variable} font-body`}>
				<SmoothScroller />
				<ScrollTriggerRefresh />
				{children}
			</body>
		</html>
	)
}
