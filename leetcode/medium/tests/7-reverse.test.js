const { test, expect } = require('@jest/globals');
const { reverse } = require('../solutions/7-reverse');

test('Should reverse the integer.', () => {
    const input = 123;
    expect(reverse(input)).toBe(321);
});

test('Should reverse the integer.', () => {
    const input = -123;
    expect(reverse(input)).toBe(-321);
});

test('Should reverse the integer.', () => {
    const input = 120;
    expect(reverse(input)).toBe(21);
});

test('Should reverse the integer.', () => {
    const input = 0;
    expect(reverse(input)).toBe(0);
});
