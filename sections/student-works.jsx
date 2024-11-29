'use client'
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"
import useWindowWidth from '@/hooks/use-window-width'

gsap.registerPlugin(MotionPathPlugin)

export default function Works({ data, isPage }) {
    const holder = useRef(null)
    const [items, setItems] = useState([])
    const itemList = []
    const windowWidth = useWindowWidth()

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
            const image = work.image.url
            const aspectRatio = work.image.aspectRatio

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
            const randY = gsap.utils.random(pxH * 1.25, holder.current.offsetHeight - pxH * 2)

            const newItem = {
                slug,
                student,
                image,
                randVW,
                randVH,
                randX,
                randY
            }

            if (!isOverlap(newItem, pxW, pxH)) {
                itemList.push(newItem)
                break
            }

            if (protect > 10000) return
        } while (true)
    }

    useGSAP(() => {
        data.forEach(item => genItem(item))
        setItems(itemList)
        console.log(itemList.length)

        // swing
        gsap.utils.toArray(holder.current.children).forEach(el => {
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
                delay: gsap.utils.random(0, 2),
                ease: "none",
                repeat: -1,
            })

            gsap.from(el, {
                autoAlpha: 0,
                duration: 1,
                delay: gsap.utils.random(0.3, 1.5),
            })
        })

        // mouse-move
        let overflowX, mapPositionX, overflowY, mapPositionY, x, y
        function onResize() {
            overflowX = holder.current.offsetWidth - window.innerWidth
            overflowY = holder.current.offsetHeight - window.innerHeight
            const section = holder.current.closest('section')
            mapPositionX = gsap.utils.mapRange(0, section.offsetWidth, overflowX / 2, overflowX / -2)
            mapPositionY = gsap.utils.mapRange(0, section.offsetHeight, overflowY / 2, overflowY / -2)
        }
        onResize()

        function centerView() {
            gsap.to(holder.current, {
                duration: 5,
                overwrite: true,
                ease: "Power4.easeOut",
                x: 0,
                y: 0,
            })
        }

        function onMouseMove(e) {
            const section = holder.current.closest('section')
            const rect = section.getBoundingClientRect()
            const isInside = e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom

            if (!isInside) {
                centerView()
                return
            }

            if (overflowX > 0 || overflowY > 0) {
                // Calculate relative position within the section
                const relativeX = e.clientX - rect.left
                const relativeY = e.clientY - rect.top

                gsap.to(holder.current, {
                    duration: 5,
                    overwrite: true,
                    ease: "Power4.easeOut",
                    x: mapPositionX(relativeX),
                    y: mapPositionY(relativeY),
                })
            }
        }

        if (windowWidth > 1024) {
            document.addEventListener("mousemove", onMouseMove)
            // Initial center
            centerView()
        }
        window.addEventListener("resize", onResize)

        return () => {
            document.removeEventListener("mousemove", onMouseMove)
            window.removeEventListener("resize", onResize)
        }
    }, {
        scope: holder,
        dependencies: [windowWidth],
        revertOnUpdate: true
    })

    return (
        <section>
            {isPage &&
                <Link
                    href="/"
                    className="flex gap-1.5 absolute top-4 left-4 z-50 items-center py-0.5 px-4 border-[1.6px] font-medium border-light rounded-full text-light"
                >
                    <span className="text-sm lg:text-base">immersive.images</span>
                </Link>
            }
            <div id="student-works" className="relative w-screen h-[360vh] z-50 lg:h-screen overflow-hidden">
                <div className="absolute overflow-x-hidden h-full lg:h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div ref={holder} className="w-screen lg:w-[360vw] h-[360vh] cursor-crosshair relative bg-black">
                        {items.length &&
                            items.map(item =>
                                <Link
                                    href={`/${item.slug}`}
                                    key={item.slug}
                                    data-size={item.randVW}
                                    className="image absolute hover:z-10 group"
                                    style={{
                                        width: `${item.randVW}vw`,
                                        height: `${item.randVH}vw`,
                                        left: `${item.randX}px`,
                                        top: `${item.randY}px`,
                                    }}
                                >
                                    <span className="text-white text-center whitespace-nowrap lg:text-xl tracking-wider font-display uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                                        {item.student}
                                    </span>
                                    <Image
                                        className="w-full h-auto object-cover group-hover:brightness-50 transition"
                                        src={item.image}
                                        width={400}
                                        height={400}
                                        alt=""
                                    />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}