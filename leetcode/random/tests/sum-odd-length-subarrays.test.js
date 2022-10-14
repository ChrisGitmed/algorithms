const { test, expect } = require('@jest/globals');
const sumOddLengthSubarrays = require('../solutions/sum-odd-length-subarrays');

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