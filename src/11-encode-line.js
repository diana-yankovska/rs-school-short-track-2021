/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [str[0]];
  let counter = 1;
  for (let i = 1; i < str.length; i++) {
    if (arr[arr.length - 1] !== str[i]) {
      arr.push(str[i]);
      counter = 1;
    } else if (counter === 1) {
      ++counter;
      arr.splice(arr.length - 1, 0, counter);
    } else {
      ++counter;
      arr.splice(arr.length - 2, 1, counter);
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
