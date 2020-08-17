const sum = (a, b) => a + b;

console.log(sum(2,3));

const assert = require('assert');

const expected = sum(1, 2);

assert(expected === 3, 'one plus two is three');
assert.equal(expected, 3, 'Deu errado a soma');
