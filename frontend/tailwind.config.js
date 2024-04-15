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
			
			//subject color
				subjectBackground: '#FFFFCC',
				tableTextColor: '#000000',
				tableTitleBorder: '#000000',
				tableBorderColor: '#dddddd',
				subjectHover:'#FFE5CC',
				subjectTextHover:'#FFB266',
				titleText: 'blue',
				//tableTitleBack: ''
			// Optionally customize other theme values such as fonts, spacing, etc.
				background_top:'#FFFFFF',
				background_mid: '#FEFEFE',
				background_bottom:'#E1FBFF',
				text_blue: '#146C94',
				text_gray: '#6B7174',
				text_dark: '#0E0E0E',
				header_light: '#CAF4FF',
				header_bold: '#CCEDFB',
				card_home: '#F7FAF9',
				card_gray: '#6B7174',
				card_subcard: '#EAECEB',
				card_blue: '#E1FAF9',
				white: '#FEFEFE',
				black: '#0E0E0E',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [daisyui],
}
