function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('This is Sum Function', () => {
  it('Sum two numbers', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(() => sum(4, '5')).toThrow();
    expect(() => sum(4, '5')).toThrow(/parameters must be numbers/);
  });
});
