module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'black-0.4': 'rgba(0, 0, 0, 0.4)',
				'blue-500-0.8': 'rgba(59, 130, 246, 0.8)',
				'blue-500-0.9': 'rgba(59, 130, 246, 0.9)',
				'white-0.7': 'rgba(255, 255, 255, 0.7)',
				'white-0.9': 'rgba(255, 255, 255, 0.9)'
			},
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px'
			}
		},
	},
	plugins: [],
}