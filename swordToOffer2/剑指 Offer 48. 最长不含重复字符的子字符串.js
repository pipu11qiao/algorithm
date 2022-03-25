/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  if (len === 0) {
    return 0;
  }
  let prev = 1;
  let max = 1;
  for (let i = 1; i < len; i++) {
    let index = -1;
    const curLetter = s[i];
    for (let j = i - prev; j <= i - 1; j++) {
      if (s[j] === curLetter) {
        index = j;
        break
      }
    }
    let curCount = 0;
    if (index === -1) {
      curCount = prev + 1
    } else {
      curCount = i - index
    }
    prev = curCount
    max = Math.max(max, prev)
  }
  return max

};

function test() {
  let fun = lengthOfLongestSubstring;
  let params = [
    // "abcabcbb"
    // "bbbbb"
    "pwwkew"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()