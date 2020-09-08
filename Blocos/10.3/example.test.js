let randomNumber = () => Math.round(Math.random() * 100 + 1);// Lógica de gerar o número

let isDivisible = (number) => ((randomNumber() % number) === 0);
// console.log(isDivisible(2));
describe('Test Function isDivisible', () => {
  it('The function is called', () => {
    randomNumber = jest.fn();
    isDivisible(2);
    expect(randomNumber).toHaveBeenCalled();
  });

  it('The function return true with rest 0', () => {
    randomNumber = jest.fn().mockReturnValue(4);
    expect(isDivisible(2)).toBeTruthy();
  });

  it('The function is called', () => {
    randomNumber = jest.fn()
      .mockReturnValueOnce(6)
      .mockReturnValueOnce(15)
      .mockReturnValue(4);
    expect(isDivisible(3)).toBeTruthy();
    expect(isDivisible(5)).toBeTruthy();
    expect(isDivisible(2)).toBeTruthy();
    expect(isDivisible(4)).toBeTruthy();
  });
});
