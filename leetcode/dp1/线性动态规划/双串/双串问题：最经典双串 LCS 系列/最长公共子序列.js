/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let mLen = text1.length;
  let nLen = text2.length;
  let dp = [];
  dp[0] = new Array(nLen + 1).fill(0);
  for (let i = 1; i <= mLen; i++) {
    dp[i] = [0];
    let w1 = text1[i - 1];
    for (let j = 1; j <= nLen; j++) {
      let w2 = text2[j - 1];
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      if (w1 === w2) {
        dp[i][j] = Math.max(dp[i - 1][j - 1] + 1);
      }
    }
  }
  // console.log(`dp`, dp);
  return dp[mLen][nLen];
};

function test() {
  let fun = longestCommonSubsequence;
  let params = [
    //[1, 1, 1, 0]
    "abcde",
    "ace",
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
