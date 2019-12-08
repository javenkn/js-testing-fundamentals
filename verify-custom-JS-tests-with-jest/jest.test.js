/**
 * Uses Jest to test our custom tests
 */

const { addAsync, subtractAsync } = require("../math");

test("addAsync sums numbers asynchronously", async () => {
  const result = await addAsync(7, 3);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers asynchronously", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
