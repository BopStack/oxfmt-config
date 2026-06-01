import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		outputFile: 'tmp/test-results.json',
		include: ['src/**/*.test.ts']
	}
})