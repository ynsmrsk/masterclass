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
        <section className='brands pt-36 pb-24 lg:pt-44 lg:pb-12 relative bg-light'>
            <h2 className='font-display tracking-wide text-xl lg:text-2xl font-medium mb-5 lg:mb-10 text-center'>Kursiyerlerimizin çalıştığı işletmeler</h2>
            <article className="wrapper">
                <div className="marquee">
                    <div className="marquee__group">
                        {brands.map(brand => <div className="image"><img loading="lazy" key={brand} src={brand} alt="" /></div>)}
                    </div>
                    <div aria-hidden="true" className="marquee__group">
                        {brands.map(brand => <div className="image"><img loading="lazy" key={brand} src={brand} alt="" /></div>)}
                    </div>
                </div>

                <div className="marquee marquee--reverse">
                    <div className="marquee__group">
                        {brands.map(brand => <div className="image"><img loading="lazy" key={brand} src={brand} alt="" /></div>)}
                    </div>
                    <div className="marquee__group">
                        {brands.map(brand => <div className="image"><img loading="lazy" key={brand} src={brand} alt="" /></div>)}
                    </div>
                </div>
            </article>
        </section>
    )
}

const brands = [
    '/brands/arketipo-design.avif',
    '/brands/barlas-parlak.avif',
    '/brands/casa.avif',
    '/brands/decoverse.avif',
    '/brands/dogtas.avif',
    '/brands/efs.avif',
    '/brands/esra-kazmirci.avif',
    '/brands/faar.avif',
    '/brands/gonye.avif',
    '/brands/mvoice.avif',
    '/brands/naif.avif',
    '/brands/studio13.avif',
    '/brands/toner.avif',
    '/brands/umadina.avif',
    '/brands/urbanjobs.avif',
    '/brands/yatas.avif',
    '/brands/yet.avif',
    '/brands/beril-khalaf.avif',
    '/brands/bib.avif',
    '/brands/geostudio.avif',
    '/brands/geoid.avif',
    '/brands/folistudio.avif',
    '/brands/podna.avif',
    '/brands/jeyanulku.avif',
]