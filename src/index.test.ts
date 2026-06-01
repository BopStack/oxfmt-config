import { describe, it, expect } from "vitest";

describe("oxfmtrc.json", () => {
  it("contains all expected keys", async () => {
    const config = await import("../oxfmtrc.json", {
      with: { type: "json" },
    });
    const cfg = (config as any).default;

    expect(cfg.useTabs).toBe(true);
    expect(cfg.singleQuote).toBe(true);
    expect(cfg.trailingComma).toBe("none");
    expect(cfg.semi).toBe(false);
    expect(cfg.printWidth).toBe(100);
    expect(cfg.sortImports).toBe(true);
    expect(cfg.sortTailwindcss).toBe(true);
    expect(cfg.sortPackageJson).toBe(true);
    expect(cfg.insertFinalNewline).toBe(false);
  });
});
