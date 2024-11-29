'use client'
import { useState } from 'react'
import { Collapse } from 'react-collapse'

function AccordionItem({ isOpen, toggle, faq }) {
	return (
		<div className='group'>
			<div onClick={toggle} className="pt-5 md:pt-7 pb-4 md:pb-5 px-2 md:px-4 transition-all border-t border-primary-200 flex justify-between items-center gap-3 cursor-pointer">
				<p className="text-xl md:text-2xl font-medium">{faq.question}</p>
				<svg className={`w-5 h-5 flex-shrink-0 transform transition-transform text-primary-600 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d='M19 9l-7 7-7-7' />
				</svg>
			</div>
			<Collapse isOpened={isOpen}>
				<p className="max-w-4xl px-2 md:px-4 pb-5 md:pb-7 text-lg md:text-xl text-primary-800">{faq.answer}</p>
			</Collapse>
		</div>
	)
}

export default function FaqList({ faqs }) {
	const [isOpen, setIsOpen] = useState(false)

	function toggle(i) {
		if (isOpen === i) setIsOpen(null)
		setIsOpen(i)
	}

	return (
		faqs.map((faq, i) =>
			<AccordionItem
				key={i}
				isOpen={i === isOpen}
				faq={faq}
				toggle={() => toggle(i)}
			/>
		)
	)
}