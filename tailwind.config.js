/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./src/others/**/*.{html,jsx, js}",
		"./src/others/**/*.js",
		"./src/others/**/*.html",
	
		// "*.{html,jsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#00006f",
				secondary: "#dc2626"
			}
		},
	},
	plugins: [],
}

