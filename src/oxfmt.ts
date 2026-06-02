/** Shared oxfmt formatting settings for Bopstack packages. */
export type OxfmtConfig = typeof oxfmt_config

export const oxfmt_config = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	semi: false,
	printWidth: 100,
	sortImports: true,
	sortTailwindcss: true,
	sortPackageJson: true,
	insertFinalNewline: false
} as const

export default oxfmt_config