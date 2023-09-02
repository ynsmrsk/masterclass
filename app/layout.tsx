'use client'
import './globals.css'
import localFont from 'next/font/local'
import ScrollProvider from '@/utils/scroll-provider'
import Head from 'next/head'

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
				<Head>
					<meta property="og:title" content="Immersive Images" />
					<meta property="og:description" content="Interior design alanında uzman eğitmen Selman Can'ın çevrimiçi eğitimi" />
					<meta property="og:image" content="/og-image.jpg" />
				</Head>
				<body className={`${fontBody.variable} ${fontDisplay.variable} font-body`}>
					{children}
				</body>
			</html >
		</ScrollProvider>
	)
}
