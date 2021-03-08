/**
 * You are given a string allowed consisting of distinct characters 
 * and an array of strings words. A string is consistent if all 
 * characters in the string appear in the string allowed. 
 * 
 * Return the number of consistent strings in the array words.
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    let counter = 0;
    for (let i = 0; i < words.length; i++) {
        for (let x = 0; x < words[i].length; x++) {
            if (!allowed.includes(words[i][x])) break;
            if (x === words[i].length - 1) counter++;
        }
    }
    return counter;
};

/**
 * Initialize a variable for counter
 * Loop over every word in the array
 *      Loop over every char in the word
 *          If the char is NOT included in allowed, break the loop
 *          If you make it through the last char, increase counter
 * Return the counter
 */

module.exports = countConsistentStrings;