/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  let dp = new Array(n + 1).fill(0).map((_) => null); // dp[i][j] 表示数字i最后复制为j的操作数
  dp[1] = { 0: 0 };
  dp[2] = { 1: 2 };
  let minDp = [0, 0, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = {};
    let half = Math.floor(i / 2);
    let min = Number.POSITIVE_INFINITY;
    if (i % 2 === 0) {
      let curMIn = minDp[half] + 2;
      dp[i][half] = curMIn;
      min = Math.min(min, curMIn);
    }
    let maxCount = i % 2 === 0 ? half - 1 : half;
    for (let j = 1; j <= maxCount; j++) {
      if (i - j > j && dp[i - j][j] !== undefined) {
        let curCount = dp[i - j][j] + 1;
        dp[i][j] = curCount;
        min = Math.min(min, curCount);
      }
    }
    minDp[i] = min;
  }
  // console.log(`minDp`, minDp);
  // console.log(`dp`, dp);
  return minDp[n];
};

function test() {
  let fun = minSteps;
  let params = [
    //[1, 1, 1, 0]
    // 3,
    // 4
    // 5
    // 6,
    // 7
    // 8,
    20,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
