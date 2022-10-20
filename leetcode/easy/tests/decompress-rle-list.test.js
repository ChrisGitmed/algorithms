const { test, expect } = require('@jest/globals');
const { decompressRLElist } = require('../solutions/decompress-rle-list');

test('Should return the decompressed list.', () => {
  const input = [1, 2, 3, 4];
  const output = [2, 4, 4, 4];
  expect(decompressRLElist(input)).toEqual(output);
});

test('Should return the decompressed list.', () => {
  const input = [1, 1, 2, 3];
  const output = [1, 3, 3];
  expect(decompressRLElist(input)).toEqual(output);
});