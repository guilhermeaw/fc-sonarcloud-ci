const sum = require('./sum');

describe('sum', () => {
  it('adds 1 + 2 should be equal to 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
