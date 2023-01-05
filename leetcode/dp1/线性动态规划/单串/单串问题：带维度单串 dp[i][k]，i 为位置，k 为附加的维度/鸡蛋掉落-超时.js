/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
  /* dp[i][j] 表示i个鸡蛋j层楼需要的最少操作次数
    初始状态dp[1][j] = j dp[i][0] = 0;
    转移 dp[i][j] =  从1 - (half j) 开始分割  Math.max(dp[i-1][left],dp[i][right]) +1中最小的
    
  */
  let dp = [];
  dp[1] = new Array(n + 1).fill(0).map((_, i) => i);
  for (let i = 2; i <= k; i++) {
    dp[i] = [0];
    for (let j = 1; j <= n; j++) {
      let half = Math.ceil(j / 2);
      let min = Number.POSITIVE_INFINITY;
      for (let k = 1; k <= half; k++) {
        let next = k;
        min = Math.min(min, Math.max(dp[i - 1][next - 1], dp[i][j - next]) + 1);
      }
      dp[i][j] = min;
    }
  }
  console.log(`dp`, dp);
  return dp[k][n];
};

function test() {
  let fun = superEggDrop;
  let params = [
    //[1, 1, 1, 0]
    // 1, 2,
    // 2, 2,
    2,16
    // 2, 14,
    // 4, 24,
    // 4, 14,
    // 5, 14,
    // 10, 8100,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
