import { test, expect } from '@jest/globals';
import { createTargetArray } from'../solutions/1389.js';

test('Should create the target array.', () => {
    const nums = [0, 1, 2, 3, 4];
    const index = [0, 1, 2, 2, 1];
    const output = [0, 4, 1, 3, 2];
    expect(createTargetArray(nums, index)).toEqual(output);
});

test('Should create the target array.', () => {
    const nums = [1, 2, 3, 4, 0];
    const index = [0, 1, 2, 3, 0];
    const output = [0, 1, 2, 3, 4];
    expect(createTargetArray(nums, index)).toEqual(output);
});