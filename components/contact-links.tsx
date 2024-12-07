'use client'
import {
	WhatsappIcon,
	InstagramIcon,
	BehanceIcon,
	EnvelopeIcon,
	// LinktreeIcon
} from "@/components/icons"

export default function ContactLinks() {
	return (
		<div className="bg-dark rounded-md flex items-center fixed z-50 bottom-3 md:bottom-7 left-2 md:left-5">
			{contactLinks.map(link =>
				<a
					key={link.name}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className="group rounded-md py-2 px-3 hover:bg-light transition"
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
		name: 'whatsapp',
		href: 'https://wa.me/p/8971866599494004/905458771883',
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
