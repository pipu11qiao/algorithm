/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let mLen = matrix.length;
  let nLen = matrix[0].length;
  /**
   * dp[i][j] 表示到达坐标(i,j)位置的最小路径和
   * 初始状态 dp[0][j] = [...matrix[0]];
   * 转移 dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j],dp[i-1][j+1])
   */
  let dp = [];
  dp[0] = [...matrix[0]];
  for (let i = 1; i < mLen; i++) {
    dp[i] = [];
    for (let j = 0; j < nLen; j++) {
      let left = j === 0 ? Number.POSITIVE_INFINITY : dp[i - 1][j - 1];
      let up = dp[i - 1][j];
      let right = j === nLen - 1 ? Number.POSITIVE_INFINITY : dp[i - 1][j + 1];
      dp[i][j] = Math.min(left, up, right) + matrix[i][j];
    }
  }
  // console.log(`dp`, dp);
  return Math.min(...dp[mLen - 1]);
};

function test() {
  let fun = minFallingPathSum;
  let params = [
    //[1, 1, 1, 0]
    // [
    //   [2, 1, 3],
    //   [6, 5, 4],
    //   [7, 8, 9],
    // ],
    [[-19,57],[-40,-5]]
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
