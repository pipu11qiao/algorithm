/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  const len = nums.length;
  let product = 1;
  let r = 0;
  let l = 0;
  let res = 0;
  for (; r < len; r++) {
    const curNum = nums[r];
    product *= curNum
    while (product >= k && r >= l) {
      product /= nums[l]
      l++
    }
    if (r >= l) {
      res += r - l + 1
    }
  }
  return res
};

function test() {
  let fun = numSubarrayProductLessThanK;
  let params = [
    // [10, 5, 2, 6], 100
    [1, 2, 3], 0
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()