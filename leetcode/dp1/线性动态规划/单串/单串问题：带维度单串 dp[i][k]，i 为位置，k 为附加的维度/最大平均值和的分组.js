/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function (nums, k) {
  let sum = 0;
  let sumArr = nums.map((item) => {
    sum += item;
    return sum;
  });
  /*
  dp[i][j] i表示分成的最多的次数 1<=i<=k
  j表示nums中第j个数字
  dp[i][j] = Math.max(dp[i-1][j-1]+ (sumArr[j]-sumArr[j-1]), dp[j-2] + cur
)   */
  dp = {};
  dp[1] = sumArr.map((item, i) => item / (i + 1));
  for (let i = 2; i <= k; i++) {
    dp[i] = [...sumArr];
    for (let j = 1; j < nums.length; j++) {
      let curRes = Number.NEGATIVE_INFINITY;
      for (let n = 1; n <= j && n <= j - i + 2; n++) {
        curRes = Math.max(
          curRes,
          dp[i - 1][j - n] + (sumArr[j] - sumArr[j - n]) / n
        );
      }
      dp[i][j] = curRes;
    }
    // console.log(`dp`, dp);
  }
  return dp[k][nums.length - 1];
};

function test() {
  let fun = largestSumOfAverages;
  let params = [
    //[1, 1, 1, 0]
    // [9, 1, 2, 3, 9],
    // 3,
    // [1, 2, 3, 4, 5, 6, 7],

    // 4,
    [4, 1, 7, 5, 6, 2, 3],
    4,
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test();
