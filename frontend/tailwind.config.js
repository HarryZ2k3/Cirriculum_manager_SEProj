/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			// Customizing colors
			colors: {
        background: '#A6BFAA',
				primary: '#79B482', 
				secondary: '#416847',
        dark: '#070807',
				accent: '#E4E7E4', 
				
			},
			// Optionally customize other theme values such as fonts, spacing, etc.
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			spacing: {
				128: '32rem', // Example custom spacing
				144: '36rem', // Example custom spacing
			},
			// Add more customizations as needed
		},
	},
	plugins: ['flowbite/plugin'],
}
