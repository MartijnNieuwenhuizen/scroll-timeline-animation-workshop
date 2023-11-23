import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	// add scss support
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./styles/base.scss";'
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
