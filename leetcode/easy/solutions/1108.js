/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 *
 * A defanged IP address replaces every period "." with "[.]".
 * 
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => address.replace(/\./g, '[.]');

export { defangIPaddr };
