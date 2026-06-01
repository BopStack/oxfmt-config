# @bopstack/oxfmt

Shared [oxfmt](https://oxc.rs/docs/formatter.html) configuration for Bopstack projects.

## Usage

```json
{
  "extends": "@bopstack/oxfmt/oxfmtrc.json"
}
```

Or copy the config directly:

```bash
pnpm exec oxfmt --config oxfmtrc.json .
```

## Local development

```bash
pnpm install
pnpm test
```
