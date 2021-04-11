/**
 * Given a sorted array, find the index of the element with the given value.
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
function findIndex(array, value) {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    const halfIndex = Math.trunc((startIndex + endIndex) / 2);
    if (value === array[halfIndex]) {
      // value is found
      return halfIndex;
    }
    if (value < array[halfIndex]) {
      // search in left half moving endIndex
      endIndex = halfIndex - 1;
    } else {
      // search in right half moving startIndex
      startIndex = halfIndex + 1;
    }
  }
  // value not found in array
  return -1;
}

module.exports = findIndex;
