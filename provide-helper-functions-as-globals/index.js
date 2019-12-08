/**
 * Uses global test and expect functions for testing
 */

const { add, subtract } = require("../math");

test("add sums numbers", () => {
  const result = add(7, 3);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
