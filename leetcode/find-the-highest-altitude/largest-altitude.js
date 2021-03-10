/**
 * There is a biker going on a road trip. The road trip 
 * consists of n + 1 points at different altitudes. 
 * The biker starts his trip on point 0 with altitude equal 0. 
 * 
 * You are given an integer array gain of length n where 
 * gain[i] is the net gain in altitude between points 
 * i​​​​​​ and i + 1 for all (0 <= i < n). 
 * 
 * Return the highest altitude of a point.
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
 var largestAltitude = function(gain) {
    let max = 0;
    let altitude = 0;
    for (let i = 0; i < gain.length; i++) {
        altitude += gain[i];
        if (altitude > max) {
            max = altitude;
        }
    }
    return max;
};

/**
 * Initialize variable for max
 * Initialize variable for altitude
 * Loop through entire gain array
 *      Add gain[i] to the altitude
 *      Check altitude against max, if higher:
 *          assign altitude to max
 * return max
 */

module.exports = largestAltitude;