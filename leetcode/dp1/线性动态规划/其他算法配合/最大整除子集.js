/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b);
  let dp = [];
  let len = nums.length;
  let maxIndex = 0;
  let resMax = 1;
  for (let i = 0; i < len; i++) {
    let max = 1;
    let index = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0 && dp[j].count + 1 > max) {
        max = dp[j].count + 1;
        index = j;
      }
    }
    if (max > resMax) {
      resMax = max;
      maxIndex = i;
    }
    dp[i] = {
      count: max,
      group: index > -1 ? [...dp[index].group, nums[i]] : [nums[i]]
    }
  }
  return dp[maxIndex].group
};

function test() {
  let fun = largestDivisibleSubset;
  let params = [
    // [1, 2, 3]
    [1,2,4,8]
  ];

  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()