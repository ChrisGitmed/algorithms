/**
 * Below we will define an n-interesting polygon. Your task is
 * to find the area of a polygon for a given n.
 *
 * A 1-interesting polygon is just a square with a side of
 * length 1. An n-interesting polygon is obtained by taking
 * the (n-1)-interesting polygon and appending 1-interesting
 * polygons to its rim, side by side.
 *
 * @param {number} n
 * @return {number}
 */

function shapeArea(n) {
  return (n ** 2) + ((n - 1) ** 2)
}

/**
 * The key here is recognizing the pattern that the
 * n-interesting polygon makes. If you bisect the polygon
 * right under the 'half', you can notice that everything
 * above the line is equal to (n ** 2), while everything
 * below it is equal to ((n - 1) ** 2)
 *
 * visuals here: https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ
 */

module.exports = shapeArea;
