/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i])
    min = Math.min(min, nums[i])
  }
  let left = min + k;
  let right = max - k;
  return right <= left ? 0 : right - left
};

function test() {
  let fun = smallestRangeI;
  let params = [
    [1, 1, 1, 0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()