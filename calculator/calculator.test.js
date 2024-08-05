import { test } from "vitest"
import { expect } from "vitest"
import { calculate } from "./calculator.js"

// calculate('+', 9, 10); // should return 19

test("9+10 should return 19", () => {
    expect(calculate("+", 9, 10)).toBe(19)
});

test("4 squared should return 16", () => {
    expect(calculate("sq", 4)).toBe(16)
});

test("unsupported operator should retrn an error", () => {
    expect(calculate("💕", 5, 6)).toBe(30)
});