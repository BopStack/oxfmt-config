install:
    pnpm install

format:
    pnpm exec oxfmt --config oxfmtrc.json --write .

lint:
    pnpm exec oxlint .

typecheck:
    pnpm exec tsc --noEmit

test:
    pnpm exec vitest run

check: format lint typecheck test
