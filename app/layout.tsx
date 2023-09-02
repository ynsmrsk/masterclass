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
					<meta property="og:description" content="Interior design alanında uzman eğitmen Selman Can'ın çevrimiçi eğitimi" />
					<meta property="og:image" content="https://fastly.picsum.photos/id/1074/200/200.jpg?hmac=o1fm0jR_nE4yW-N80QpSF9JfnnRYhRraqaTaTbCGe1c" />
				</head>
				<body className={`${fontBody.variable} ${fontDisplay.variable} font-body`}>
					{children}
				</body>
			</html >
		</ScrollProvider>
	)
}
