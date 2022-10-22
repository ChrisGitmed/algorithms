const { test, expect } = require('@jest/globals');
const { mergeTwoLists } = require('../solutions/merge-two-sorted-lists');

test('Should return the merged string', () => {
  const list1 = [1, 2, 4];
  const list2 = [1, 3, 4];
  expect(mergeTwoLists(list1, list2)).toStrictEqual([1, 1, 2, 3, 4, 4]);
});

test('Should return the merged string', () => {
  const list1 = [];
  const list2 = [];
  expect(mergeTwoLists(list1, list2)).toStrictEqual([]);
});

test('Should return the merged string', () => {
  const list1 = [];
  const list2 = [0];
  expect(mergeTwoLists(list1, list2)).toStrictEqual([0]);
});