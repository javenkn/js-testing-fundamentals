/**
 * Provides helper function as globals
 */

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

// makes test and expect global
global.test = test;
global.expect = expect;
