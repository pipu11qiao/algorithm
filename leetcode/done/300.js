/**
 * @param {number[]} nums
 * @return {number}
 */
// fn = max{f1,f2,...fn-1}
var lengthOfLIS = function (nums) {
  const dp = {};
  new Array(nums.length).forEach((_, i) => {
    dp[i] = 1
  });
  const len = nums.length;
  for (let j = 0; j < len; j++) {
    let max = 1;
    for (let i = 0; i < j; i++) {
      if (nums[j] > nums[i]) {
        max = Math.max(max, dp[i] + 1)
      }
    }
    dp[j] = max
  }
  return Math.max.apply(Math, Object.values(dp))
};

function test() {
  // let arr = [10, 9, 2, 5, 3, 7, 101, 18];
  // let arr = [0, 1, 0, 3, 2, 3];
  // let arr = [7,7,7,7,7,7,7];

  let arr = [1, 3, 6, 7, 9, 4, 10, 5, 6];
  const res = lengthOfLIS(arr);
  console.log(`res`, res);
}

test()