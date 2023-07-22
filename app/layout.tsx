import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Immersive Images',
	description: "Interior design alanında uzman eğitmen Selman Can'ın çevrimiçi eğitimi",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="tr">
			<body className={inter.className}>{children}</body>
		</html >
	)
}
