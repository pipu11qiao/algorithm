/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  if (k === 0) {
    return 0
  }
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
    if (keyArr.length >= k + 1) {
      keyArr.sort((a, b) => map[a] - map[b])
      let removeLetter = keyArr.shift();
      res = Math.max(res, r - l)
      l = map[removeLetter] + 1
      map[removeLetter] = undefined;
    }
  }

  res = Math.max(res, len - l)
  return res
};

function test() {
  let fun = lengthOfLongestSubstringKDistinct;
  let params = [
    "eceba", 2
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
};
test();
