/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		// "./**/*.{html, jsx, js}",
		"./saas/CelestialSaaS/**/*.{html,jsx, js}",
		"./saas/CelestialSaaS/**/*.js",
		"./saas/CelestialSaaS/**/*.html",
	
		// "*.{html,jsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#4f55c1"
			}
		},
	},
	plugins: [],
}

