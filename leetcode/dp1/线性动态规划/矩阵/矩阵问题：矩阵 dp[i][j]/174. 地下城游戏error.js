/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let mLen = dungeon.length;
  if (mLen === 0) {
    return 1;
  }
  let nLen = dungeon[0].length;
  if (nLen === 0) {
    return 1;
  }
  /**
   * dp[i][j] 表示到达该位置最大的路径和
   * dp[0][0] = [dungeon[0][0],0] 表示最小的步数
   * dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1])+dungeon[i][j];
   */
  let dp = [];
  let dpMax = [];
  for (let i = 0; i < mLen; i++) {
    dp[i] = [];
    dpMax[i] = [];
    for (let j = 0; j < nLen; j++) {
      let cur = dungeon[i][j];
      let curRes = 0;
      let curMin = 0;
      let curMaxRes = 0;
      let curMaxMin = 0;
      if (i === 0 && j === 0) {
        curRes = curMaxRes = cur;
        curMin = curMaxMin = 0;
      } else if (i === 0) {
        curRes = dp[i][j - 1][0] + cur;
        curMin = dp[i][j - 1][1];
        curMaxRes = dpMax[i][j - 1][0] + cur;
        curMaxMin = dpMax[i][j - 1][1];
      } else if (j === 0) {
        curRes = dp[i - 1][j][0] + cur;
        curMin = dp[i - 1][j][1];
        curMaxRes = dpMax[i - 1][j][0] + cur;
        curMaxMin = dpMax[i - 1][j][1];
      } else {
        let left = dp[i][j - 1];
        let up = dp[i - 1][j];
        let leftRes = [
          left[0] + cur,
          left[0] + cur < left[1] ? left[0] + cur : left[1],
        ];
        let upRes = [up[0] + cur, up[0] + cur < up[1] ? up[0] + cur : up[1]];
        if (
          leftRes[1] > upRes[1] ||
          (leftRes[1] === upRes[1] && leftRes[0] >= upRes[0])
        ) {
          curRes = leftRes[0];
          curMin = leftRes[1];
        } else {
          curRes = upRes[0];
          curMin = upRes[1];
        }
        let maxLeft = dpMax[i][j - 1];
        let maxUp = dpMax[i - 1][j];
        if (
          maxLeft[0] > maxUp[0] ||
          (maxLeft[0] === maxUp[0] && maxLeft[1] <= maxUp[1])
        ) {
          curMaxRes = maxLeft[0] + cur;
          curMaxMin =
            maxLeft[0] + cur < maxLeft[1] ? maxLeft[0] + cur : maxLeft[1];
        } else {
          curMaxRes = maxUp[0] + cur;
          curMaxMin = maxUp[0] + cur < maxUp[1] ? maxUp[0] + cur : maxUp[1];
        }
      }
      if (curRes < curMin) {
        curMin = curRes;
      }
      if (curMaxRes < curMaxMin) {
        curMaxMin = curMaxRes;
      }
      dpMax[i][j] = [curMaxRes, curMaxMin];
      if (curMaxMin >= curMin) {
        dp[i][j] = [curMaxRes, curMaxMin];
      } else {
        dp[i][j] = [curRes, curMin];
      }
    }
  }
  // console.log(`dp`, dp);
  // console.log(`dpMax`, dpMax);
  return dp[mLen - 1][nLen - 1][1] < 0 ? -dp[mLen - 1][nLen - 1][1] + 1 : 1;
};

function test() {
  let fun = calculateMinimumHP;
  let params = [
    //[1, 1, 1, 0]
    // [
    //   [-2, -3, 3],
    //   [-5, -10, 1],
    //   [10, 30, -5],
    // ],
    // [
    //   [-2, -3, 3],
    //   [-5, -10, 1],
    //   [10, 30, -5],
    //   [-2, -3, -10],
    // ],
    // [[-2,-3,3],[-5,-10,1],[10,30,-5]]
    [
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5],
      [-2, -3, -10],
      [-1, -1, -1],
    ],
    // [
    //   [1, -3, 3],
    //   [0, -2, 0],
    //   [-3, -3, -3],
    // ],
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
