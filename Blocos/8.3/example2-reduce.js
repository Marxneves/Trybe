const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  // console.log(result); // 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const getSum2 = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers2 = numbers.reduce(getSum2, 10);
console.log(sumNumbers2); // 123