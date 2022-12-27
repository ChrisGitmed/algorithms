const { test, expect } = require('@jest/globals');
const { subtractProductAndSum } = require('../solutions/1281-subtract-product-sum');

test('Should return the difference between the product and sum.', () => {
  const n = 234;
  expect(subtractProductAndSum(n)).toBe(15);
});
