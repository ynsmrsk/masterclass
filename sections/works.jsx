'use client'
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"

gsap.registerPlugin(MotionPathPlugin)

export default function Works({ data }) {
    const holder = useRef(null)
    const [items, setItems] = useState([])
    const itemList = []

    function genItem(work) {
        let protect = 0

        function isOverlap(item, pxW, pxH) {
            for (let i = 0; i < itemList.length; i++) {
                const other = itemList[i]
                let minDistX, minDistY
                if (other.pxW > pxW) {
                    minDistX = other.pxW
                    minDistY = other.pxH
                } else {
                    minDistX = pxW
                    minDistY = pxH
                }
                const distX = Math.abs(other.randX - item.randX)
                const distY = Math.abs(other.randY - item.randY)
                if (distX <= minDistX && distY <= minDistY) return true
            }
            return false
        }

        do {
            protect++

            const slug = work.slug
            const student = work.student
            const image = work.images[0].url
            const aspectRatio = work.images[0].aspectRatio

            // generate random size and position
            const randVW = aspectRatio < 1.2
                ? gsap.utils.random(20, 25)
                : aspectRatio === 1
                    ? gsap.utils.random(15, 20)
                    : gsap.utils.random(30, 40)
            const randVH = randVW / aspectRatio
            const pxW = (document.documentElement.clientWidth * randVW) / 100
            const pxH = (document.documentElement.clientWidth * randVH) / 100
            const randX = gsap.utils.random(pxW / 1.5, holder.current.offsetWidth - pxW * 1.5)
            const randY = gsap.utils.random(pxH / 1.25, holder.current.offsetHeight - pxH * 2)

            const newItem = { slug, student, image, randVW, randVH, randX, randY }

            if (!isOverlap(newItem, pxW, pxH)) {
                itemList.push(newItem)
                break
            }

            if (protect > 10000) return

        } while (true)
    }

    useEffect(() => {
        data.forEach(item => genItem(item))
        setItems(itemList)
        console.log(itemList.length)

        // swing
        const elements = gsap.utils.toArray(holder.current.children)
        elements.forEach(el => {
            const size = 100 - el.dataset.size
            gsap.to(el, {
                motionPath: {
                    path: [
                        { x: -size / 1.5, y: 0 },
                        { x: -size / 1.5, y: -size / 2 },
                        { x: 0, y: -size / 2 },
                        { x: 0, y: 0 },
                    ],
                    curviness: 1,
                },
                duration: gsap.utils.random(el.dataset.size / 3, el.dataset.size / 2),
                delay: gsap.utils.random(0, 4),
                ease: "none",
                repeat: -1,
            })
        })

        // mouse-move
        let overflowX, mapPositionX, overflowY, mapPositionY, x, y

        function onResize() {
            overflowX = holder.current.offsetWidth - window.innerWidth
            overflowY = holder.current.offsetHeight - window.innerHeight
            mapPositionX = gsap.utils.mapRange(0, window.innerWidth, overflowX / 2, overflowX / -2)
            mapPositionY = gsap.utils.mapRange(0, window.innerHeight, overflowY / 2, overflowY / -2)
        }
        onResize()

        function onMouseMove(e) {
            if (overflowX > 0 || overflowY > 0) {
                x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0
                y = e.clientY || (e.changedTouches && e.changedTouches[0].clientY) || 0
                gsap.to(holder.current, {
                    duration: 7,
                    overwrite: true,
                    ease: "Power4.easeOut",
                    x: mapPositionX(x),
                    y: mapPositionY(y),
                })
            }
        }

        document.addEventListener("mousemove", onMouseMove)
        window.addEventListener("resize", onResize)

        return () => {
            document.removeEventListener("mousemove", onMouseMove)
            window.removeEventListener("resize", onResize)
        }
    }, [holder])

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-[#111]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div ref={holder} className="w-[400vw] h-[350vh] cursor-crosshair relative">
                    {items.length &&
                        items.map((item, i) =>
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
                                    {item.student}
                                </span>
                                <Image
                                    className="rounded w-full object-cover group-hover:brightness-75 transition"
                                    src={item.image}
                                    width={500}
                                    height={500}
                                    alt=""
                                />
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}