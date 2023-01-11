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
   * dp[i][j] 表示到达终点最小的初始值
   * 初始状态dp[mlen-1][nLen-1] = Math.max(-dungeon[mlen-1][nlen-1]+1,1)
   * dp[i][j] = Math.max(Math.min(dp[i-1][j],dp[i][j-1])-dungeon[i][j],1) ;
   */

  let dp = [];
  for (let i = mLen - 1; i >= 0; i--) {
    dp[i] = new Array(nLen).fill(0);
    for (let j = nLen - 1; j >= 0; j--) {
      let cur = dungeon[i][j];
      let right = j == nLen - 1 ? Number.POSITIVE_INFINITY : dp[i][j + 1];
      let down = i == mLen - 1 ? Number.POSITIVE_INFINITY : dp[i + 1][j];
      if (i === mLen - 1 && j === nLen - 1) {
        dp[i][j] = Math.max(-cur + 1, 1);
      } else {
        dp[i][j] = Math.max(Math.min(right, down) - cur, 1);
      }
    }
  }
  // console.log(`dp`, dp);
  return dp[0][0];
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
