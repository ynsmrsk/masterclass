// @ts-nocheck
import { useState } from 'react'
import { Collapse } from 'react-collapse'

type Faq = {
	question: "string",
	answer: "string" | HTMLElement
}

function AccordionItem({ isOpen, toggle, faq }) {
	return (
		<div className='group'>
			<div onClick={toggle} className="pt-4 md:pt-6 pb-3 md:pb-4 px-2 md:px-4 transition-all border-t border-primary-200 flex justify-between items-center gap-3 cursor-pointer">
				<p className="text-xl md:text-2xl font-medium">{faq.question}</p>
				<svg className={`w-5 h-5 flex-shrink-0 transform transition-transform text-primary-600 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d='M19 9l-7 7-7-7' />
				</svg>
			</div>
			<Collapse isOpened={isOpen}>
				<div className="transition-all max-w-4xl px-2 md:px-4 pb-4 md:pb-6 text-lg md:text-xl text-primary-800">{faq.answer}</div>
			</Collapse>
		</div>
	)
}

export default function Faq() {
	const [isOpen, setIsOpen] = useState(false)

	function toggle(i) {
		if (isOpen === i)
			return setIsOpen(null)
		setIsOpen(i)
	}

	return (
		<section className='mb-10 lg:mb-32'>
			<div className="container">
				{faqs.map((faq, i) =>
					<AccordionItem
						key={i}
						isOpen={i === isOpen}
						faq={faq}
						toggle={() => toggle(i)}
					/>
				)}
			</div>
		</section>
	)
}

const faqs = [
	{
		question: "Bu kurs kimler için?",
		answer: (
			<div>
				<p className="mb-2">Kurs, temel bir eğitim aldıktan sonra işlerinin kalitesini arttırmak ve gelecekteki hatalarından kaçınarak en etkili çalışma yöntemlerini öğrenmek isteyenler ve V-ray Render motorundan Corona Render motoruna verimli bir şekilde geçmek isteyenler uygundur.</p>
				<p className='underline underline-offset-2'>Kurs, kesinlikle sıfırdan başlayan kişiler için uygun değildir.</p>
			</div>
		)
	},
	{
		question: "Dersler boyunca hangi yazılımlar kullanılacak?",
		answer: (
			<ul className='list-inside list-disc'>
				<li>Autodesk 3dsmax (tercihen 2020 ve üzeri versiyon)</li>
				<li>Chaos Corona (tercihen 8 ve üzeri versiyon)</li>
				<li>Adobe Photoshop (Nik Collection ile)</li>
			</ul>
		)
	},
	{
		question: "Ders yöntemi nedir?",
		answer: "Kurs ZOOM programı üzerinden sınıflar halinde yapılacaktır. Ders kayıtları tarafınıza gönderilecektir."
	},
	{
		question: "Kayıtlı ders videolarına ne kadar süre boyunca erişebilirim?",
		answer: "Herhangi bir endişe duymadan kendi hızınızda öğrenebilmeniz için ömür boyu erişim elde edeceksiniz."
	},
	{
		question: "Dersler boyunca gerekli olan 3d model, kaplama vs. kursa dahil mi ?",
		answer: "Kesinlikle. İhtiyacınız olan tüm malzeme size gönderilecektir."
	},
]
