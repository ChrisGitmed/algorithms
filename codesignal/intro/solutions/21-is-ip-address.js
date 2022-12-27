/**
 * An IP address is a numerical label assigned to each device (e.g., computer,
 * printer) participating in a computer network that uses the Internet
 * Protocol for communication. There are two versions of the Internet
 * protocol, and thus two versions of addresses. One of them is the IPv4 address.
 * 
 * Given a string, find out if it satisfies the IPv4 address naming rules.
 */
const solution = (input) => {
  const split = input.split('.');
  if (split.length !== 4 || split.includes('')) return false;    
  
  for (const str of split) {
      if (str.length > 1 && str[0] === '0') return false;
      const num = Number(str);
      if (isNaN(num)) return false;
      if (num < 0 || num > 255) return false;
  }
  return true;
}

module.exports = { solution };
