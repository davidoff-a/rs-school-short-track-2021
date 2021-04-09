/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filteredArr = arr.filter((item) => item >= 0);
  const resultArr = [];
  filteredArr.sort((a, b) => a - b);
  for (let countArrElems = 0; countArrElems < arr.length; countArrElems++) {
    if (arr[countArrElems] !== -1) {
      resultArr.push(filteredArr.shift());
    } else {
      resultArr.push(arr[countArrElems]);
    }
  }
  // console.log(resultArr);
  return resultArr;
  // throw new Error('Not implemented');
}
// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
module.exports = sortByHeight;
