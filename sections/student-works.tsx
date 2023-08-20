// @ts-nocheck
'use client'
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import MouseMoveScroll from "@/animations/mouse-move-scroll"
import Swing from '@/animations/swing'
import { getStudentWorks } from "@/sanity/sanity-utils"

export default function StudentWorks() {
	const [items, setItems] = useState([])
	const holder = useRef(null)
	const itemList = []
	const randBetween = (min, max) => Math.random() * (max - min) + min

	let slug, by, ig, img, aspectRatio, randVW, randVH, pxW, pxH,
		randX, randY, minDistX, minDistY, distX, distY, protect = 0

	function genRandSizePos(aspectRatio) {
		aspectRatio <= 1 ? randVW = randBetween(15, 30) : randVW = randBetween(30, 60)
		randVH = randVW / aspectRatio
		pxW = (document.documentElement.clientWidth * randVW) / 100
		pxH = (document.documentElement.clientWidth * randVH) / 100
		randX = randBetween(pxW / 1.5, holder.current.offsetWidth - pxW * 1.5)
		randY = randBetween(pxH / 1.25, holder.current.offsetHeight - pxH * 2)
	}

	function isOverlap() {
		for (let i = 0; i < itemList.length; i++) {
			const other = itemList[i]
			if (other.pxW > pxW) {
				minDistX = other.pxW
				minDistY = other.pxH
			} else {
				minDistX = pxW
				minDistY = pxH
			}
			distX = Math.abs(other.randX - randX)
			distY = Math.abs(other.randY - randY)
			if (distX <= minDistX && distY <= minDistY) return false
		}
		itemList.push({ slug, by, ig, img, randVW, randVH, randX, randY })
		return true
	}

	function genItem(work) {
		slug = work.slug
		by = work.student
		ig = work.instagram
		img = work.images[0].url
		aspectRatio = work.images[0].aspectRatio
		do {
			protect++
			genRandSizePos(aspectRatio)
			if (protect > 10000) return
		} while (!isOverlap())
	}

	useEffect(() => {
		async function getData() {
			const studentWorks = await getStudentWorks()
			studentWorks.forEach(work => genItem(work))
			setItems(itemList)
			console.log("rendered item count:", itemList.length)
		}
		getData()
	}, [])

	return (
		<MouseMoveScroll ref={holder}>
			{items.length &&
				<Swing>
					{items.map((item, i) =>
						<Link
							key={i}
							href={`/student-works/${item.slug}`}
							data-size={item.randVW}
							className="absolute hover:z-10 group"
							style={{
								width: `${item.randVW}vw`,
								height: `${item.randVH}vw`,
								left: `${item.randX}px`,
								top: `${item.randY}px`,
							}}
						>
							<span className="text-white text-center text-xl font-display uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
								{item.by}
							</span>
							<Image
								className="rounded w-full object-cover group-hover:brightness-75 transition"
								src={item.img}
								width={500}
								height={500}
								alt=""
							/>
						</Link>
					)}
				</Swing>
			}
		</MouseMoveScroll>
	)
}
