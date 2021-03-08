const { test, expect } = require('@jest/globals');
const countConsistentStrings = require('./count-consistent-strings');

test('Should return the number of consistent strings.', () => {
    const allowed = 'ab';
    const words = ['ad', 'bd', 'aaab', 'baa', 'badab'];
    expect(countConsistentStrings(allowed, words)).toBe(2);
});

test('Should return the number of consistent strings.', () => {
    const allowed = 'abc';
    const words = ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'];
    expect(countConsistentStrings(allowed, words)).toBe(7);
});

test('Should return the number of consistent strings.', () => {
    const allowed = 'cad';
    const words = ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'];
    expect(countConsistentStrings(allowed, words)).toBe(4);
});