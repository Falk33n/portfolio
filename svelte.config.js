import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		alias: {
			$src: './src',
			$lib: './src/lib',
			$components: './src/lib/components',
			$utils: './src/lib/utils',
			$hooks: './src/lib/hooks',
			$constants: './src/lib/constants',
		},
		adapter: adapter(),
	},
};
export default config;
