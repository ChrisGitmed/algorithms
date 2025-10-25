/**
 * Given a positive integer millis, write an asynchronous function that sleeps
 * for millis milliseconds. It can resolve any value.
 * 
 * Note that minor deviation from millis in the actual sleep duration is acceptable.
 * 
 * @param {number} ms
 * @return {Promise}
 */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));