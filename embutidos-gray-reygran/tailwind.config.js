/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			white: '#fff',
			black: '#000',
			red: '#D50000',
			gray: '#9F9F9E',
			'red-light': '#D93737',
			'red-dark': '#A10010',
			'yellow-dark': '#D29308',
			'gray-dark': '#1E1E1E',
			'gray-light': '#C5C0C0',
		},
	},
	plugins: [],
};
