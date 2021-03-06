module.exports = {
	content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
	theme: {
		extend: {
			keyframes: {
				'pan-in-from-left': {
					'0%': {
						transform: 'translateX(-100%)',
					},
					'100%': {
						transform: 'translateY(0%)',
					},
				},
			},
			animation: {
				'pan-in-from-left': 'pan-in-from-left ease-out 2s',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
