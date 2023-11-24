import { test, expect } from '@jest/globals';
import { sumOddLengthSubarrays } from'../solutions/1588.js';

test('Should return the sum of all odd-length subarrays.', () => {
    const input = [1, 4, 2, 5, 3];
    expect(sumOddLengthSubarrays(input)).toBe(58);
});

test('Should return the sum of all odd-length subarrays.', () => {
    const input = [1, 2];
    expect(sumOddLengthSubarrays(input)).toBe(3);
});

test('Should return the sum of all odd-length subarrays.', () => {
    const input = [10, 11, 12];
    expect(sumOddLengthSubarrays(input)).toBe(66);
});