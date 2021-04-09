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
  let sum = 0;
  let tmp = 0;
  let div = num;
  if (div < 10) {
    return div;
  } else {
    tmp = div % 10;
    div = (div - tmp) / 10;
    sum += tmp;
    getSumOfDigits(div);
  }
  return sum;
}
// getSumOfDigits(91);
module.exports = getSumOfDigits;
