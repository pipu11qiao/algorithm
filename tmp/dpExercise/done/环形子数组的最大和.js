/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let ans = Number.NEGATIVE_INFINITY;
  let prev = Number.NEGATIVE_INFINITY;
  let len = nums.length
  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    prev = Math.max(prev, 0) + cur
    ans = Math.max(ans, prev);
  }
  // console.log(`ans`, ans);
  // [0,i] [j,len-1]
  let rightSum = [];
  let sum = 0;
  let max = Number.NEGATIVE_INFINITY;
  for (let j = len - 1; j >= 0; j--) {
    sum += nums[j]
    if (sum > max) {
      max = sum
    }
    rightSum[j] = max
  }
  // console.log(`rightSum`, rightSum);
  sum = 0
  for (let i = 0; i < len - 1; i++) {
    sum += nums[i]
    const cur = rightSum[i + 1] + sum;
    ans = Math.max(ans, cur)
  }
  return ans
};

function test() {
  let fun = maxSubarraySumCircular;
  let params = [
    // [1, -2, 3, -2]
    // [5,-3,5]
    [3,-2,2,-3]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()