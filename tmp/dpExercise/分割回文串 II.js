/**
 * @param {string} s
 * @return {number}
 */
function checkPalindrome(str, start, end) {
  start === undefined && (start = 0);
  end === undefined && (end = str.length - 1);
  while (start < end) {
    if (str[start] !== str[end]) { return false }
    start++
    end--
  }
  return true
}
var minCut = function (s) {
  let dp = { 0: 1 }; //最少回文数量
  const len = s.length;
  for (let i = 1; i < len; i++) {
    let min = dp[i - 1] + 1;
    for (let j = 0; j < i; j++) {
      if (checkPalindrome(s, j, i)) {
        min = Math.min((dp[j - 1] || 0) + 1, min);
      }
    }
    dp[i] = min
  }
  // console.log(`dp`, dp);
  return dp[len - 1] - 1
};

function test() {
  let fun = minCut;
  let params = [
    "aabcbc"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()