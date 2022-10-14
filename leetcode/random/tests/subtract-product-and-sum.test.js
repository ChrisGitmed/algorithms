const { test, expect } = require('@jest/globals');
const subtractProductAndSum = require('../solutions/subtract-product-and-sum');

test('Should return the difference between the product and sum.', () => {
    input = 234;
    output = 15;
    expect(subtractProductAndSum(234)).toBe(15);
});

test('Should return the difference between the product and sum.', () => {
    input = 4421;
    output = 21;
    expect(subtractProductAndSum(234)).toBe(15);
});