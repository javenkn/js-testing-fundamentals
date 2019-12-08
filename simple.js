/**
 * Simple testing of imported functions from a module
 */

const { add, subtract } = require("./math");

let result;
let expected;

result = add(7, 3);
expected = 10;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
