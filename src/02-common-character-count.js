/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const repeatEl = (m) => {
    const res = {};
    [...m].forEach((el) => {
      if (res[el]) {
        res[el] += 1;
      } else {
        res[el] = 1;
      }
    });
    return res;
  };

  const o1 = repeatEl(s1);
  const o2 = repeatEl(s2);
  let sum = 0;
  Object.keys(o1).forEach((k) => {
    if (o2[k]) {
      sum += Math.min(o1[k], o2[k]);
    }
  });
  return sum;
}

module.exports = getCommonCharacterCount;
