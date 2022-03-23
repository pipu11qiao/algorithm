/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i] + Math.max(sum, 0);
    max = Math.max(max, sum)
  }
  return max
};

function test() {
  let fun = maxSubArray;
  let params = [
    [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  ];

  const res = fun.apply(null, params);
  console.log(`res`, res);
}
test()