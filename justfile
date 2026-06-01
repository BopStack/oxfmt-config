install:
    pnpm install

build:
    pnpm exec tsc --noEmit

format:
    pnpm exec oxfmt --config oxfmtrc.json .

lint:
    pnpm exec oxlint .

typecheck:
    pnpm exec tsc --noEmit

test:
    pnpm exec vitest run

check: format lint typecheck test

e2e:
    @echo "no e2e defined for @bopstack/oxfmt"
