// @ts-nocheck
'use client'
import { useEffect } from "react"
import Image from "next/image"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ArrowLeftIcon, InstagramIcon } from "@/components/icons"
import { getStudentWork } from "@/sanity/sanity-utils"
import Link from "next/link"

async function RenderStudentWork({ params }: { params: { student: string } }) {
    const slug = params.student
    const data = await getStudentWork(slug)

    return (
        <div>
            <div className="fixed left-2 top-4 lg:left-4 z-10 flex flex-col gap-2 items-start">
                <Link
                    href="/student-works"
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

            <div id="container" className="w-screen h-screen absolute top-0 left-0 overflow-hidden">
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
            </div>

            <svg className="arrow-down-svg animate-[bounce_2s_ease-out_infinite] py-3 border border-dark fixed z-10 left-2 lg:left-8 bottom-4 lg:bottom-8 h-14 bg-light/40 text-dark backdrop-blur-sm rounded-3xl" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
            </svg>
        </div>
    )
}

export default function StudentWork({ params }: { params: { student: string } }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".image:not(:last-child)", {
            yPercent: -100,
            ease: "none",
            stagger: 0.5,
            scrollTrigger: {
                trigger: "#container",
                start: "top top",
                end: "+=300%",
                scrub: 1.5,
                pin: true,
            },
            onStart: () => gsap.to('.arrow-down-svg', { opacity: 0, duration: 0.5, delay: 4 }),
        })

        gsap.set(".image", { zIndex: (i, _target, targets) => targets.length - i })
    }, [])

    return <RenderStudentWork params={params} />
}