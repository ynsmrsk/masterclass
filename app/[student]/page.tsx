import Link from 'next/link'
import { getStudentWork } from "@/sanity/sanity-utils"
import { Animation } from './animation'
import Image from 'next/image'

export default async function StudentWork({ params }: { params: { student: string } }) {
	const slug = params.student
	const data = await getStudentWork(slug)

	return (
		<main className='bg-light'>
			<Link
				href="/student-works"
				className="fixed top-4 left-4 p-4 z-10 uppercase flex gap-1.5 items-center py-2 px-3 text-sm font-medium leading-none border-[1.3px] border-dark rounded-full bg-light hover:bg-dark hover:text-light transition-colors"
			>
				Öğrenci Çalışmaları
			</Link>
			<a
				href={`https://www.instagram.com/${data.instagram}`}
				target="_blank"
				rel="noreferrer"
				className="fixed bottom-4 right-4 z-10 uppercase flex gap-1 items-center py-0.5 px-1 mix-blend-difference text-light"
			>
				<Image className='' src="/icons/instagram-logo.svg" width={20} height={20} alt='instagram logo' />
				<span className="mt-[1.5px]">{data.student}</span>
			</a>

			<Animation>
				{data.images.map(image =>
					<Image
						key={image.url}
						className="image bg-light h-screen w-auto absolute left-1/2 -translate-x-1/2 will-change-transform object-contain"
						src={image.url}
						width={1920}
						height={1080}
						alt=""
					/>
				)}
			</Animation>
		</main>
	)
}