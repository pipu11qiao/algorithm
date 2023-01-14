/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  let mLen = mat.length;
  let nLen = mat[0].length;
  let dp = [];
  dp[0] = new Array(nLen + 1).fill(0);
  for (let i = 1; i <= mLen; i++) {
    dp[i] = [0];
    for (let j = 1; j <= nLen; j++) {
      let cur = mat[i - 1][j - 1];
      let leftSum = dp[i][j - 1];
      let upSum = dp[i - 1][j];
      let leftUpSum = dp[i - 1][j - 1];
      dp[i][j] = leftSum + upSum - leftUpSum + cur;
    }
  }
  // console.log(`dp`, dp);
  function getSum(r1, r2, c1, c2) {
    r1 = r1 < 0 ? 0 : r1;
    r2 = r2 > mLen ? mLen : r2;
    c1 = c1 < 0 ? 0 : c1;
    c2 = c2 > nLen ? nLen : c2;
    return dp[r2][c2] - dp[r1][c2] - dp[r2][c1] + dp[r1][c1];
  }
  let res = [];
  for (let i = 0; i < mLen; i++) {
    res[i] = [];
    for (let j = 0; j < nLen; j++) {
      res[i].push(getSum(i - k, i + 1 + k, j - k, j + 1 + k));
    }
  }
  return res;
};

function test() {
  let fun = matrixBlockSum;
  let params = [
    //[1, 1, 1, 0]
    // [
    //   [1, 2, 3],
    //   [4, 5, 6],
    //   [7, 8, 9],
    // ],
    // 1,
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    2,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
