/* eslint-disable no-else-return */
/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  const sum = [...String(num)].reduce((acc, chr) => acc + Number(chr), 0);
  return sum < 10 ? sum : getSumOfDigits(sum);
}
// getSumOfDigits(91);
module.exports = getSumOfDigits;
