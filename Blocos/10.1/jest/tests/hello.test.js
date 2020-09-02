const hello = () => 'Hello';

describe('This is the Hello', () => {
  it('should output hello', () => {
    expect(hello()).toBe('Hello');
  });
});
