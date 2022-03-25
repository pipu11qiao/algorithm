/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  const mLen = grid.length;
  if (mLen === 0) {
    return 0
  }
  const nLen = grid[0].length;
  if (nLen === 0) {
    return 0
  }
  const dp = new Array(mLen).fill(0).map(_ => new Array(nLen).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 0; i < mLen; i++) {
    for (let j = 0; j < nLen; j++) {
      const cur = grid[i][j];
      dp[i][j] = cur
      let top = i === 0 ? 0 : dp[i - 1][j];
      let left = j === 0 ? 0 : dp[i][j - 1];
      dp[i][j] += Math.max(top, left);
    }
  }
  return dp[mLen - 1][nLen - 1];
};

function test() {
  let fun = maxValue;
  let params = [
    [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1]
    ]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()