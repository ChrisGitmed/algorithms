const { test, expect } = require('@jest/globals');
const numberOfMatches = require('../solutions/number-of-matches');

test('Should return the number of matches played', () => {
    const input = 100;
    const output = 99;
    expect(numberOfMatches(input)).toBe(output);
});

test('Should return the number of matches played', () => {
    const input = 7;
    const output = 6;
    expect(numberOfMatches(input)).toBe(output);
});

test('Should return the number of matches played', () => {
    const input = 5000;
    const output = 4999;
    expect(numberOfMatches(input)).toBe(output);
});