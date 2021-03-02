import { expect, it } from '@jest/globals';
import { describe } from 'yargs';
import { findCombinations } from './solution';

test('returns all combinations for the number "52283" and the text "cat"', () => {
  const expectedResult = ["jcatd", "jcate", "jcatf", "kcatd", "kcate", "kcatf", "lcatd", "lcate", "lcatf"];
  const actual = findCombinations("52283", "cat");
  expect(actual.sort()).toEqual(expectedResult.sort());
});

test('returns all combinations for the number "55228" and the text "cat"', () => {
  const expectedResult = ["jjcat", "jkcat", "jlcat", "kjcat", "kkcat", "klcat", "ljcat", "lkcat", "llcat"];
  const actual = findCombinations("55228", "cat");
  expect(actual.sort()).toEqual(expectedResult.sort());
});
