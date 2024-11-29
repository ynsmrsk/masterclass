'use client'
import { useEffect } from 'react'
import { RepeatTextScrollFx } from './repeatTextScrollFx'

export default function TextRepeat() {
	useEffect(() => {
		document.querySelectorAll('[data-text-rep]').forEach(textEl => {
			new RepeatTextScrollFx(textEl)
		})
	}, [])

	return (
		<section className='bg-black h-[100vh] grid place-items-center'>
			<h2 data-text-rep className="content__title">Selman</h2>
		</section>
	)
}