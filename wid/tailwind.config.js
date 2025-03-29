/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind';

module.exports = {
	content: {
		files: [
			'./pages/**/*.{js,ts,jsx,tsx,mdx}',
			'./components/**/*.{js,ts,jsx,tsx,mdx}',
			'./app/**/*.{js,ts,jsx,tsx,mdx}',
			'./layout/**/*.{js,ts,jsx,tsx,mdx}',
			'./reusable components/**/*.{js,ts,jsx,tsx,mdx}',
		],
		extract, // ✅ Include extract function for fluid-tailwind
	},
	plugins: [fluid],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['var(--font-Poppins)'],
			},
		},
	},
};
