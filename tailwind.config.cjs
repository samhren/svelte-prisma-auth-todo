/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#F6F5F2',
				'hover-white': '#DCDAD7',
				peach: '#EA9F72',
				'hover-peach': '#D0916A',
				orange: '#EF5026',
				'hover-orange': '#D54B25',
				gray: '#989A9C',
				'hover-gray': '#7D7F81',
				slate: '#343944',
				'hover-slate': '#282C34'
			}
		}
	},
	plugins: []
}
