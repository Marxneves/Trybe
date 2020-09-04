const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Testing uppercase', () => {
  it('Testing', done => {
    uppercase('test', str => {
      expect(str).toBe('TEST');
      done();
    });
  });
});
