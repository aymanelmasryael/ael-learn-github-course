const assert = require("assert");

function sum(a, b) {
  return a + b;
}

assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(-1, 1), 0);
assert.strictEqual(sum(0, 0), 0);

console.log("All tests passed!");
