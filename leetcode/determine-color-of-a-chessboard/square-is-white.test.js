const { test, expect } = require('@jest/globals');
const squareIsWhite = require('./square-is-white');

test('Is the square white?', () => {
    const input = 'a1';
    const output = false;
    expect(squareIsWhite(input)).toBe(output)
});

test('Is the square white?', () => {
    const input = 'h3';
    const output = true;
    expect(squareIsWhite(input)).toBe(output)
});