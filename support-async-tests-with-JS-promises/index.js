/**
 * Dealing with async functions within our tests.
 */

const { addAsync, subtractAsync } = require("../math");

test("add sums numbers", async () => {
  const result = await addAsync(7, 3);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback(); // needs to have an await attached or the tests will automatically pass
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  };
}
