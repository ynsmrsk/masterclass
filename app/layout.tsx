'use client'
import './globals.css'
import localFont from 'next/font/local'
import ScrollProvider from '@/utils/scroll-provider'

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
		<ScrollProvider>
			<html lang="tr">
				<head>
					<meta property="og:title" content="Immersive Images" />
					<meta property="og:description" content="Mimari görselleştirme alanında uzman eğitmen Selman Can'ın çevrimiçi eğitimi" />
					<meta property="og:image" content="https://immersiveimages.co/og-image.jpg" />
					<meta property="twitter:image" content="https://immersiveimages.co/og-image.jpg" />
				</head>
				<body className={`${fontBody.variable} ${fontDisplay.variable} font-body`}>
					{children}
				</body>
			</html >
		</ScrollProvider>
	)
}
