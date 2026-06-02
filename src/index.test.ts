import { describe, expect, it } from 'vitest'

import json_config from '../oxfmtrc.json' with { type: 'json' }
import oxfmt_config from './oxfmt.ts'

const expected_package_files = ['dist/', 'oxfmtrc.json', 'CHANGELOG.md']

describe('oxfmt_config (TS entry)', () => {
	it('exports all expected keys with correct values', () => {
		expect(oxfmt_config.useTabs).toBe(true)
		expect(oxfmt_config.singleQuote).toBe(true)
		expect(oxfmt_config.trailingComma).toBe('none')
		expect(oxfmt_config.semi).toBe(false)
		expect(oxfmt_config.printWidth).toBe(100)
		expect(oxfmt_config.sortImports).toBe(true)
		expect(oxfmt_config.sortTailwindcss).toBe(true)
		expect(oxfmt_config.sortPackageJson).toBe(true)
		expect(oxfmt_config.insertFinalNewline).toBe(false)
	})

	it('stays in sync with oxfmtrc.json', () => {
		expect(oxfmt_config).toEqual(json_config)
	})
})

describe('package metadata', () => {
	it('uses publish-ready package metadata', async () => {
		const pkg = await import('../package.json', {
			with: { type: 'json' }
		})

		expect(pkg.default.name).toBe('@bopstack/oxfmt-config')
		expect(pkg.default.license).toBe('MIT')
		expect(pkg.default.repository.url).toBe('git+https://github.com/bopstack/oxfmt-config.git')
		expect(pkg.default.packageManager).toBe('pnpm@11.3.0')
		expect(pkg.default.publishConfig.access).toBe('public')
		expect(pkg.default.files).toEqual(expected_package_files)
		expect(pkg.default.exports['.']).toBe('./dist/oxfmt.js')
		expect(pkg.default.main).toBe('./dist/oxfmt.js')
		expect(pkg.default.scripts.build).toBe('pnpm exec tsc -p tsconfig.build.json')
	})
})