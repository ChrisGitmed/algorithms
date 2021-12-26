/**
 * You are given a string 'allowed' consisting of distinct characters 
 * and an array of strings 'words'. A string is consistent if all 
 * characters in the string appear in the string allowed. 
 * 
 * Return the number of consistent strings in the array 'words'.
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 const countConsistentStrings = (allowed, words) => {
    let count = 0;
    for (const word of words) {
        let flag = true;
        for (const letter of word) if (!allowed.includes(letter)) flag = false;
        if (flag) count++;
    };
    return count;
};

module.exports = countConsistentStrings;