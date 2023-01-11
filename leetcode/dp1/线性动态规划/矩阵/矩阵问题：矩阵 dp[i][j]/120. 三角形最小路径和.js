/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let len = triangle.length;
  /**
   * dp[i][j] 到达triangle[i][j]的最短路径和
   * 初始dp[0][1] = triangle[0][0]
   * dp[i][j] = Math.min(dp[i-1][j], j===0 ?Number.positive: dp[i-1][j-1]) + triangle[i][j]
   */

  let dp = [];
  dp[0] = [triangle[0][0]];
  for (let i = 1; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] =
        Math.min(
          j === triangle[i].length - 1
            ? Number.POSITIVE_INFINITY
            : dp[i - 1][j],
          j === 0 ? Number.POSITIVE_INFINITY : dp[i - 1][j - 1]
        ) + triangle[i][j];
    }
  }
  // console.log(`dp`, dp);
  return Math.min(...dp[len - 1]);
};

function test() {
  let fun = minimumTotal;
  let params = [
    //[1, 1, 1, 0]
    [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
