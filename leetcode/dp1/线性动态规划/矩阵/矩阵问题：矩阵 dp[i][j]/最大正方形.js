/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let mLen = matrix.length;
  let nLen = matrix[0].length;
  /**
   * dp[i][j] 表示以坐标(i,j)为右下点的最大正方形的边长 dp[i][j]=3 表示边长为3的正方形
   * 初始状态 dp[0][0] = matrix[0][0]
   * 转移 dp[i][j] = Math.max(dp[i-1][j-1],dp[i-1][j],dp[i][j-1],dp[i][j])
   * 在左边和上边加一列不用处理0
   */
  dp = [];
  dp[0] = new Array(nLen + 1).fill(0);
  let max = 0;
  for (let i = 1; i <= mLen; i++) {
    dp[i] = [0];
    for (let j = 1; j <= nLen; j++) {
      let cur = matrix[i - 1][j - 1];
      let prev = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      dp[i][j] = cur > 0 ? (prev > 0 ? prev + 1 : 1) : 0;
      max = Math.max(max, dp[i][j]);
    }
  }
  // console.log(`dp`, dp);
  return max * max;
};

function test() {
  let fun = maximalSquare;
  let params = [
    //[1, 1, 1, 0]
    [
      ["0", "1"],
      ["1", "0"],
    ],
    [
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"],
    ],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
