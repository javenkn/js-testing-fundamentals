/**
 * An assertion library with a "toBe" testing method
 */

const { add, subtract } = require("./math");

let result;
let expected;

result = add(7, 3);
expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
    /**
     * can add other testing methods such as:
     * toEqual(), toBeGreaterThan(), ...etc.
     */
  };
}
