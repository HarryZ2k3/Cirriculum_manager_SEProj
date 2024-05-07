/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: 'linear-gradient(180deg, #FFF 0%, #E4FCFF 100%, #737373 100.01%)',
				text_blue: '#146C94',
				text_gray: '#6B7174',
				text_dark: '#0E0E0E',
				header_light: '#CAF4FF',
				header_bold: '#CCEDFB',
				card: '#E1FAF9',
				_gray: '#6B7174',
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
