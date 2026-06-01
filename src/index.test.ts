import { describe, expect, it } from 'vitest'

const expected_package_files = ['.oxfmtrc.json', 'CHANGELOG.md']

describe('.oxfmtrc.json', () => {
	it('contains all expected keys', async () => {
		const config = await import('../.oxfmtrc.json', {
			with: { type: 'json' }
		})
		const cfg = config.default

		expect(cfg.useTabs).toBe(true)
		expect(cfg.singleQuote).toBe(true)
		expect(cfg.trailingComma).toBe('none')
		expect(cfg.semi).toBe(false)
		expect(cfg.printWidth).toBe(100)
		expect(cfg.sortImports).toBe(true)
		expect(cfg.sortTailwindcss).toBe(true)
		expect(cfg.sortPackageJson).toBe(true)
		expect(cfg.insertFinalNewline).toBe(false)
	})
})

describe('package metadata', () => {
	it('uses publish-ready package metadata', async () => {
		const pkg = await import('../package.json', {
			with: { type: 'json' }
		})

		expect(pkg.default.name).toBe('@bopstck/oxfmt-config')
		expect(pkg.default.license).toBe('MIT')
		expect(pkg.default.repository.url).toBe('git+https://github.com/bopstack/oxfmt-config.git')
		expect(pkg.default.packageManager).toBe('pnpm@11.3.0')
		expect(pkg.default.publishConfig.access).toBe('public')
		expect(pkg.default.files).toEqual(expected_package_files)
		expect('scripts' in pkg.default).toBe(false)
	})
})