/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'flowkit-white': '#fff',
				cornflowerblue: {
					'100': '#77b1fb',
					'200': '#5aa2ff',
				},
				sub: '#f6f6f6',
				c9aff: '#4c9aff',
				gray: '#252525',
				'type-base': '#636363',
			},
			spacing: {},
			fontFamily: {
				pretendard: 'Pretendard',
			},
			borderRadius: {
				xl: '20px',
			},
		},
		fontSize: {
			base: '16px',
			xs: '12px',
			lg: '18px',
			inherit: 'inherit',
		},
	},
	corePlugins: {
		preflight: false,
	},
}

import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/presentation/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}
export default config
