const minus = require('./minus');

describe('minus', () => {
  it('subtracts 2 - 1 should be equal to 1', () => {
    expect(minus(2, 1)).toBe(1);
  });
});
