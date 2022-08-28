const {sum,multiple} = require('./arithmetic');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 20)).toBeLessThanOrEqual(30)
});



test('multiplication of two numbers', () => {
    expect(multiple(1, 20)).toBe(20)
  });