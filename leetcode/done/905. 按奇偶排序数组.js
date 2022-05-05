/**
 * @param {number[]} nums
 * @return {number[]}
 */
function swap(arr, i, j) {
  arr[i] = [arr[j], (arr[j] = arr[i])][0];
}
var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  for (; left < right; left++) {
    if (nums[left] % 2 !== 0) {
      swap(nums, left, right)
      right--
      left--
    }
  }
  return nums
};

function test() {
  let fun = sortArrayByParity;
  let params = [
    [3, 1, 2, 4]
    // [0]
  ];


  const res = fun.apply(null, params)
  console.log(`res`, res);
}
test()