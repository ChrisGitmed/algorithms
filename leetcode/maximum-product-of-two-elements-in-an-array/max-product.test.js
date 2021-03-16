const { test, expect } = require('@jest/globals');
const maxProduct = require('./max-product');

test('Should return the maximum product.', () => {
    let nums = [3, 4, 5, 2]
    expect(maxProduct(nums)).toBe(12);

    nums = [1, 5, 4, 5]
    expect(maxProduct(nums)).toBe(16);

    nums = [3, 7];
    expect(maxProduct(nums)).toBe(12);
})