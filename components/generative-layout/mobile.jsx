import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@/components/icons"

export default function Mobile({ data }) {
	return (
		<section className="p-2 flex flex-col gap-4">
			{data.map(item =>
				<div key={item.slug} className="flex flex-col gap-1">
					<Image
						className="rounded-sm w-full object-cover group-hover:brightness-75 transition"
						src={item.images[0].url}
						width={500}
						height={500}
						alt={`${item.student} çalışması`}
					/>
					<Link
						href={`/student-works/${item.slug}`}
						className="self-end flex gap-1 text-dark text-sm font-medium"
					>
						<span className="uppercase">{item.student}</span>
						<ArrowRightIcon className="w-[18px] h-[18px]" />
					</Link>
				</div>
			)}
		</section>
	)
}
