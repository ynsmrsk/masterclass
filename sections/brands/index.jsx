'use client'

import useWindowWidth from '@/hooks/use-window-width'
import { useEffect } from 'react'
import './style.css'

export default function Brands() {
    const windowWidth = useWindowWidth()

    useEffect(() => {
        const marquees = document.querySelectorAll(".marquee")
        const wrapper = document.querySelector(".wrapper")

        if (windowWidth < 768) {
            wrapper.classList.add("wrapper--vertical");
            [...marquees].forEach((marquee) =>
                marquee.classList.add("marquee--vertical")
            )
        } else {
            wrapper.classList.remove("wrapper--vertical");
            [...marquees].forEach((marquee) =>
                marquee.classList.remove("marquee--vertical")
            )
        }
    }, [windowWidth])

    return (
        <section className='brands py-24 lg:py-48'>
            <h2 className='font-display tracking-wide text-xl lg:text-2xl font-medium mb-5 lg:mb-10 text-center'>
                Kursiyerlerimizin çalıştığı işletmeler
            </h2>
            <article className="wrapper">
                <div className="marquee">
                    <div className="marquee__group">
                        {brands.map((brand, index) => (
                            <img key={index} src={brand} alt="" />
                        ))}
                    </div>

                    <div aria-hidden="true" className="marquee__group">
                        {brands.map((brand, index) => (
                            <img key={index} src={brand} alt="" />
                        ))}
                    </div>
                </div>

                <div className="marquee marquee--reverse">
                    <div className="marquee__group">
                        {brands.map((brand, index) => (
                            <img key={index} src={brand} alt="" />
                        ))}
                    </div>

                    <div className="marquee__group">
                        {brands.map((brand, index) => (
                            <img key={index} src={brand} alt="" />
                        ))}
                    </div>
                </div>
            </article>
        </section>
    )
}

const brands = [
    '/brands/arketipo-design.svg',
    '/brands/barlas-parlak.svg',
    '/brands/casa.svg',
    '/brands/decoverse.svg',
    '/brands/dogtas.svg',
    '/brands/efs.svg',
    '/brands/esra-kazmirci.svg',
    '/brands/faar.svg',
    '/brands/gonye.svg',
    '/brands/mvoice.svg',
    '/brands/naif.svg',
    '/brands/studio13.svg',
    '/brands/toner.svg',
    '/brands/umadina.svg',
    '/brands/urbanjobs.svg',
    '/brands/yatas.svg',
    '/brands/yet.svg',
]