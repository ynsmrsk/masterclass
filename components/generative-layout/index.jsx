import Desktop from './desktop'
import Mobile from './mobile'

export default function GenerativeLayout({ data }) {

	return (
		<>
			<div className='lg:hidden'>
				<Mobile data={data} />
			</div>
			<div className='hidden lg:block'>
				<Desktop data={data} />
			</div>
		</>
	)
}
