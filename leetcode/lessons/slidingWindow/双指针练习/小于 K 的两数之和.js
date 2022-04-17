/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let max = Number.NEGATIVE_INFINITY;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum < k) {
      max = Math.max(sum, max)
      left++
    } else {
      right--
    }

  }
  if (max === Number.NEGATIVE_INFINITY) {
    return -1
  }
  return max

};

function test() {
  let fun = twoSumLessThanK;
  let params = [
    [34, 23, 1, 24, 75, 33, 54, 8], 60
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()