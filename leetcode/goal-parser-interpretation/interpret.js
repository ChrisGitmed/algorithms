/**
 * You own a Goal Parser that can interpret a string command. 
 * The command consists of an alphabet of "G", "()" and/or "(al)" 
 * in some order. The Goal Parser will interpret "G" as the 
 * string "G", "()" as the string "o", and "(al)" as the string "al". 
 * The interpreted strings are then concatenated in the original order. 
 * 
 * Given the string command, return the Goal Parser's interpretation 
 * of command.
 */

/**
 * @param {string} command
 * @return {string}
 */
const interpret = (command) => {
    let goalString = '';
    for (let i = 0; i < command.length; i++) {
        if (command[i] === '(') {
            if (command[i + 1] === ')') {
                goalString += 'o';
                i++;
            } else {
                goalString += 'al';
                i += 3;
            }
        } else goalString += 'G'
    };
    return goalString;
};

/**
 * Initialize a variable for the string to return (goalString)
 * Loop through the entire command string
 *      if the char is a '('
 *          if the next char is a ')'
 *              add an 'o' to the goalString
 *              increment the counter by one
 *          else 
 *              add an 'al' to the goalString
 *              increment the counter by three
 *      else add a 'G' to the goalString
 * return the goalString
 */
