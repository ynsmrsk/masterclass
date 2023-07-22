/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./animations/**/*.{js,ts,jsx,tsx,mdx}',
		'./sections/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				'screen-500': '500px',
			},
			colors: {
				primary: {
					50: '#f8f5f1',
					100: '#f4efe9',
					200: '#dbd7d1',
					300: '#c3bfba',
					400: '#aaa7a3',
					500: '#928f8b',
					600: '#7a7774',
					700: '#615f5d',
					800: '#494745',
					900: '#302f2e',
					950: '#161616',
				},
				dark: '#161616',
				light: '#f4efe9',
			},
			fontSize: {
				'12xl': '12rem',
			},
			fontFamily: {
				body: ['var(--font-body)'],
				display: ['var(--font-display)'],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
				}
			},
			transitionDuration: {
				DEFAULT: '400ms',
			},
		},
	},
	plugins: [],

}
