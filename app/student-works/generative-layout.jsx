'use client'
import { useRef } from "react"
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"
import Image from "next/image"

gsap.registerPlugin(MotionPathPlugin)

export default function GenerativeLayout({ data }) {
    const container = useRef()

    useGSAP(() => {
        let speed = 50
        let acceleration = 0.1

        let clampMag = gsap.utils.clamp(0, 1)
        let mapMag = gsap.utils.mapRange(0.5, 1, 0, 1)

        let viewport = {}

        let pointer = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }

        let world = {
            element: document.querySelector("#world"),
            x: 0,
            y: 0,
            maxX: 0,
            maxY: 0
        }

        let setX = gsap.quickSetter(world.element, "x", "px")
        let setY = gsap.quickSetter(world.element, "y", "px")

        let clampY = () => { }

        function updateParallax() {
            document.querySelectorAll("img").forEach(img => {
                let imgSpeed = parseFloat(img.getAttribute("data-speed"))
                let parallaxX = ((pointer.x - viewport.cx) / viewport.width) * imgSpeed
                let parallaxY = ((pointer.y - viewport.cy) / viewport.height) * imgSpeed

                let imgX = world.x - parallaxX * 200
                let imgY = world.y - parallaxY * 200

                gsap.to(img, {
                    x: imgX,
                    y: imgY,
                    duration: imgSpeed,
                    ease: "power4.out"
                })
            })
        }

        function onScroll(e) {
            world.y = clampY(world.y - e.deltaY)
            setY(world.y)

            updateParallax()
        }

        function onMove(e) {
            pointer.x = e.clientX
            pointer.y = e.clientY
        }

        function update() {
            let { x, y } = pointer
            let outerX = x - viewport.cx
            let outerY = y - viewport.cy
            let dx = (outerX / viewport.width) * 2
            let dy = (outerY / viewport.height) * 2
            let angle = Math.atan2(dy, dx)
            let magnitude = Math.sqrt(dx * dx + dy * dy)
            magnitude = clampMag(mapMag(magnitude))
            let vy = Math.sin(angle - Math.PI) * magnitude * speed
            const dt = 1.0 - Math.pow(1.0 - acceleration, gsap.ticker.deltaRatio())
            world.y = clampY(world.y + vy * dt)
            setY(world.y)

            updateParallax()
        }

        function onResize() {
            let vw = window.innerWidth
            let vh = window.innerHeight

            viewport.width = vw
            viewport.height = vh
            viewport.cx = vw / 2
            viewport.cy = vh / 2
            viewport.x = 0
            viewport.y = 0

            let bounds = world.element.getBoundingClientRect()

            world.maxX = vw - bounds.width
            world.maxY = vh - bounds.height

            clampY = gsap.utils.clamp(world.maxY * 0.5, 0)

            // center
            world.x = (vw - bounds.width) / 2
            setX(world.x)
        }

        // swing
        document.querySelectorAll(".el").forEach(el => {
            const size = 100
            gsap.to(el, {
                motionPath: {
                    path: [
                        { x: -size / 1.5, y: 0 },
                        { x: -size / 1.5, y: -size / 2 },
                        { x: 0, y: -size / 2 },
                        { x: 0, y: 0 }
                    ],
                    curviness: 1
                },
                duration: gsap.utils.random(6, 12),
                delay: gsap.utils.random(0, 4),
                ease: "none",
                repeat: -1
            })
        })

        window.addEventListener("wheel", onScroll)
        window.addEventListener("pointermove", onMove)
        window.addEventListener("resize", onResize)
        onResize()
        gsap.ticker.add(update)
    }, { scope: container })

    return (
        <div className="h-screen overflow-hidden">
            <ul id="world" ref={container} className="w-[100vw] bg-black will-change-transform grid grid-cols-2 gap-2">
                {data.map(work =>
                    <li className="el" key={work._id}>
                        <Image
                            priority
                            data-speed={gsap.utils.random(1, 3)}
                            className="w-full will-change-transform"
                            src={work.image.url}
                            width={400}
                            height={400}
                            alt={work.student + 'çalışması'}
                        />
                    </li>
                )}
            </ul>
        </div>
    )
}