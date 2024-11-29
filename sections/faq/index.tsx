import { getFaqs } from '@/sanity/sanity-utils'
import FaqList from './faq'

export default async function Faq() {
    const faqs = await getFaqs()

    return (
        <section className='pt-8 lg:pt-32 pb-10 lg:pb-32'>
            <div className="container">
                <h2 className='font-display text-xl lg:text-2xl font-medium mb-5 lg:mb-10 text-center'>Sıkça sorulan sorular</h2>
                <FaqList faqs={faqs} />
            </div>
        </section>
    )
}