/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function (costs) {
  /**
   * dp[i][j] 表示前i个房子粉刷成j颜色的最小花费 j 0 1 2
   */
  let dp = [];
  dp[0] = [...costs[0]];
  let colorCount = costs[0].length;
  for (let i = 1; i < costs.length; i++) {
    dp[i] = [];
    for (let j = 0; j < colorCount; j++) {
      let cur = costs[i][j];
      let min = Number.POSITIVE_INFINITY;
      for (let k = 0; k < colorCount; k++) {
        if (k !== j) {
          min = Math.min(min, dp[i - 1][k]);
        }
      }
      dp[i][j] = min + cur;
    }
  }
  // console.log(`dp`, dp);
  return Math.min(...dp[costs.length - 1]);
};

function test() {
  let fun = minCostII;
  let params = [
    // [
    //   [1, 5, 3],
    //   [2, 9, 4],
    // ],
    [
      [1, 3],
      [2, 4],
    ],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
