/**
 * Balanced strings are those that have an equal quantity 
 * of 'L' and 'R' characters.
 * 
 * Given a balanced string s, split it in the maximum 
 * amount of balanced strings.
 * 
 * Return the maximum amount of split balanced strings.
 */

/**
 * @param {string} s
 * @return {number}
 */
 const balancedStringSplit = (s) => {
    let splitCount = 0;
    let lCount = 0;
    let rCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            rCount++;
        } else lCount++;
        
        if (rCount === lCount && rCount > 0) {
            rCount = 0;
            lCount = 0;
            splitCount++;
        }
    }
    return splitCount;
};

/**
 * Initialize var to count the splits
 * Initialize a var for the L count
 * Initialize a var for the R count
 * Loop through entire string
 *      Check the character, if 'R':
 *          increment rCount
 *      else: increment lCount
 *      If the l and r counts are equal AND greater than 0
 *          set L and R count vars to 0;
 *          Increment splitCount
 * Return splitCount
 */
module.exports = balancedStringSplit;