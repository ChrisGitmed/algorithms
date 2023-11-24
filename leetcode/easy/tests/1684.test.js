import { test, expect } from '@jest/globals';
import { interpret } from'../solutions/1684.js';

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