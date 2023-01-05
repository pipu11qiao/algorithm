/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  /*
    dp[i][k] 在i位置能跳k个单位

    dp[i][k] 在i位置能调的单位有 0-[i-1]中的位置j跳到i位置是的步数决定，
    j位置到i位置的步数是 number[i]-number[j],用n表示，如果dp[j][n]为true，表示可以从j位置跳n步到达i位置
    此时dp[i][n-1],dp[i][n],dp[i][n+1] 都是为真，
    最后判断 dp[len-1] 是否能到达
  */
  let dp = [];
  dp[0] = { 1: true, max: 1 };
  function setDp(i, n) {
    dp[i][n - 1] = true;
    dp[i][n] = true;
    dp[i][n + 1] = true;
    dp[i].max = Math.max(dp[i].max || 0, n + 1);
  }
  let len = stones.length;
  for (let i = 1; i < len; i++) {
    dp[i] = {};
    let canGet = false;
    for (let j = 0; j < i; j++) {
      let n = stones[i] - stones[j];
      if (dp[j][n]) {
        setDp(i, n);
        canGet = true;
      } else {
        if (dp[j].max >= n) {
          canGet = true;
        }
      }
    }
    if (!canGet) {
      return false;
    }
  }
  // console.log(`dp`, dp);
  return Object.keys(dp[len - 1]).length > 0;
};

function test() {
  let fun = canCross;
  let params = [
    //[1, 1, 1, 0]
    // [0, 1, 3, 5, 6, 8, 12, 17],
    [0, 1, 2, 3, 4, 8, 9, 11],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
