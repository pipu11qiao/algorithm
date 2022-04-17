/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function (s, k) {
  const len = s.length;
  if (k > len) {
    return 0
  }
  let l = 0;
  const curMap = {}
  let repeatCount = 0;
  const repeatMap = {};
  let r = 0
  debugger
  for (; r < k - 1; r++) {
    const curLetter = s[r];
    curMap[curLetter] = (curMap[curLetter] || 0) + 1
    if (curMap[curLetter] > 1) {
      repeatMap[curLetter] = 1;
      repeatCount++
    }
  }
  let res = 0;
  for (; r < len; r++) {
    const curLetter = s[r];
    curMap[curLetter] = (curMap[curLetter] || 0) + 1
    if (curMap[curLetter] > 1) {
      repeatMap[curLetter] = 1;
      repeatCount++
    } else {
      if (repeatCount === 0) {
        res++
      }
    }
    const prevLetter = s[l];
    curMap[prevLetter]--
    if (repeatMap[prevLetter]) {
      if (curMap[prevLetter] <= 1) {
        repeatMap[prevLetter] = 0
      }
      repeatCount--
    }
    l++
  }
  return res
};

function test() {
  let fun = numKLenSubstrNoRepeats;
  let params = [
    "havefunonleetcode", 5
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()