/**
 * @param {string} s
 * @return {number}
 */
function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--
  }
  return true
}
var minCut = function (str) {
  let len = str.length;
  let dp = { '0': 1 };
  for (let i = 1; i < len; i++) {
    if (isPalindrome(str.slice(0, i + 1))) {
      dp[i] = 1
    } else {
      let min = Number.POSITIVE_INFINITY;
      for (j = 0; j < i; j++) {
        let rightStr = str.slice(i - j, i + 1)
        if (isPalindrome(rightStr)) {
          min = Math.min(min, dp[i - j - 1] + 1)
        }
      }
      dp[i] = min
    }
  }
  let count = dp[len - 1];
  return count - 1

};
function test() {
  let fun = minCut;
  let params = [
    "baabc"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()