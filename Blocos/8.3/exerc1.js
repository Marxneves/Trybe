    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// function flatten() {
//   const newArray = []
//   arrays.map(element => element.map(ele => newArray.push(ele)))
//   return newArray
// }

function flatten() {
  return arrays.reduce((acc, curr)=> acc.concat(curr), []);
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);