/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// function minesweeper(matrix) {
//   let newMatrix = [];
//   for (let rowCount = 0; rowCount < matrix.length; rowCount++) {
//     for (let colCount = 0; colCount < matrix[0].length; colCount++) {
//       if (matrix[rowCount][colCount]) {
//         newMatrix[rowCount][colCount] = 1;
//       } else {
//         newMatrix[rowCount][colCount] = 0;
//       }
//     }
//   }
//   return newMatrix;
// }
// minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ]);
// // module.exports = minesweeper;
