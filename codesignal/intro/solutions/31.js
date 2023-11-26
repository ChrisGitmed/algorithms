/**
 * You have deposited a specific amount of money into your bank account.
 * Each year your balance increases at the same growth `rate`. With the
 * assumption that you don't make any additional deposits, find out how
 * long it would take for your balance to pass a specific `threshold`.
 *
 * @param {number} deposit The initial deposit, guaranteed to be a positive integer
 * @param {number} rate The rate of increase. Each year the balance increases by the `rate` percent of the current sum
 * @param {number} threshold The target balance
 * @returns { number } The number of years it would take to hit `threshold`
 */
const solution = (deposit, rate, threshold) => {
  let runningTotal = deposit;
  let yearsPassed = 0;
  while (runningTotal < threshold) {
    runningTotal += runningTotal * (rate / 100) ;
    yearsPassed++;
  }
  return yearsPassed;
};

export { solution };
