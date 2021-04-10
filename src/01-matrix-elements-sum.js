/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = matrix[0].reduce((sum, current) => sum + current, 0);
  for (let i = 1; i < matrix.length; i++) {
    result += matrix[i].reduce((sum, currentItem, index) => (matrix[i - 1][index] === 0
      ? sum
      : sum + currentItem), 0);
  }
  return result;
}

module.exports = getMatrixElementsSum;
