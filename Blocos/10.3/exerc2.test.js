let randomNumber = () => Math.round(Math.random() * 100);// Lógica de gerar o número

describe('Test exercise 1', () => {
  it('RandonNumber', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(randomNumber(6, 3)).toBe(2);
  });
  it('RandonNumber', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
  });
});
