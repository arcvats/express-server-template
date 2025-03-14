import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: ["./**/*.test.ts"],
      include: ["src/**/*"],
      provider: "v8",
      reporter: ["text", "html"],
    },
    restoreMocks: true,
  },
});
