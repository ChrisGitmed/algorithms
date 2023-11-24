import { test, expect } from '@jest/globals';
import { selfDividingNumbers } from'../solutions/728.js';

test('Should return all self-dividing numbers.', () => {
    const left = 1;
    const right = 22;
    const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];
    expect(selfDividingNumbers(left, right)).toEqual(output);
});
