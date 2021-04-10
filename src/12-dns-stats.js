/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const map = new Map();
  for (let i = 0; i < domains.length; i++) {
    const domainParts = domains[i].split('.');
    let domain = '';
    for (let j = domainParts.length - 1; j >= 0; j--) {
      domain += `.${domainParts[j]}`;
      if (!map.has(domain)) {
        map.set(domain, 1);
      } else {
        let counter = map.get(domain);
        map.set(domain, ++counter);
      }
    }
  }
  return Object.fromEntries(map);
}

module.exports = getDNSStats;
