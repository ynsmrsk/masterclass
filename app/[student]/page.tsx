import Link from 'next/link'
import { getStudentWork } from "@/sanity/sanity-utils"
import { Animation } from './animation'
import { ArrowLeftIcon, InstagramIcon } from '@/components/icons'
import Image from 'next/image'

export default async function StudentWork({ params }: { params: { student: string } }) {
	const slug = params.student
	const data = await getStudentWork(slug)

	return (
		<div>
			<div className="fixed left-2 top-4 lg:left-4 z-10 flex flex-col gap-2 items-start">
				<Link
					href="/#student-works"
					className="flex gap-1.5 items-center py-0.5 px-2 border border-dark rounded-full bg-light hover:bg-dark hover:text-light transition-colors"
				>
					<ArrowLeftIcon className="w-[18px] h-[18px]" />
					<span className="text-sm lg:text-base mt-[2.5px] uppercase">Öğrenci Çalışmaları</span>
				</Link>
				<a
					href={`https://www.instagram.com/${data.instagram}`}
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-1.5 items-center py-0.5 px-2 border border-dark rounded-full bg-light hover:bg-dark hover:text-light transition-colors"
				>
					<InstagramIcon className="w-5 h-5" />
					<span className="text-sm lg:text-base mt-[1px] uppercase">{data.student}</span>
				</a>
			</div>

			<Animation>
				{data.images.map(image =>
					<Image
						key={image.url}
						className="image absolute left-1/2 -translate-x-1/2 will-change-transform h-screen w-auto object-cover"
						src={image.url}
						alt=""
						width={1920}
						height={1080}
					/>
				)}
			</Animation>
		</div>
	)
}