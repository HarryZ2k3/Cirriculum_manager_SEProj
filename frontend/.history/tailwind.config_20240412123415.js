/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background_top:'#FFFFFF',
				background_bottom:'#E4FCFF',
				background: linear-gradient(180deg, #FFF 0%, #FEFEFE 65.9%, #E1FBFF 100%);
				text_blue: '#146C94',
				text_gray: '#6B7174',
				text_dark: '#0E0E0E',
				header_light: '#CAF4FF',
				header_bold: '#CCEDFB',
				card_announ: '#F7FAF9',
				card_gray: '#6B7174',

				white: '#FEFEFE',
				black: '#0E0E0E'
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [daisyui],
}
