/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = {};
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let cur = 0;
      if (i === 0 || j === 0) {
        cur = 1
      } else {
        cur = dp[`${i - 1}-${j}`] + dp[`${i}-${j - 1}`]
      }
      dp[`${i}-${j}`] = cur;
    }
  }
  return dp[`${m - 1}-${n - 1}`]
};

function test() {
  let fun = uniquePaths;
  let params = [
    3, 7
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()