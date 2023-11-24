import { test, expect } from '@jest/globals';
import { defangIPaddr } from'../solutions/1108.js';

test("Should replace every '.' with a '[.]' ", () => {
  const input = '1.1.1.1';
  const output = '1[.]1[.]1[.]1';
  expect(defangIPaddr(input)).toBe(output);
});

test("Should replace every '.' with a '[.]' ", () => {
  const input = '255.100.50.0';
  const output = '255[.]100[.]50[.]0';
  expect(defangIPaddr(input)).toBe(output);
});
