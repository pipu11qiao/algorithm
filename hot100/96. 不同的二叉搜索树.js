/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dp = { 1: 1, 2: 2 };
  for (let i = 3; i <= n; i++) {
    let cur = 2 * dp[i - 1];
    for (let j = 1; j < i - 1; j++) {
      cur += dp[j] * dp[i - 1 - j];
    }
    dp[i] = cur
  }
  return dp[n]
};

function test() {
  let fun = numTrees;
  let params = [
    5
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()