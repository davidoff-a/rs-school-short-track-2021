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
  const addToResult = (acc) => `${acc.count ? acc.count + 1 : ''}${acc.previous}`;
  return [...str].reduce(
    (acc, letter, index, arr) => {
      if (acc.previous === letter) {
        acc.count++;
      } else {
        acc.result += addToResult(acc);
        acc.previous = letter;
        acc.count = 0;
      }

      if (index === arr.length - 1) {
        acc.result += addToResult(acc);
      }

      return acc;
    },
    {
      count: 0,
      previous: '',
      result: '',
    },
  ).result;
}

module.exports = encodeLine;
