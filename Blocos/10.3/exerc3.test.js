let randomNumber = () => Math.round(Math.random() * 100);// Lógica de gerar o número

describe('Test exercise 1', () => {
  // it('RandonNumber', () => {
  //   randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  //   expect(randomNumber(6, 3)).toBe(2);
  // });
  // it('RandonNumber2', () => {
  //   randomNumber = jest.fn().mockReturnValue(10);
  //   expect(randomNumber()).toBe(10);
  //   expect(randomNumber).toHaveBeenCalled();
  // });
  it('RandomNumber3', () => {
    randomNumber = jest.fn();
    randomNumber.mockImplementation((a, b, c) => (a * b * c));
    expect(randomNumber(2, 2, 2)).toEqual(8);
    randomNumber.mockReset();
  });
  it('RandomNumber4', () => {
    expect(randomNumber).toHaveBeenCalledTimes(2);
    randomNumber.mockImplementation((a) => (a * 2));
    expect(randomNumber(3)).toBe(6);
  });
});
