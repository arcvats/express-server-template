import { describe, expect, it } from "vitest";

const sum = (a: number, b: number) => a + b;
const multiply = (a: number, b: number) => a * b;

describe("Math operations", () => {
  it("should add two numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });

  it("should multiply two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 1)).toBe(-1);
    expect(multiply(0, 5)).toBe(0);
  });

  it("should handle decimal numbers", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });
});
