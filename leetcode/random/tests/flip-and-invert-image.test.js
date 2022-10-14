const { test, expect } = require('@jest/globals');
const flipAndInvertImage = require('../solutions/flip-and-invert-image');

test('Should reverse and invert the image.', () => {
    const image = [[1,1,0],[1,0,1],[0,0,0]];
    const output = [[1,0,0],[0,1,0],[1,1,1]];
    expect(flipAndInvertImage(image)).toEqual(output);
});

test('Should reverse and invert the image.', () => {
    const image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
    const output = [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]];
    expect(flipAndInvertImage(image)).toEqual(output);
});
