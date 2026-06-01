import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    outputFile: "tmp/vitest-report.json",
    include: ["src/**/*.test.ts"],
  },
});
