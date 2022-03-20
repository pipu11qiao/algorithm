/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  let dp = { 1: 1, 2: 1, 3: 2 };
  let max = Number.NEGATIVE_INFINITY;
  if (dp[n]) {
    return dp[n]
  }
  dp = { 1: 1, };
  for (let i = 1; i <= n; i++) {
    let curMax = i;
    for (let j = 0; j < i; j++) {
      curMax = Math.max(curMax, (dp[j] || 1) * (i - j))
    }
    dp[i] = curMax
    max = Math.max(max, curMax)
  }
  return max
};

function test() {
  let fun = cuttingRope;
  let params = [
    // 10
    // 2
    5
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()