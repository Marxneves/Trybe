const myFizzBuzz = require('../funçoes/exerc4');

describe('Tests myFizzBuzz', () => {
  it('Return FizzBuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('number is divisible by 3 return fizz', () => {
    expect(myFizzBuzz(6)).toEqual('fizz');
  });

  it('number is divisible by 5 return buzz', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  });

  it('number not is divisible by 5 and 3', () => {
    expect(myFizzBuzz(11)).toEqual(11);
  });

  it('The parameters is not a number', () => {
    expect(myFizzBuzz('11')).toEqual(false);
  });
});
