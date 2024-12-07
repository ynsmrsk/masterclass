'use client'
import { useState } from 'react'
import { Collapse } from 'react-collapse'

export default function FaqList({ faqs }) {
	const [isOpen, setIsOpen] = useState(false)

	function toggle(i) {
		if (isOpen === i) setIsOpen(null)
		setIsOpen(i)
	}

	return (
		faqs.map((faq, i) =>
			<div key={i} className='group'>
				<div onClick={() => toggle(i)} className="pt-7 md:pt-9 pb-6 md:pb-7 transition-all border-t border-primary-200 flex justify-between items-center gap-3 cursor-pointer">
					<p className="text-2xl md:text-3xl font-medium">{faq.question}</p>
					<svg className={`w-5 h-5 flex-shrink-0 transform transition-transform text-primary-600 ${i === isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d='M19 9l-7 7-7-7' />
					</svg>
				</div>
				<Collapse isOpened={i === isOpen}>
					<p className="max-w-4xl pb-7 md:pb-9 text-xl md:text-2xl text-primary-800">{faq.answer}</p>
				</Collapse>
			</div>
		)
	)
}
