import { test, expect } from '@jest/globals';
import { numJewelsInStones } from'../solutions/771.js';

test('Expect return of numJewelsInStones("aA", "aAAbbbb") to be 3.', () => {
  expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
})

test('Expect return of numJewelsInStones("z", "ZZ") to be 0.', () => {
  expect(numJewelsInStones('z', 'ZZ')).toBe(0);
})
