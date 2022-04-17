/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  let r = 0;
  let l = 0;
  const len = s.length
  const map = {};
  const keyArr = [];
  let res = 0;
  for (; r < len; r++) {
    const curLetter = s[r];
    if (map[curLetter] === undefined) {
      keyArr.push(curLetter)
    }
    map[curLetter] = r;
    if (keyArr.length >= 3) {
      let prevLetter = s[r - 1];
      let removeLetter = keyArr[0];
      if (removeLetter === prevLetter) {
        removeLetter = keyArr[1];
        keyArr.splice(1, 1)
      } else {
        keyArr.splice(0, 1)
      }
      res = Math.max(res, r - l)
      l = map[removeLetter] + 1
      map[removeLetter] = undefined;
    }
  }

  res = Math.max(res, len - l)
  return res
};

function test() {
  let fun = lengthOfLongestSubstringTwoDistinct;
  let params = [
    "eceba"
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()