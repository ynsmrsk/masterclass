import Image from 'next/image'

export default function Brands() {
    return (
        <section className='py-16 lg:pt-40'>
            <h2 className='text-3xl lg:text-4xl font-medium mb-6 lg:mb-12 text-center'>Kursiyerlerimizin Çalıştığı İşletmeler</h2>

            {[narrow, mid, wide, wider].map((strip, stripIndex) => (
                <div
                    key={stripIndex}
                    className="marquee"
                    style={{
                        "--num-items": strip.items.length * 2,
                        "--item-width": strip.itemWidth,
                        "--gap": "0px",
                        "--speed": strip.speed
                    }}
                >
                    <div className="marquee-track">
                        {[...strip.items, ...strip.items].map((brand, i) =>
                            <a
                                className="marquee-item outline-none lg:hover:bg-primary-200/25 rounded-xl p-5 lg:p-10 h-[160px] lg:min-h-[200px] 2xl:min-h-[240px]"
                                key={`${i}-${brand.name}`}
                                style={{ "--item-position": i + 1 }}
                                href={brand.link}
                                target="_blank"
                                rel="noreferrer"
                                tabIndex="-1"
                            >
                                <Image
                                    src={brand.path}
                                    alt={`${brand.name} logosu`}
                                    style={{
                                        objectFit: "cover",
                                        width: brand.width ? brand.width : "auto",
                                        maxHeight: "120px"
                                    }}
                                    width={300}
                                    height={120}
                                    priority
                                />
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </section>
    )
}

const narrow = {
    itemWidth: "clamp(150px, 20vw, 250px)",
    speed: "45s",
    items: [
        {
            path: '/brands/yet.avif',
            name: 'Yet',
            link: 'https://yetdesignstudio.com',
            width: 150
        },
        {
            path: '/brands/jeyanulku.avif',
            name: 'Jeyanulku',
            link: 'http://jumimarlik.com',
            width: 70
        },
        {
            path: '/brands/naif.avif',
            name: 'Naif',
            link: 'https://naifdesign.com',
            width: 95
        },
        {
            path: '/brands/esra-kazmirci.avif',
            name: 'Esra Kazmirci',
            link: 'https://esrakazmirci.com',
            width: 120
        },
        {
            path: '/brands/efs.avif',
            name: 'Efs',
            link: 'https://escapefromsofa.com'
        },
        {
            path: '/brands/toner.svg',
            name: 'Toner',
            link: 'https://tonermimarlik.com.tr',
            width: 110
        },
        {
            path: '/brands/beril-khalaf.avif',
            name: 'Beril Khalaf',
            link: 'https://berilkhalaf.com'
        },
        {
            path: '/brands/umadina.avif',
            name: 'Umadina',
            link: 'https://umadina.com'
        },
    ]
}

const mid = {
    itemWidth: "clamp(200px, 20vw, 300px)",
    speed: "42s",
    items: [
        {
            path: '/brands/noyan-berkman.avif',
            name: 'Noyan Berkman',
            link: 'https://noyanberkman.com',
        },
        {
            path: '/brands/faar.avif',
            name: 'Faar',
            link: 'https://faarconcept.com',
            width: 190
        },
        {
            path: '/brands/casa.avif',
            name: 'Casa',
            link: 'https://casa.com.tr',
            width: 210
        },
        {
            path: '/brands/gonye.avif',
            name: 'Gönye',
            link: 'https://gonyetasarim.com',
            width: 200
        },
        {
            path: '/brands/move.avif',
            name: 'Move',
            link: 'https://movemimarlik.com.tr',
            width: 170
        },
        {
            path: '/brands/mvoice.avif',
            name: 'Mvoice',
            link: 'https://mvoiceinterior.com',
            width: 200
        },
        {
            path: '/brands/usdesign.avif',
            name: 'Usdesign',
            link: 'https://usdesign.com',
            width: 200
        },
        {
            path: '/brands/dogtas.avif',
            name: 'Doğtaş',
            link: 'https://dogtas.com',
            width: 190
        },
    ]
}

const wide = {
    itemWidth: "clamp(250px, 30vw, 350px)",
    speed: "41s",
    items: [
        {
            path: '/brands/decoverse.avif',
            name: 'Decoverse',
            link: 'https://decoverse.com',
            width: 250
        },
        {
            path: '/brands/geoid.avif',
            name: 'Geoid',
            link: 'https://geo-id.com',
            width: 200
        },
        {
            path: '/brands/tunaofis.avif',
            name: 'Tunaofis',
            link: 'https://tunaofis.com',
        },
        {
            path: '/brands/studio86.avif',
            name: 'Studio86',
            link: 'https://www.studio86.com.tr',
            width: 200
        },
        {
            path: '/brands/bureau.avif',
            name: 'Bureau',
            link: 'https://bureau.co',
            width: 210
        },
        {
            path: '/brands/podna.avif',
            name: 'Podna',
            link: 'https://podnarch.com',
            width: 200
        },
        {
            path: '/brands/folistudio.avif',
            name: 'Folistudio',
            link: 'https://folistudio.com',
            width: 220
        },
        {
            path: '/brands/studiolugo.avif',
            name: 'Studiolugo',
            link: 'https://studiolugo.com',
        },
    ]
}

const wider = {
    itemWidth: "clamp(350px, 40vw, 480px)",
    speed: "55s",
    items: [
        {
            path: '/brands/yatas.avif',
            name: 'Yataş',
            link: 'https://yatasbedding.com.tr',
            width: 340
        },
        {
            path: '/brands/herm-haus.avif',
            name: 'Herm Haus',
            link: 'https://hermhaus.com',
            width: 310
        },
        {
            path: '/brands/pimodek.avif',
            name: 'Pimodek',
            link: 'https://pimodek.com',
            width: 430
        },
        {
            path: '/brands/studio13.avif',
            name: 'Studio13',
            link: 'https://studio13.com.tr',
            width: 380
        },
        {
            path: '/brands/urbanjobs.avif',
            name: 'Urbanjobs',
            link: 'https://urbanjobs.istanbul',
            width: 280
        },
        {
            path: '/brands/geostudio.avif',
            name: 'Geostudio',
            link: 'https://geostudio.istanbul',
            width: 330
        },
        {
            path: '/brands/bib.avif',
            name: 'Bib',
            link: 'http://bibarchitects.com',
            width: 350
        },
        {
            path: '/brands/barlas-parlak.avif',
            name: 'Barlas Parlak',
            link: 'https://barlasparlak.com',
            width: 430
        },
        {
            path: '/brands/arketipo-design.avif',
            name: 'Arketipo Design',
            link: 'https://arketipodesign.com.tr',
            width: 320
        },
        {
            path: '/brands/avci-architects.avif',
            name: 'Avci Architects',
            link: 'https://avciarchitects.com',
            width: 340
        },

    ]
}