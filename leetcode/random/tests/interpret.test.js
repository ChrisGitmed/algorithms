const { test, expect } = require('@jest/globals');
const interpret = require('../solutions/interpret');

test('Should interpret the string.', () => {
    const input = 'G()(al)';
    const output = 'Goal';
    expect(interpret(input)).toBe(output);
});

test('Should interpret the string.', () => {
    const input = 'G()()()()(al)';
    const output = 'Gooooal';
    expect(interpret(input)).toBe(output);
});