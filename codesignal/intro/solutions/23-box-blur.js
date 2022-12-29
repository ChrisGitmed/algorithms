/**
 * Last night you partied a little too hard. Now there's a black and white
 * photo of you that's about to go viral! You can't let this ruin your
 * reputation, so you want to apply the box blur algorithm to the photo to
 * hide its content.
 * 
 * The pixels in the input image are represented as integers. The algorithm
 * distorts the input image in the following way: Every pixel x in the output
 * image has a value equal to the average value of the pixel values from the
 * 3 × 3 square that has its center at x, including x itself. All the pixels
 * on the border of x are then removed.
 * 
 * Return the blurred image as an integer, with the fractions rounded down.
 */
const solution = (input) => input
  .slice(1, -1)
  .map((row) => row.slice(1, -1))
  .map((row, idx) => row.map((_,j) => {
    let sum = 0;
    for(let x = 0; x < 3; ++x)
      for(let y = 0; y < 3; ++y) sum += input[idx + x][j + y];
    return sum / 9 | 0;
  })
);

module.exports = { solution };
