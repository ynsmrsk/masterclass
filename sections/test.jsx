'use client'
import { useEffect, useRef } from "react"
import { gsap } from 'gsap'
import Image from "next/image"

export default function Test() {
    const container = useRef(null)

    useEffect(() => {
        let speed = 50;
        let acceleration = 0.1;

        let clampMag = gsap.utils.clamp(0, 1);
        let mapMag = gsap.utils.mapRange(0.5, 1, 0, 1);

        let viewport = {};

        let pointer = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };

        let world = {
            element: document.querySelector(".world"),
            x: 0,
            y: 0,
            maxX: 0,
            maxY: 0
        };

        let setX = gsap.quickSetter(world.element, "x", "px");
        let setY = gsap.quickSetter(world.element, "y", "px");

        let clampX, clampY = () => { };

        window.addEventListener("wheel", onScroll);
        window.addEventListener("pointermove", onMove);
        window.addEventListener("resize", onResize);
        window.addEventListener("load", () => {
            onResize();
            gsap.ticker.add(update);
        });

        function onScroll(e) {
            world.y = clampY(world.y - e.deltaY);
            setY(world.y);
        }

        function onMove(e) {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        }

        function update() {
            let { x, y } = pointer;

            let outerX = x - viewport.cx;
            let outerY = y - viewport.cy;
            let dx = (outerX / viewport.width) * 2;
            let dy = (outerY / viewport.height) * 2;
            let angle = Math.atan2(dy, dx);
            let magnitude = Math.sqrt(dx * dx + dy * dy);
            magnitude = clampMag(mapMag(magnitude));

            let vx = Math.cos(angle - Math.PI) * magnitude * speed;
            let vy = Math.sin(angle - Math.PI) * magnitude * speed;

            const dt = 1.0 - Math.pow(1.0 - acceleration, gsap.ticker.deltaRatio());

            //world.x = clampX(world.x + vx * dt);
            world.y = clampY(world.y + vy * dt);

            setX(world.x);
            setY(world.y);
        }

        function onResize() {
            let vw = window.innerWidth;
            let vh = window.innerHeight;

            viewport.width = vw;
            viewport.height = vh;
            viewport.cx = vw / 2;
            viewport.cy = vh / 2;
            viewport.x = 0;
            viewport.y = 0;

            let bounds = world.element.getBoundingClientRect();

            world.maxX = vw - bounds.width;
            world.maxY = vh - bounds.height;

            clampX = gsap.utils.clamp(world.maxX, 0);
            clampY = gsap.utils.clamp(world.maxY, 0);

            // center the world
            world.x = (vw - bounds.width) / 2;
            setX(world.x);
        }
    }, [])

    return (
        <div className="w-screen h-screen overflow-hidden bg-red-500">
            <section ref={container} className="world w-[150vw] will-change-transform bg-blue-500">
                <img alt="" className="img w-[49.7%] inline-block" src="/course-content-bg/7.jpg" />
                <img alt="" className="img w-[49.7%] inline-block" src="/course-content-bg/7.jpg" />
                <img alt="" className="img w-[49.7%] inline-block" src="/course-content-bg/7.jpg" />
                <img alt="" className="img w-[49.7%] inline-block" src="/course-content-bg/7.jpg" />
                <img alt="" className="img w-[49.7%] inline-block" src="/course-content-bg/7.jpg" />
                <img alt="" className="img w-[49.7%] inline-block" src="/course-content-bg/7.jpg" />
                <img alt="" className="img w-[49.7%] inline-block" src="/course-content-bg/7.jpg" />
                <img alt="" className="img w-[49.7%] inline-block" src="/course-content-bg/7.jpg" />
                <img alt="" className="img w-[49.7%] inline-block" src="/course-content-bg/7.jpg" />
                <img alt="" className="img w-[49.7%] inline-block" src="/course-content-bg/7.jpg" />
            </section>
        </div>

    )
}