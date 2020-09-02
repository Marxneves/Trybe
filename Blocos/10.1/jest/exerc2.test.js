function myRemove(arr, item) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

describe('Test function myRemove', () => {
  const array = [1, 2, 3, 4];
  it('Remove item from Array', () => {
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
    expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
  });
});
