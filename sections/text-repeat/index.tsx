'use client'
import { useEffect } from 'react'
import { RepeatTextScrollFx } from './repeatTextScrollFx'

export default function TextRepeat() {
	useEffect(() => {
		document.querySelectorAll('[data-text-rep]').forEach(textEl => {
			// @ts-ignore
			new RepeatTextScrollFx(textEl)
		})
	}, [])

	return (
		<section className='px-2 md:px-16 bg-black h-[200vh] grid place-items-center'>
			<h2 data-text-rep className="content__title">
				Selman
			</h2>
		</section>
	)
}
