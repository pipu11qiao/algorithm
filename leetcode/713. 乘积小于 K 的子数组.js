/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k === 0) {
    return 0
  }
  const len = nums.length;
  let l = 0;
  let curProduct = 1;
  let res = 0;
  for (let r = 0; r < len; r++) {
    let curNum = nums[r];
    if (curNum >= k) {
      curProduct = 1;
      l = r + 1
    } else {
      if (curProduct * curNum >= k) {
        while (curProduct * curNum >= k) {
          curProduct /= nums[l];
          l++
        }
      }
      curProduct *= curNum
      res += r - l + 1
    }
  }
  return res
};

function test() {
  let fun = numSubarrayProductLessThanK;
  let params = [
    [10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3], 19
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()