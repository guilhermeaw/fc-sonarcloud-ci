const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 2 * 2 should be equal to 4', () => {
    expect(multiply(2, 2)).toBe(4);
  });
});
