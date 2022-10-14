/**
 * You are given two strings word1 and word2. Merge the strings by 
 * adding letters in alternating order, starting with word1. If a 
 * string is longer than the other, append the additional letters 
 * onto the end of the merged string.
 * 
 * Return the merged string.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let returnedString = '';
    const largest = word1.length > word2.length ? word1 : word2;
    for ( let i = 0; i < largest.length; i++) {
        if (word1[i]) returnedString += word1[i];
        if (word2[i]) returnedString += word2[i];
    }
    return returnedString;
};

// initialize a variable for the returned string
// find the largest string
// loop enough times to go through the largest string
//      if there is a word1[i], add word1[i]
//      if there is a word2[i], add word2[i]
// return the string

module.exports = mergeAlternately;