// 'use strict';
function deleteDigit(n) {
  const transformToArray = [...String(n)].map((letter) => Number(letter));
  const minCipher = Math.min(...transformToArray);
  transformToArray.splice(transformToArray.indexOf(minCipher), 1);
  return Number(transformToArray.join(''));
}
module.exports = deleteDigit;
// deleteDigit(152);
