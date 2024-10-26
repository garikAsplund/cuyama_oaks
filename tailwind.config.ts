import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
        extend: {
            fontFamily: {
                'bona': ['Bona Nova SC', 'sans-serif'], // Add your custom font
            },
        },
    },

	plugins: []
} as Config;
