/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrOfNumbers = String(n).split('').map(Number);
  const indexOfMinNumber = arrOfNumbers.indexOf(Math.min.apply(0, arrOfNumbers));
  arrOfNumbers.splice(indexOfMinNumber, 1);
  return +arrOfNumbers.join('');
}

module.exports = deleteDigit;
