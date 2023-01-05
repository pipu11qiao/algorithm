/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let mLen = word1.length;
  let nLen = word2.length;

  let dp = [];
  dp[0] = new Array(nLen + 1).fill(0).map((_, i) => i);
  for (let i = 1; i <= mLen; i++) {
    dp[i] = [i];
    let w1 = word1[i - 1];
    for (let j = 1; j <= nLen; j++) {
      let w2 = word2[j - 1];
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      if (w1 === w2) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[mLen][nLen];
};

function test() {
  let fun = minDistance;
  let params = [
    //[1, 1, 1, 0]
    "horse",
    "ros",
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
