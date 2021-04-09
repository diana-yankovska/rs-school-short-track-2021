/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const map = new Map();
  const resultArr = [];
  for (let i = 0; i < names.length; i++) {
    const fileName = names[i];
    if (!map.has(fileName)) {
      if (!resultArr.includes(fileName)) {
        map.set(fileName, 0);
        resultArr.push(fileName);
      } else {
        map.set(fileName, 1);
        resultArr.push(`${fileName}(1)`);
      }
    } else {
      let counter = map.get(fileName);
      map.set(fileName, ++counter);
      resultArr.push(`${fileName}(${counter})`);
    }
  }
  return resultArr;
}

module.exports = renameFiles;
