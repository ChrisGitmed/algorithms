const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/25-array-replace.js');

test('Should ', () => {
  const inputArray = [1, 2, 1];
  const elemToReplace = 1;
  const substitutionElem = 3;
  const result = [3, 2, 3];
  expect(solution(inputArray, elemToReplace, substitutionElem)).toEqual(result);
});

test('Should ', () => {
  const inputArray = [1, 2, 3, 4, 5];
  const elemToReplace = 3;
  const substitutionElem = 0;
  const result = [1, 2, 0, 4, 5];
  expect(solution(inputArray, elemToReplace, substitutionElem)).toEqual(result);
});

test('Should ', () => {
  const inputArray = [10, 10];
  const elemToReplace = 0;
  const substitutionElem = 9;
  const result = [10, 10];
  expect(solution(inputArray, elemToReplace, substitutionElem)).toEqual(result);
});
