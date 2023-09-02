import Desktop from './desktop'
import Mobile from './mobile'
import useIsTouchDevice from '@/hooks/use-is-touch-device'

export default function GenerativeLayout({ data }) {
	const isTouchDevice = useIsTouchDevice()

	return (
		isTouchDevice
			? <Mobile data={data} />
			: <Desktop data={data} />
	)
}
