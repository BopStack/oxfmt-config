install:
    pnpm install

build:
    pnpm exec tsc -p tsconfig.build.json

format:
    pnpm exec oxfmt --config oxfmtrc.json .

lint:
    pnpm exec oxlint .

typecheck:
    pnpm exec tsc --noEmit

vitest:
    pnpm exec vitest run

test: vitest e2e

e2e:
    pnpm exec vitest run

check: format lint typecheck vitest e2e

pack:
    pnpm pack --dry-run
