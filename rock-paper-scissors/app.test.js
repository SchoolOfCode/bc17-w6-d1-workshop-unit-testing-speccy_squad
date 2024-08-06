import { expect } from "vitest";
import { test } from "vitest";
import { calculateRoundResult, DRAW, WIN, LOSS, ROCK, PAPER, SCISSORS } from "./app.js";
const APPLE = "APPLE"

// - `calculateRoundResult` - you should have a test for each permutation of valid inputs and assert that it returns the correct value
// - `calculateRoundResult` - you should have a few tests for a few invalid inputs too and assert that it throws an error with the correct message
// - `calculateNewScores` - you should test different score objects with different outcomes and assert that the correct value is returned
// - `generateComputerMove` - you should have tests that verify and assert that the function can return either rock, paper or scissors

test("If computer move and player move = rock, return draw", () => {
  expect(calculateRoundResult(ROCK, ROCK)).toEqual({
    outcome: DRAW,
    message: "Both players chose rock. It's a draw.",
  });
});

test("If computer move = 'ROCK' and player move = 'PAPER', return Player wins", () => {
  expect(calculateRoundResult(PAPER, ROCK)).toEqual({
    outcome: WIN,
    message: "Player chose paper and computer chose rock. Player wins.",
  });
});

test("If an invalid move is given, error should appear", () => {
  expect(() => calculateRoundResult(APPLE, ROCK)).toThrowError(
    "Invalid player move (APPLE) or computer move ROCK"
  );
});