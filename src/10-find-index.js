/**
 * Given a sorted array, find the index of the element with the given val.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, val) {
  let found = false;
  let position = -1;
  let index = 0;

  while (!found && index < arr.length) {
    if (arr[index] === val) {
      found = true;
      position = index;
    } else {
      index += 1;
    }
  }
  return position;
}

module.exports = findIndex;
