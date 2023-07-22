// @ts-nocheck
'use client'
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MouseMoveScroll, Swing } from "@/animations"
import { useWindowWidth } from "@/hooks"
import Link from "next/link"
import { getStudentWorks } from "@/sanity/sanity-utils"

export default function StudentWorks() {
	const windowWidth = useWindowWidth()
	const [thumbnails, setThumbnails] = useState([])
	const holder = useRef(null)
	const thumbnailList = []
	const getRandomBetween = (min, max) => Math.random() * (max - min) + min

	let slug, by, ig, img, aspectRatio, randomViewportWidth, viewportHeight, pixelWidth, pixelHeight,
		randomX, randomY, minimumDistanceX, minimumDistanceY, distanceX, distanceY, protect = 0

	const generateRandomSizeAndPosition = (aspectRatio) => {
		if (aspectRatio <= 1) randomViewportWidth = windowWidth > 768 ? getRandomBetween(15, 30) : getRandomBetween(40, 60)
		else randomViewportWidth = windowWidth > 768 ? getRandomBetween(30, 60) : getRandomBetween(60, 80)

		viewportHeight = randomViewportWidth / aspectRatio
		pixelWidth = (document.documentElement.clientWidth * randomViewportWidth) / 100
		pixelHeight = (document.documentElement.clientWidth * viewportHeight) / 100
		randomX = getRandomBetween(pixelWidth / 1.5, holder.current.offsetWidth - pixelWidth * 1.5)
		randomY = getRandomBetween(pixelHeight / 1.25, holder.current.offsetHeight - pixelHeight * 2)
	}

	const checkIfOverlap = () => {
		for (let i = 0; i < thumbnailList.length; i++) {
			const other = thumbnailList[i]
			if (other.pixelWidth > pixelWidth) {
				minimumDistanceX = other.pixelWidth
				minimumDistanceY = other.pixelHeight
			} else {
				minimumDistanceX = pixelWidth
				minimumDistanceY = pixelHeight
			}
			distanceX = Math.abs(other.randomX - randomX)
			distanceY = Math.abs(other.randomY - randomY)
			if (distanceX <= minimumDistanceX && distanceY <= minimumDistanceY) return false
		}
		thumbnailList.push({ slug, by, ig, img, randomViewportWidth, viewportHeight, randomX, randomY })
		return true
	}

	const generateThumbnail = (work) => {
		slug = work.slug
		by = work.student
		ig = work.instagram
		img = work.images[0].url
		aspectRatio = work.images[0].aspectRatio
		do {
			protect++
			generateRandomSizeAndPosition(aspectRatio)
			if (protect > 10000) return
		} while (!checkIfOverlap())
	}


	useEffect(() => {
		async function getData() {
			const studentWorks = await getStudentWorks()
			studentWorks.forEach(work => generateThumbnail(work))
			setThumbnails(thumbnailList)
			console.log("rendered item count:", thumbnailList.length)
		}
		getData()
	}, [])

	return (
		<MouseMoveScroll ref={holder}>
			{thumbnails.length &&
				<Swing>
					{thumbnails.map((item, i) =>
						<Link
							id="zort"
							key={i}
							href={`/student-works/${item.slug}`}
							data-size={item.randomViewportWidth}
							className="block relative mx-auto md:absolute hover:z-10 group"
							style={{
								width: `${item.randomViewportWidth}vw`,
								height: `${item.viewportHeight}vw`,
								left: `${item.randomX}px`,
								top: `${item.randomY}px`,
							}}
						>
							<span className="text-xs md:text-sm mt-[1px] workBy opacity-0 group-hover:opacity-100 transition-opacity absolute top-auto md:top-unset md:bottom-0 left-0 z-20 bg-white rounded-[3px] py-[3px] px-2">{item.by}</span>
							<Image
								className="rounded-[3px] w-full object-cover"
								src={item.img}
								width={windowWidth > 768 ? 500 : 300}
								height={windowWidth > 768 ? 500 : 300}
								alt=""
							/>
						</Link>
					)}
				</Swing>
			}
		</MouseMoveScroll>
	)
}
