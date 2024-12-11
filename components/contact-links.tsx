'use client'
import { useEffect, useRef } from 'react'
import { useScrollY } from '@/hooks/use-scroll-y'

export default function ContactLinks() {
	const lastScrollY = useRef(0)
	const isFirstRender = useRef(true)
	const scrollY = useScrollY()
	const isVisible = isFirstRender.current || scrollY < lastScrollY.current

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false
		}
		lastScrollY.current = scrollY
	}, [scrollY])

	return (
		<div
			className={`bg-dark rounded-full w-fit px-5 py-2 flex gap-5 items-center fixed z-50 bottom-4 left-1/2 -translate-x-1/2 transition-transform duration-300 
			${!isVisible ? 'translate-y-24' : ''}`}
		>
			{contactLinks.map(link =>
				<a
					key={link.name}
					href={link.href}
					target="_blank"
					rel="noreferrer"
					aria-label={`${link.name} adresini ziyaret et`}
					className="shrink-0 rounded-full"
				>
					<img src={link.icon} alt={link.name} className='size-6' />
				</a>
			)}
		</div>
	)
}

const contactLinks = [
	{
		name: 'linktree',
		href: 'https://linktr.ee/immersiveimages',
		icon: '/icons/linktree-logo.svg',
	},
	{
		name: 'whatsapp',
		href: 'https://wa.me/905378668977',
		icon: '/icons/whatsapp-logo.svg',
	},
	{
		name: 'instagram',
		href: 'https://www.instagram.com/zselmancan/',
		icon: '/icons/instagram-logo.svg',
	},
	{
		name: 'behance',
		href: 'https://www.behance.net/zahitselman',
		icon: '/icons/behance-logo.svg',
	},
	{
		name: 'e-mail',
		href: 'mailto:info@immersiveimages.co',
		icon: '/icons/envelope.svg',
	},
]