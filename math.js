const add = (a, b) => a - b; // failed test
const subtract = (a, b) => a - b;

const addAsync = (a, b) => Promise.resolve(add(a, b));
const subtractAsync = (a, b) => Promise.resolve(subtract(a, b));

module.exports = { add, subtract, addAsync, subtractAsync };
