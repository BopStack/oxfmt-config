import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { type } from "arktype";
import { describe, it, expect } from "vitest";

const config_schema = type({
  useTabs: "boolean",
  singleQuote: "boolean",
  trailingComma: "'none'",
  semi: "boolean",
  printWidth: "number",
  sortImports: "boolean",
  sortTailwindcss: "boolean",
  sortPackageJson: "boolean",
  insertFinalNewline: "boolean",
});

describe("oxfmtrc.json", () => {
  const config_path = resolve(import.meta.dirname, "../oxfmtrc.json");
  const raw = readFileSync(config_path, "utf-8");
  const parsed = JSON.parse(raw) as Record<string, unknown>;

  it("parses successfully", () => {
    expect(() => JSON.parse(raw)).not.toThrow();
  });

  it("matches the expected schema", () => {
    const result = config_schema(parsed);
    if (result instanceof type.errors) {
      throw new Error(`Schema validation failed: ${result.summary}`);
    }
  });

  it("has expected values", () => {
    expect(parsed.useTabs).toBe(false);
    expect(parsed.singleQuote).toBe(true);
    expect(parsed.trailingComma).toBe("none");
    expect(parsed.semi).toBe(false);
    expect(parsed.printWidth).toBe(100);
    expect(parsed.sortImports).toBe(true);
    expect(parsed.sortPackageJson).toBe(true);
    expect(parsed.sortTailwindcss).toBe(true);
    expect(parsed.insertFinalNewline).toBe(false);
  });
});
