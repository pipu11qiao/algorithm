/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length;
  let maxLen = 1;
  let begin = 0;
  /**
   * dp[i][j] 表示 i到j是否是回文字符串
   * dp[i][i] = true
   * dp[i][j] = s[i]===s[j] && dp[i+1][j-1]; i到j的长度大于等于3的时候
   */
  // 初始化dp并且设置s[i][i]为true
  let dp = new Array(len)
    .fill(0)
    .map((_, i) => new Array(len).fill(false).map((item, j) => i === j));
  // console.log(`dp`, dp);
  for (let subLen = 2; subLen <= len; subLen++) {
    for (let i = 0; i < subLen; i++) {
      let j = subLen + i - 1;
      if (j >= len) {
        break;
      }
      if (s[j] === s[i]) {
        if (subLen < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j] && j - 1 + i > maxLen) {
        maxLen = j - 1 + i;
        begin = i;
      }
    }
  }
  return s.slice(begin, begin + maxLen);
};

function test() {
  let fun = longestPalindrome;
  let params = [
    //[1, 1, 1, 0]
    "babad",
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
