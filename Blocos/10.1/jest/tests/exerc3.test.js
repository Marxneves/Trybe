const myRemoveWithoutCopy = require('../funçoes/exerc3');

describe('Tests for myRemoveWithotCopy', () => {
  const array = [1, 2, 3, 4];
  it('Test if array returns expected', () => {
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4]);
  });

  it('Test if array returns expected', () => {
    expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('The array passed by parameter has changed ', () => {
    myRemoveWithoutCopy(array, 3);
    expect(array).not.toEqual([1, 2, 3, 4]);
  });

  it('Test if array returns expected', () => {
    expect(myRemoveWithoutCopy(array, 5)).toEqual(array);
  });
});
