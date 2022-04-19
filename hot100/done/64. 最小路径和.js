/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dp = {};
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let cur = 0;
      let top = dp[`${i - 1}-${j}`];
      let left = dp[`${i}-${j - 1}`];
      if (i === 0 && j === 0) {
        min = 0
      } else if (i === 0) {
        min = left
      } else if (j === 0) {
        min = top
      } else {
        min = Math.min(left, top)
      }
      cur = min + grid[i][j];
      dp[`${i}-${j}`] = cur;
    }
  }
  return dp[`${m - 1}-${n - 1}`]
};

function test() {
  let fun = minPathSum;
  let params = [
    [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()