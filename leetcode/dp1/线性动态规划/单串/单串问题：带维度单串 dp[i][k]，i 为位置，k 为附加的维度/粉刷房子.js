/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  /**
   * dp[i][j] 表示前i个房子粉刷成j颜色的最小花费 j 0 1 2
   */
  let dp = [];
  dp[0] = [...costs[0]];
  let nil = 200000;
  for (let i = 1; i < costs.length; i++) {
    dp[i] = [];
    for (let j = 0; j < 3; j++) {
      let cur = costs[i][j];
      dp[i][j] =
        Math.min(
          dp[i - 1][j - 2] || nil,
          dp[i - 1][j - 1] || nil,
          dp[i - 1][j + 1] || nil,
          dp[i - 1][j + 2] || nil
        ) + cur;
    }
  }
  // console.log(`dp`, dp);
  return Math.min(
    dp[costs.length - 1][0],
    dp[costs.length - 1][1],
    dp[costs.length - 1][2]
  );
};

function test() {
  let fun = minCost;
  let params = [
    //[1, 1, 1, 0]
    // [
    //   [17, 2, 17],
    //   [16, 16, 5],
    //   [14, 3, 19],
    // ],
    [
      [5, 8, 6],
      [19, 14, 13],
      [7, 5, 12],
      [14, 15, 17],
      [3, 20, 10],
    ],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
