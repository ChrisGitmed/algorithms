const { test, expect } = require('@jest/globals');
const numJewelsInStones = require('./num-jewels-and-stones');

test('Expect return of numJewelsInStones("aA", "aAAbbbb") to be 3.', () => {
  expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
})

test('Expect return of numJewelsInStones("z", "ZZ") to be 0.', () => {
  expect(numJewelsInStones('z', 'ZZ')).toBe(0);
})
