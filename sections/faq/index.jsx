import { getFaqs } from '@/sanity/sanity-utils'
import FaqList from './faqlist'

export default async function Faq() {
	const faqs = await getFaqs()

	return (
		<section className='pt-8 lg:pt-32 pb-10 lg:pb-32'>
			<div className="container">
				<h2 className='text-3xl lg:text-4xl font-medium mb-6 lg:mb-12 text-center'>Sıkça Sorulan Sorular</h2>
				<FaqList faqs={faqs} />
			</div>
		</section>
	)
}
