
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = {};
  let res = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let max = 1;
    for (let j = 0; j < i; j++) {
      if (cur > nums[j]) {
        max = Math.max(max, dp[j] + 1)
      }
    }
    dp[i] = max;
    res = Math.max(max, res);
  }
  return res;
};

function test() {
  let fun = lengthOfLIS;
  let params = [
    [10, 9, 2, 5, 3, 7, 101, 18]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()