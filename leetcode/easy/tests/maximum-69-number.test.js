const { test, expect } = require('@jest/globals');
const { maximum69Number } = require('../solutions/maximum-69-number');

test('Should return the maximum number.', () => {
    const input = 9669;
    const output = 9969;
    expect(maximum69Number(input)).toBe(output);
});

test('Should return the maximum number.', () => {
    const input = 9996;
    const output = 9999;
    expect(maximum69Number(input)).toBe(output);
});

test('Should return the maximum number.', () => {
    const input = 9999;
    const output = 9999;
    expect(maximum69Number(input)).toBe(output);
});