import { sum } from './sum.js'; 
import { expect } from 'vitest';
import { test } from 'vitest';

// test("bare bones test should pass", () => {});
// test(sum(5, 7));
// expect(sum).toBe(12);

test('sum of 5 and 7 should be 12', () => {
    expect(sum(5, 7)).toBe(12);
  });
