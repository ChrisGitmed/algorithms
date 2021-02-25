const { test, expect } = require('@jest/globals');
const restoreString = require('./shuffle-string');

test('Should shuffle the string.', () => {
    const s = 'codeleet';
    const indices = [4, 5, 6, 7, 0, 2, 1, 3];
    const output = 'leetcode'
    expect(restoreString(s, indices)).toEqual(output);
});

test('Should shuffle the string.', () => {
    const s = 'abc';
    const indices = [0, 1, 2];
    const output = 'abc'
    expect(restoreString(s, indices)).toEqual(output);
});

test('Should shuffle the string.', () => {
    const s = 'aiohn';
    const indices = [3, 1, 4, 2, 0];
    const output = 'nihao'
    expect(restoreString(s, indices)).toEqual(output);
});