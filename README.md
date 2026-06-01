# @bopstack/oxfmt-config

Shared [`oxfmt`](https://oxc.rs/docs/guide/usage/formatter.html) configuration for Bopstack packages.

## Install

```bash
pnpm add -D @bopstack/oxfmt-config
```

## Usage

Copy the published config into your project root:

```bash
cp node_modules/@bopstack/oxfmt-config/.oxfmtrc.json ./.oxfmtrc.json
```

Then run `oxfmt` with your normal project tooling.

## Included config

- tabs enabled
- single quotes enabled
- semicolons disabled
- print width set to 100
- trailing commas disabled
- import, Tailwind CSS, and package JSON sorting enabled
- final newline insertion disabled

## Package contents

- `.oxfmtrc.json` — shared formatter configuration
- `LICENSE` — MIT license
- `README.md` — package usage
- `CHANGELOG.md` — release notes

## Release checks

```bash
just check
just pack
```

## License

MIT © Bopstack
