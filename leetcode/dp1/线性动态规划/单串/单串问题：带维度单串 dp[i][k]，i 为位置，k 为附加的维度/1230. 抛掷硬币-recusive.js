/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function (prob, target) {
  /*
    dp[i][j] 前i数的j个1的概率
    初始状态 dp[0][0]=1-prob[0] dp[0][1]=prop[0]
    dp[i][j] = prob[i] *  dp[i-1][j-1]+(1-prob[i]) * dp[i-1][j]
  */
  let dp = [];
  dp[0] = [1 - prob[0], prob[0]];

  for (let i = 1; i < prob.length; i++) {
    dp[i] = [];
    let oneRate = prob[i];
    let zeroRate = 1 - oneRate;
    for (let j = 0; j <= target && j <= i + 1; j++) {
      dp[i][j] =
        (j - 1 >= 0 ? oneRate * (dp[i - 1][j - 1] || 0) : 0) +
        zeroRate * (dp[i - 1][j] || 0);
    }
  }
  // console.log(`dp`, dp);
  return dp[prob.length - 1][target];
};

function test() {
  let fun = probabilityOfHeads;
  let params = [
    // [0.4],
    // 1,
    // [0.5, 0.3, 0.2, 0.8, 0.8, 0.5, 0.5],
    // 4,
    //[1, 1, 1, 0]
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    9,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
