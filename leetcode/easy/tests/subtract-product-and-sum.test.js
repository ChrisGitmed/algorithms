const { test, expect } = require('@jest/globals');
const { subtractProductAndSum } = require('../solutions/subtract-product-and-sum');

test('Should return the difference between the product and sum.', () => {
  const n = 234;
  expect(subtractProductAndSum(n)).toBe(15);
});
