const { test, expect } = require('@jest/globals');
const maximumWealth = require('./maximum-wealth');

test('Expect maximumWealth([[1, 2, 3], [3, 2, 1]]) to return 6', () => {
  expect(maximumWealth([[1, 2, 3], [3, 2, 1]])).toBe(6);
})
