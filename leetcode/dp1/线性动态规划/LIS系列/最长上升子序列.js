/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = {};
  const len = nums.length;
  new Array(len).forEach((_, i) => {
    dp[i] = 1
  });
  for (let i = 0; i < len; i++) {
    let max = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, dp[j] + 1);
      }
    }
    dp[i] = max
  }
  // console.log(`dp`, dp);
  return Math.max.apply(Math, Object.values(dp))
};

function test() {
  let arr = [1];
  const res = lengthOfLIS(arr);
  console.log(`res`, res);
}

test()