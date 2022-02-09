/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const obj = {};
  const len = s.length;
  if (len === 0) {
    return 0
  }
  for (let i = 0; i < len; i++) {
    let l = s[i];
    if (!obj[l]) {
      obj[l] = 0
    }
    obj[l]++
  }
  let res = 0;
  let hasSingle = false
  for (let l in obj) {
    let n = obj[l]
    res += Math.floor(n / 2) * 2
    if (!hasSingle && n % 2 !== 0) {
      hasSingle = true
    }
  }
  if (hasSingle) {
    res += 1
  }
  return res
};


function test() {
  const str = "abcccdd";

  const res = longestPalindrome(str);
  console.log(`res`, res);
}

test()