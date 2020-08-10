const s = [5, 7, 2];
function editInPlace(s) {
  'use strict';
  // Only change code below this line
   s[0] = 2;
   s[1] = 5;
   s[2] = 7;
  // Using s = [2, 5, 7] would be invalid
  return s;
  // Only change code above this line
}
console.log(editInPlace(s));
