install:
    pnpm install

build:
    @echo "No build step for config-only package"

format:
    pnpm exec oxfmt .

lint:
    pnpm exec oxlint .

typecheck:
    @echo "No typecheck for config-only package"

test:
    pnpm exec vitest run

check: format lint typecheck test

e2e:
    @echo "No e2e tests for this package"
