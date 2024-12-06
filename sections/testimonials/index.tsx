import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Testimonial from './testimonial'
import { getTestimonials } from '@/sanity/sanity-utils'

export default async function Testimonials() {
    const testimonials = await getTestimonials()

    return (
        <section className='py-24'>
            <h2 className='text-3xl lg:text-4xl font-medium mb-6 lg:mb-12 text-center'>Öğrenci değerlendirmeleri</h2>
            <Carousel>
                {testimonials.map((testimonial, i) =>
                    <CarouselItem key={i} index={i}>
                        <Testimonial testimonial={testimonial} />
                    </CarouselItem>
                )}
            </Carousel>
        </section>
    )
}