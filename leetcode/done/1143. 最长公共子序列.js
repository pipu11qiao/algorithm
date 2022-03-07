
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = [];
  const len1 = text1.length;
  const len2 = text2.length;
  for (let i = 0; i <= len1; i++) {
    dp.push(new Array(len2 + 1).fill(0));
  }
  for (let i = 1; i <= len1; i++) {
    let l1 = text1[i - 1];
    for (let j = 1; j <= len2; j++) {
      let l2 = text2[j - 1];
      if (l1 === l2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[len1][len2]
};

function test() {
  let fun = longestCommonSubsequence;
  let params = [
    "abcde", "ace"
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()