import { expect } from "vitest";
import { test } from "vitest";
import { calculateRoundResult, DRAW, WIN, LOSS, ROCK, PAPER, SCISSORS } from "./app.js";

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

test("If computer move = 'scissors' and player move = 'paper', return Computer wins", () => {
  expect(calculateRoundResult(PAPER, SCISSORS)).toEqual({
      outcome: LOSS,
      message: "Player chose paper and computer chose scissors. Computer wins."
  });
});
