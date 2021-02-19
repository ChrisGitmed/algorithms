/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 *
 * A defanged IP address replaces every period "." with "[.]".
 */

/**
* @param {string} address
* @return {string}
*/

function defangIPaddr(address) {
  return address.replace(/\./g, '[.]');
}

/**
 * NOTE: If the first argument is a string, only the first match will be
 * replaced. This is why you must use RegEx
 */

module.exports = defangIPaddr;
