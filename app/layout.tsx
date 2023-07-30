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

/* FIX: THIS WILL NOT WORK because of 'use client'
export const metadata = {
	title: 'Immersive Images',
	description: "Interior design alanında uzman eğitmen Selman Can'ın çevrimiçi eğitimi",
}
*/

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ScrollProvider>
			<html lang="tr">
				<body className={`${fontBody.variable} ${fontDisplay.variable} font-body`}>
					{children}
				</body>
			</html >
		</ScrollProvider>
	)
}
