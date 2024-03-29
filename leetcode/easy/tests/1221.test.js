import { test, expect } from '@jest/globals';
import { balancedStringSplit } from'../solutions/1221.js';

test('Should return the max amount of balanced strings.', () => {
    const s = 'RLRRLLRLRL';
    expect(balancedStringSplit(s)).toBe(4);
});

test('Should return the max amount of balanced strings.', () => {
    const s = 'RLLLLRRRLR';
    expect(balancedStringSplit(s)).toBe(3);
});

test('Should return the max amount of balanced strings.', () => {
    const s = 'LLLLRRRR';
    expect(balancedStringSplit(s)).toBe(1);
});

test('Should return the max amount of balanced strings.', () => {
    const s = 'RLRRRLLRLL';
    expect(balancedStringSplit(s)).toBe(2);
});