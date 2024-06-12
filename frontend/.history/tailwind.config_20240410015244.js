/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#A6BFAA',
				primary: '#79B482',
				secondary: '#416847',
				dark: '#070807',
				accent: '#E4E7E4',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [daisyui],
}
