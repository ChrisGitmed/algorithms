const { test, expect } = require('@jest/globals');
const defangIPaddr = require('../solutions/defang-ip-addr');
let input, output;

test("Should replace every '.' with a '[.]' ", () => {
  input = '1.1.1.1';
  output = '1[.]1[.]1[.]1';
  expect(defangIPaddr(input)).toBe(output);
});

test("Should replace every '.' with a '[.]' ", () => {
  input = '255.100.50.0';
  output = '255[.]100[.]50[.]0';
  expect(defangIPaddr(input)).toBe(output);
});
