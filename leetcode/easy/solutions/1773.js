/**
 * You are given an array items, where each items[i] = 
 * [typei, colori, namei] describes the type, color, and name 
 * of the ith item. You are also given a rule represented by 
 * two strings, ruleKey and ruleValue.
 * 
 * The ith item is said to match the rule if one of the 
 * following is true:
 * ruleKey == "type" and ruleValue == typei.
 * ruleKey == "color" and ruleValue == colori.
 * ruleKey == "name" and ruleValue == namei.
 * 
 * Return the number of items that match the given rule.
 */

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = (items, ruleKey, ruleValue) => {
    let count = 0;
    for (const idx in items) {
        switch(ruleKey) {
            case 'type':
                if (items[idx][0] === ruleValue) count++;
                break;
            case 'color':
                if (items[idx][1] === ruleValue) count++;
                break;
            case 'name':
                if (items[idx][2] === ruleValue) count++;
        };
    };
    return count;
};

export { countMatches };