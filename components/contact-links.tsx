'use client'
import {
	WhatsappIcon,
	InstagramIcon,
	BehanceIcon,
	EnvelopeIcon,
	LinktreeIcon
} from "@/components/icons"

export default function ContactLinks() {
	return (
		<div className="bg-dark rounded-md flex items-center fixed z-50 bottom-3 md:bottom-7 left-1/2 -translate-x-1/2 md:left-5 md:translate-x-0">
			{contactLinks.map(link =>
				<a
					key={link.name}
					href={link.href}
					target="_blank"
					rel="noreferrer"
					aria-label={`${link.name} adresini ziyaret et`}
					className="group py-2 px-5 md:px-4 hover:bg-light transition"
				>
					{link.icon}
				</a>
			)}
		</div>
	)
}

const iconStyle = 'fill-light group-hover:fill-dark transition'
const contactLinks = [
	{
		name: 'linktree',
		href: 'https://linktr.ee/immersiveimages',
		icon: <LinktreeIcon className={iconStyle} />
	},
	{
		name: 'whatsapp',
		href: 'https://wa.me/905378668977',
		icon: <WhatsappIcon className={iconStyle} />
	},
	{
		name: 'instagram',
		href: 'https://www.instagram.com/zselmancan/',
		icon: <InstagramIcon className={iconStyle} />
	},
	{
		name: 'behance',
		href: 'https://www.behance.net/zahitselman',
		icon: <BehanceIcon className={iconStyle} />
	},
	{
		name: 'e-mail',
		href: 'mailto:info@immersiveimages.co',
		icon: <EnvelopeIcon className={iconStyle} />
	},
]
